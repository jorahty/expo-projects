import { Pressable, Text } from 'react-native';
import styles from '../Styles';

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onPress?: () => void;
}

export default function Button({ children, icon, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      {children && (
        <Text selectable={false} style={styles.buttonText}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}
