import axios from "axios";
class httpService {
    constructor(){};
    get(url: string) {
        return axios.get(url, {
            method: 'GET'
        })
    }
}
const axiosService = new httpService()

export default axiosService;