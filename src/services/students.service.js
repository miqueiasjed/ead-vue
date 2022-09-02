import Api from "../configs/api";

export default class StudentService {

    async getAll() {
        await Csrf.getCookie();

        return Api.get('/students')
    }

    async addStudent(params)
    {
        await Csrf.getCookie();

        return Api.post('/students', params)
    }

    async editStudent(id, params)
    {
        await Csrf.getCookie();

        return Api.put(`/students/${id}`, params)
    }

    async getStudent(id)
    {
        await Csrf.getCookie();

        return Api.get(`/students/${id}`)
    }

    async deleteStudent(id)
    {
        await Csrf.getCookie();

        return Api.delete(`/students/${id}`)
    }

}