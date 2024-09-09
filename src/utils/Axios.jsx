import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjgxOGMzNjZhMGQxMzRjNjcyYTNjODNmOGMzMWMyZCIsIm5iZiI6MTcyNTU3MTkxOC42NjczNTEsInN1YiI6IjY2ZGExZTRiNTlhYzIyZDUyNDdjN2E0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rqh3BtbRRrt37_LpZCGY0dzUfiBh86Z2HF8kW56D1ig'
    }
});

export default instance;