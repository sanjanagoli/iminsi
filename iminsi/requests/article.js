import axios from 'axios';

const URL = 'http://localhost:9090/api/article';

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


const getArticle = (articleID) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/${articleID}`)
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};


const updateArticleScore = (articleID, score) => {
  return new Promise((resolve, reject) => {
    axios.put(`${URL}/${articleID}`, { score })
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};


export {
  getAllArticles,
  getArticle,
  updateArticleScore,
};
