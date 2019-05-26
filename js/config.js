const prodPath = "https://us-central1-mil-website.cloudfunctions.net/app/";
const devPath = "http://localhost:5000/mil-website/us-central1/app/";

const config = {
    apiPath: prodPath,
    appStatus: false
}

export function getApiPath() {
    return config.apiPath;
}

export function isAppLive() {
    return config.appStatus;
}