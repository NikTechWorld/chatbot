/* export const showNotification = (title: string, body: string) => {
  if (typeof Notification !== "undefined")
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        const icon = "%PUBLIC_URL%/favicon.ico";
          var notification = new Notification(title, { body, icon });
          let showNotification = document.visibilityState !== "visible";
      }
    });
};
 */
export const showNotification = (
  title: string,
  icon: string = "https://social.webestica.com/assets/images/favicon.ico",
  body: string
) => {
  if (document.visibilityState === "visible") return;

  var notification = new Notification(title, { body, icon });
  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
};
export const requestAndShowPermission = (
  title: string,
  icon: string,
  body: string
) => {
  Notification.requestPermission(function (permission) {
    if (permission === "granted") {
      showNotification(title, icon, body);
    }
  });
};
