import axios from "axios";

const berlim = axios.create({
  baseURL: "http://localhost:4000/api"
});

berlim.interceptors.request.use(async config => {
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJiZXJsaW0iLCJleHAiOjE1NTM5NzM0OTQsImlhdCI6MTU1Mzg4NzA5NCwiaXNzIjoiYmVybGltIiwianRpIjoiMzBjZWE3NTAtNDkwZi00MTA0LWE3YjItNjgwNGNhZmM2ZjM4IiwibmJmIjoxNTUzODg3MDkzLCJzdWIiOiIxIiwidHlwIjoiYWNjZXNzIiwidHlwZSI6IkFkbWluIn0.GvCCCX987XOYbxcgYE7X9491WlixSSfjeRJzESvj-OEFLzUh6AnhZnOKO488Zt8tmUanFQQ0I-9TtEK7w2MQrg";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default berlim;
