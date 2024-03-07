import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/style';

const TasksSummary = ({description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.decription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskContainer: {
    fontSize: 12,
    color: Colors.primary500,
  },
  decription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});

export default TasksSummary;
