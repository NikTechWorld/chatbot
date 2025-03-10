export function parseJwt(token: string) {
  if (!token.trim()) return;
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
export const getAccessToken = () => localStorage.getItem("accessToken") || "";
export function getParameterByName(name: string) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(window.location.href);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
export const haveAuthorizeToken = () =>
  Math.floor(Date.now() / 1000) <= parseJwt(getAccessToken())?.exp;
export const updateReducer = (type: string, payload: object) => {
  return { type, payload };
};
