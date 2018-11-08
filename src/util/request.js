const myServerUrl = "http://www.gbank.pro:5000";
const blockServerPro = "http://www.gbank.pro:5000/API";
const format_json = response => {
  return response.json();
};
const checkStatus = response => {
  if (response.success) {
    return response.data;
  }
};
export const request_get = url => {
  return fetch(`${myServerUrl}${url}`)
    .then(format_json)
    .then(checkStatus);
};
export const request_post=(url,data)=>{
  return fetch(`${blockServerPro}${url}`,{
    method:"POST",
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(format_json)
  .then(checkStatus);
}