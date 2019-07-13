const URL =
  "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

export function requestPhotoes() {
  return new Promise((resolve, reject) => {
    fetch(URL).then(response => {
      if (response.status === 200) {
        response.json().then(body => {
          resolve({
            body,
            status: response.status
          });
        });
      } else {
        try {
          reject({
            code: parseInt(`${response.status}`)
          });
        } catch (err) {
          reject({
            body: err,
            code: parseInt(`${response.status}`)
          });
        }
      }
    });
  });
}
