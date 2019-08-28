import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}

const SearchBar = ({ term, onTermChange, onTermSubmit }: Props) => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={30} style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
