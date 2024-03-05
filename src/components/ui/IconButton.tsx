import {Pressable, StyleSheet} from 'react-native';
// import CustomIcon from './CustomIcon';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconButtonProps {
  icon: any;
  color: string;
  size: number;
  onPress: any;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color,
  size,
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Icon name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
