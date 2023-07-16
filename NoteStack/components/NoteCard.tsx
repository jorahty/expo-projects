import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './Styles';
// import MenuButton from './MenuButton';

export interface Note {
  content: string;
  date: Date;
}

interface Props {
  note: Note;
  onDelete: () => void;
}

export default function NoteCard({ note, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardText}>
        <Text style={styles.text}>{note.content}</Text>
        <Text style={[styles.text, styles.caption]}>
          {note.date.toLocaleDateString()} at {note.date.toLocaleTimeString()}
        </Text>
      </View>
      <Pressable onPress={onDelete}>
        <MaterialIcons name="close" style={styles.deleteIcon} />
      </Pressable>
      {/* <MenuButton /> */}
      {/* <Pressable onPress={() => {}}>
        <MaterialIcons name="more-horiz" style={styles.menuIcon} />
      </Pressable>
      <Modal animationType="slide" visible={false} transparent={true}>
        <View style={styles.modalContent}>
          <MaterialIcons name="more-horiz" style={styles.menuIcon} />
        </View>
      </Modal> */}
    </View>
  );
}
