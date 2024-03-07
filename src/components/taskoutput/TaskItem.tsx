import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/style';
import {getFormattedDate} from '../../util/date';
import {useNavigation} from '@react-navigation/native';

function TaskItem({id, taskName, date}) {
  const navigation = useNavigation();

  function taskPressHandler() {
    navigation.navigate('ManageTask', {
      taskId: id,
    });
  }
  return (
    <Pressable
      onPress={taskPressHandler}
      style={({pressed}) => pressed && styles.pressed}
    >
      <View style={styles.taskItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{taskName}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  taskItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
});
