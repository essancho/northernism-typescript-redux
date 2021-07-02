import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:5000/",
});

const $authHost = axios.create({
    baseURL: "http://localhost:5000/",
});

const authInterceptor = (config: any): any => {
    config.headers.authorization = `Bearer ${localStorage.getItem(
        "USER-TOKEN"
    )}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
