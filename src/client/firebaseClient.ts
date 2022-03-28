import axios from "axios";

const firebaseClient = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  timeout: 1000,
  params: {
      key: process.env.WEBAPIKEY
  }
});

export default firebaseClient