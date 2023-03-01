import * as helper from "./helper";

const apiPathToCall = "http://localhost";
export default async function asyncApiCall(
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
      }).then((res) => res.json());
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
        .then((res) => {
          if (res.status === 401) {
            localStorage.clear();
          } else return res.json();
        })
        .catch(function (e) {});
  }
}
