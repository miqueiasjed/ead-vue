import axios from 'axios'

export default class CoursesService {

    static async getAll() {
        return axios.get('/courses')
    }

    static async addStudent(params)
    {
        return axios.post('/courses', params)
    }

    static async editStudent(id, params)
    {
        return axios.put(`/courses/${id}`, params)
    }

    static async getStudent(id)
    {
        return axios.get(`/courses/${id}`)
    }

    static async deleteStudent(id)
    {
        return axios.delete(`/courses/${id}`)
    }

}