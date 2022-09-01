import axios from 'axios'

export default class StudentService {

    static async getAll() {
        return axios.get('/students')
    }

    static async addStudent(params)
    {
        return axios.post('/students', params)
    }

    static async editStudent(id, params)
    {
        return axios.put(`/students/${id}`, params)
    }

    static async getStudent(id)
    {
        return axios.get(`/students/${id}`)
    }

    static async deleteStudent(id)
    {
        return axios.delete(`/students/${id}`)
    }

}