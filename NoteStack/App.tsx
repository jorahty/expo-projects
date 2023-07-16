import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Keyboard,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from './components/Styles';
import NoteCard, { Note } from './components/NoteCard';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    setNotes(notes.concat({ content: inputText, date: new Date() }));
    setInputText('');
    Keyboard.dismiss();
  };

  const deleteNoteAt = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.main}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.contentContainer}>
            {notes.map((note, index) => (
              <NoteCard
                key={index}
                note={note}
                onDelete={() => deleteNoteAt(index)}
              />
            ))}
          </ScrollView>
          <KeyboardAvoidingView
            style={styles.controls}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              style={[styles.text, styles.textInput]}
              placeholderTextColor="#8e8a94"
              placeholder="Note"
              onSubmitEditing={inputText ? addNote : undefined}
            />
            <Pressable onPress={addNote} disabled={!inputText}>
              <MaterialIcons
                name="add-circle"
                style={[styles.addIcon, { opacity: !inputText ? 0.2 : 1 }]}
              />
            </Pressable>
          </KeyboardAvoidingView>
        </View>
      </View>
      {/* <StatusBar style="light" /> */}
    </SafeAreaView>
  );
}
