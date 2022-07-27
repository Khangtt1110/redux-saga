import { axiosClient } from './axiosClient';

// city API
const cityApi = {
    getAll() {
        const url = '/cities';
        return axiosClient.get(url);
    },
};

export default cityApi;
