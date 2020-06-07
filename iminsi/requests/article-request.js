import axios from 'axios';

const URL = 'http://localhost:9090/api/article';
// const URL = 'http://iminsi-api.herokuapp.com/api/article';

const getAllArticles = () => {
  console.log('in getallarticles');
  return new Promise((resolve, reject) => {
    axios.get(`${URL}`)
      .then((response) => {
        console.log('insideeeee');
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getArticle = (articleID) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${articleID}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


const updateArticleScore = (articleID, score) => {
  return new Promise((resolve, reject) => {
    axios.put(`${URL}/${articleID}`, { score })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getVerifiedArticles = () => {
  console.log(' in verified artcies');
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/verified`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export {
  getAllArticles,
  getArticle,
  updateArticleScore,
  getVerifiedArticles,
};
