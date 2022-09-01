<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Alunos</h1>
          <p class="mt-2 text-sm text-gray-700">Lista de Alunos</p>
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <router-link :to="{name: 'students.create'}" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Cadastrar Aluno</router-link>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nascimento</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">Ações</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="student in students" :key="student.id">
                    <ViewStudent :student="student" @StudentDeleted="removeStudentList" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import StudentService from '@/services/students.service'
import ViewStudent from './ViewStudent.vue'

export default {
    name: 'Student',
    setup() {
        const students = ref([])
        onMounted(() => {
            StudentService.getAll()
                    .then(response => students.value = response.data.data.data)
                    .catch(error => console.log(error))
        })
        const removeStudentList = (student) => students.value.splice(students.value.indexOf(student), 1)
        const studentUpdated = (student) => students.value[students.value.indexOf(student)] = student
        return {
            students,
            removeStudentList,
            studentUpdated,
        }
    },
    components: {ViewStudent}
}
</script>