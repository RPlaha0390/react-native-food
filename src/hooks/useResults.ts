import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export interface Result {
  id: string;
  price: string;
  name: string;
  image_url: string;
  review_count: number;
  rating: number;
}

export default (): [(searchTerm: string) => void, Result[], string] => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'London'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Oops! Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
