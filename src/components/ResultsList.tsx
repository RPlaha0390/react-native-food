import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Result } from '../hooks/useResults';
import ResultsDetail from '../components/ResultsDetail';

interface Props {
  title: string;
  results: Result[];
}

const ResultsList = ({ title, results }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultsList;
