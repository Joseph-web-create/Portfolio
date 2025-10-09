import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
const timeout = "Waiting for too long...Aborted!";

const config = {
  baseURL: url,
  timeoutErrorMessage: timeout,
};

const axiosInstance = axios.create(config);

export default axiosInstance;
