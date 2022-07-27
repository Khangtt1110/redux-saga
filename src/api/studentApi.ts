import { axiosClient } from './axiosClient';
import { ListParams, ListResponse, Student } from 'models';

// student API
const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<Student>> {
        //set initial url
        const url = '/students';
        return axiosClient.get(url, { params });
    },

    getById(id: string): Promise<ListResponse<Student>> {
        //set get by id url
        const url = `/students/${id}`;
        console.log('ID to get: ', id);
        return axiosClient.get(url);
    },

    add(data: Student): Promise<Student> {
        //set add url
        const url = '/students';
        return axiosClient.post(url, data);
    },

    update(data: Student): Promise<Student> {
        //set update url
        const url = '/students';
        return axiosClient.patch(url, data);
    },

    remove(id: string): Promise<ListResponse<Student>> {
        //set delete url
        const url = `/students/${id}`;
        console.log('ID delete: ', id);
        return axiosClient.delete(url);
    },
};

export default studentApi;
