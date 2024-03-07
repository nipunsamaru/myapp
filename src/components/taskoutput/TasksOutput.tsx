import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TasksSummary from './TasksSummary';
import TasksList from './TasksList';
import {Colors} from '../../constants/style';

const TasksOutput = ({tasks, description, fallbackText}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (tasks.length > 0) {
    content = <TasksList tasks={tasks} />;
  }
  return (
    <View style={styles.container}>
      <TasksSummary description={description} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 48,
    backgroundColor: Colors.primary700,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});

export default TasksOutput;
