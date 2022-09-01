<template>
    <div>
        <h1>Editar Aluno</h1>

        <form action="#" method="post" @submit.prevent="editStudent">
            <input type="text" name="name" placeholder="Nome" v-model="student.name">
            <input type="text" name="email" placeholder="Email" v-model="student.email">
            <input type="date" name="birth_date" placeholder="Data de Nascimento" v-model="student.birth_date">
            <button type="submit" :disabled="student.loading">
                <span v-if="student.loading">Aguarde...</span>
                <span v-else>Enviar</span>
            </button>
        </form>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import StudentService from '@/services/students.service'
import router from '@/router'
export default {
    name: 'EditStudent',
    props: {
        id: {
            require: true
        }
    },
    setup(props) {
        const student = reactive({
            name: '',
            email: '',
            loading: false
        })
        onMounted(async () => {
            student.loading = true
            StudentService.getStudent(props.id)
                        .then(response => {
                            const studentR = response.data.data
                            student.name = studentR.name
                            student.email = studentR.email
                            student.birth_date = studentR.birth_date
                        })
                        .finally(() => student.loading = false)
        })
        const editStudent = () => {
            student.loading = true
            StudentService.editStudent(props.id, {...student})
                        .then(() => router.push({name: 'students.index'}))
                        .finally(() => student.loading = false)
        }
        return {
            editStudent,
            student
        }
    }
}
</script>