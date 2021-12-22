import axios from "axios";

// Coloque o servidor onde as api devem ser consumidas

const api = axios.create({
    baseURL: "http://localhost:1337",
});

export default api;