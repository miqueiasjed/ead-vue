<template>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ student.name }}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ student.email }}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ student.birth_date }}</td>
    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <router-link :to="{name: 'students.edit', params: {id: student.id}}" class="text-indigo-600 hover:text-indigo-900">Editar</router-link>
        <a href="#" class="text-red-600 hover:text-red-900 m-2" @click.prevent="deleteStudent">Deletar</a>
    </td>
</template>

<script>
import StudentService from '@/services/students.service'
export default {
    name: 'Student',
    props: {
        student: {
            require: true,
            type: Object,
        }
    },
    setup(props, {emit}) {
        const deleteStudent = () => {
            StudentService.deleteStudent(props.student.id)
                        .then(() => emit('studentDeleted', props.student))
        }
        return {
            deleteStudent,
        }
    }
}
</script>