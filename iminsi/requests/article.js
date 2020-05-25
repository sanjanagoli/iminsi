import axios from 'axios';

const URL = `http://localhost:9090/api/article`;

const getAllArticles = () => {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}`)
        .then((response) => {
          resolve(response.data.response);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };


const getAllArticles = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${URL}`)
        .then((response) => {
            resolve(response.data.response);
        })
        .catch((error) => {
            reject(error.response.data);
        });
    });
};

export {
    getCountryCount,
    getStateCount,
    getCountyData,
    getStateData,
};
  