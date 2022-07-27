import { axiosClient } from './axiosClient';
import { City, ListResponse } from 'models';

// city API
const cityApi = {
    getAll(): Promise<ListResponse<City>> {
        //set initial url
        const url = '/cities';
        return axiosClient.get(url, {
            // add params when call api
            params: {
                _page: 1,
                _limit: 10,
            },
        });
    },
};

export default cityApi;
