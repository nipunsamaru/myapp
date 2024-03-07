import {StyleSheet, View} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {Colors} from '../constants/style';
import IconButton from '../components/ui/IconButton';
import Button from '../components/ui/Button';
import {TasksContext} from '../store/tasks-context';
import TasksForm from '../components/managetasks/TasksForm';
import {storeTask, updateTask, deleteTask} from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

const ManageTask = ({route, navigation}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const taskCtx = useContext(TasksContext);

  const editedTaskId = route.params?.taskId;
  const isEditing = !!editedTaskId;

  const selectedTask = taskCtx.tasks.find(task => task.id === editedTaskId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Task' : 'Add Task',
    });
  }, [navigation, isEditing]);

  async function deleteItemHandler() {
    try {
      await deleteTask(editedTaskId);
      taskCtx.deleteTask(editedTaskId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete task - please try again later!');
      setIsSubmitting(true);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(taskData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        taskCtx.updateTask(editedTaskId, taskData);
        await updateTask(editedTaskId, taskData);
      } else {
        const id = await storeTask(taskData);
        taskCtx.addTsk({...taskData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <TasksForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedTask}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.error500}
            size={36}
            onPress={deleteItemHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center',
  },
});

export default ManageTask;
