import axios from 'axios';

//const URL = 'http://localhost:9090/api/interest';
const URL = 'http://iminsi-api.herokuapp.com/api/interest';

const getInterests = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}`)
      .then((response) => {
        
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};


export {
  // eslint-disable-next-line import/prefer-default-export
  getInterests,
};
