 
import * as helper from "./helper";

const apiPathToCall =
  process.env.REACT_APP_BACKEND_URL + "/" + process.env.REACT_APP_API_VERSION;
export default async function AsyncApiCall(
  service: string,
  method: string,
  data: any
) {   
  let url = "";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let token = helper.getAccessToken();
  if (token) myHeaders.append("Authorization", `Bearer ${token}`); 
  switch (method) {
    case "POST": 
      return fetch(apiPathToCall + service, {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders,
      }).then(async (responce) => {
        let responceData = await responce.json(); 
        if (responce.status !== 200 || responceData.STATUS !== 200) {
          localStorage.clear();
          window.location.assign("/")
        }
        else return responceData.DATA
      })
        .catch(function (error) {
          localStorage.clear()
          window.location.assign("/") 
         });
    default:
      if (data)
        url = Object.keys(data)
          .map(
            (k: any) =>
              encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
          )
          .join("&");
      return await fetch(apiPathToCall + "/" + service + "?" + url, {
        headers: myHeaders,
      })
        .then(async (responce) => {
          let responceData = await responce.json(); 
          if (responce.status !== 200 || responceData.STATUS !== 200) {
            localStorage.clear()
            window.location.assign("/")
          }
          else return responceData.DATA
        })
        .catch(function (error) {
          localStorage.clear()
          window.location.assign("/") 
         });
  }
}
