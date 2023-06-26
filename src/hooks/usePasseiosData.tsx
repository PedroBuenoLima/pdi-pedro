import { useState, useEffect } from 'react';
import axios from 'axios';

const usePasseiosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/passeios')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return data;
};

export default usePasseiosData;
