import axios from "axios";
import https from "https";
import {getAppStoreValue} from "../components/common/Helpers";
// Local Server
// const BASE_HOST = 'localhost';

// Localhost Server
// const BASE_HOST = "127.0.0.1";

// Dev Server
export const BASE_HOST = "i-ways.net";

export const BASE_URL = "http://" + BASE_HOST + ":3000/api/";
export const ADMIN_URL = "https://" + BASE_HOST + ":3000/admin/";


const headers = {
    "Content-Type": "application/JSON"
};

const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    // httpsAgent: agent,
    // https: true
});


instance.interceptors.request.use(
    function (request) {
        // request.httpsAgent = new https.Agent({
        //     rejectUnauthorized: false,
        //     cert: file,
        // });
        let token = getAppStoreValue("accessToken").toString();
        if (!!token) {
            request.headers.authorization = `Bearer ${token}`;
        } else {
            request.config = { headers: { "Content-Type": "multipart/form-data" } };
        }
        // Do something with response data
        return request;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        try {
            var res = JSON.parse(response.request.responseText.replace(/("[^"]*"\s*:\s*)(\d{16,})/g, '$1"$2"'))
            response.data.responseObj = res.responseObj;
        }
        catch (e) {
            console.log("Error Parsing json", e);
        }


        return response;
    },
    function (error) {
        if (!!error.response) {
            let status = error.response.status;
            switch (status) {
                case 401:
                    sessionStorage.setItem("isAuthenticated", false);
                    sessionStorage.setItem("token", "");
                    window.location.href = "/login";
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default instance;