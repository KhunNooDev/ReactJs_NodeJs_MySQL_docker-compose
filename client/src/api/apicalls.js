import axios from 'axios';

const host = process.env.REACT_APP_SERVER_HOST;
const port = process.env.REACT_APP_SERVER_PORT;
const url = `${host}:${port}`;

export async function getAPI(api, set, config) {
  await axios
    .get(`${url}/${api}`, config)
    .then((res) => {
      set(res.data.results);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
}

export async function postAPI(api, body, config) {
  await axios
    .post(`${url}/${api}`, body, config)
    .then(() => {})
    .catch((err) => {
      alert(err.response.data.message);
    });
}

export async function patchAPI(api, body, config) {
  await axios
    .patch(`${url}/${api}`, body, config)
    .then(() => {})
    .catch((err) => {
      alert(err.response.data.message);
    });
}

export async function deleteAPI(api, id) {
  await axios
    .delete(`${url}/${api}/${id}`)
    .then(() => {})
    .catch((err) => {
      alert(err.response.data.message);
    });
}
