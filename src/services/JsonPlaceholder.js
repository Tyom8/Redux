import axios from "axios";

const PLACEHOLDER = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
});

export {PLACEHOLDER};