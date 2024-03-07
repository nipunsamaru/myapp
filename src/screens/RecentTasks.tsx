import {StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TasksOutput from '../components/taskoutput/TasksOutput';
import {TasksContext} from '../store/tasks-context';
import {getDateMinusDays} from '../util/date';
import {fetchTasks} from '../util/http';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';

const RecentTasks = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const tasksCtx = useContext(TasksContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const tasks = await fetchTasks();
        tasksCtx.setTasks(tasks);
      } catch (error) {
        setError('Could not fetch tasks!');
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentTasks = tasksCtx.tasks.filter(task => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return task.date >= date7DaysAgo && task.date <= today;
  });
  return (
    <TasksOutput
      tasks={recentTasks}
      description="Last 7 days"
      fallbackText="No any recent tasks found"
    />
  );
};

const styles = StyleSheet.create({});

export default RecentTasks;
