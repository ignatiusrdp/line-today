import axios from "axios"

const request = axios.create({
    baseURL: "https://today.line.me/id/portaljson"
})

export default request;