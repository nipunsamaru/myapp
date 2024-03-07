import React, {useContext} from 'react';
import TasksOutput from '../components/taskoutput/TasksOutput';
import {TasksContext} from '../store/tasks-context';

const AllTasks = () => {
  const taskCtx = useContext(TasksContext);
  return (
    <TasksOutput
      tasks={taskCtx.tasks}
      description="Total"
      fallbackText="No tasks found"
    />
  );
};

export default AllTasks;
