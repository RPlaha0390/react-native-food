import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
