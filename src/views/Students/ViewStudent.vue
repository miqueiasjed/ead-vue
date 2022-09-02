<template>
    <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ student.course.title }}</td>
    <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ student.name }}</td>
    <td class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
        <router-link :to="{name: 'students.edit', params: {id: student.id}}" class="mb-2 text-indigo-600 hover:text-indigo-900">Editar</router-link>
        <router-link :to="{name: 'students.show', params: {id: student.id}}" class="ml-2 text-green-600 hover:text-green-900">Visualizar</router-link>
        <a href="#" class="m-2 text-red-600 hover:text-red-900" @click.prevent="deleteStudent">Deletar</a>
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