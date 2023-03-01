const apiPathToCall = "http://localhost"
export default async function asyncApiCall(service: string, method: string, data:any) {
    let url = "";
    let headers = {
        "Content-Type": "application/json",
    };
    switch (method) {
        case "POST": 
            return fetch(apiPathToCall+service,{method: "POST",body:JSON.stringify(data)}).then(res=>res.json())
        default:
            if(data)
            url = Object.keys(data)
                .map((k: any) =>
                    encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
                )
                .join("&");
            return await fetch(apiPathToCall + "/" + service + "?" + url, {
                headers: headers,
            })
                .then((res) => {
                    if (res.status === 401) {
                        localStorage.clear();
                    } else return res.json();
                })
                .catch(function (e) {
                });
    }
}