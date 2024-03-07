import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';

function renderExpenseItem(itemData) {
  return <TaskItem {...itemData.item} />;
}

const TasksList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default TasksList;
