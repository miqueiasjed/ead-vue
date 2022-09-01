<template>
    <div class="mt-10 sm:mt-0">
        <div class="flex-1 min-w-0 pb-4">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Cadastro de Alunos</h1>
        </div>
        
        <div class="md:grid md:grid-cols-2 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form @submit.prevent='addStudent' method="POST">
                    <div class="overflow-hidden shadow sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                
                                <div class="col-span-4 sm:col-span-3">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                                    <input v-model="student.name" type="text" name="name" id="name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                
                                    <!-- <div v-if="student.errors.obs" v-text="student.errors.obs" class="mt-1 text-xs text-red-500"></div> -->
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input v-model="student.email" type="email" name="email" id="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                
                                    <!-- <div v-if="student.errors.obs" v-text="student.errors.obs" class="mt-1 text-xs text-red-500"></div> -->
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    <label for="birth_date" class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                                    <input v-model="student.birth_date" type="date" name="birth_date" id="birth_date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                
                                    <!-- <div v-if="student.errors.birth_date" v-text="student.errors.birth_date" class="mt-1 text-xs text-red-500"></div> -->
                                </div>

                                <div class="col-span-4 sm:col-span-3">
                                    
                                    <label for="course_id" class="block text-sm font-medium text-gray-700">Curso</label>
                                
                                    <select name="course_id" class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option v-for="(course) in courses" :key="course.id" :value='course.id'> {{course.title}} </option>
                                    </select>

                                    <!-- <div v-if="form.errors.course_id" v-text="form.errors.course_id" class="mt-1 text-xs text-red-500"></div> -->
                                </div>
                                
                                
                            </div>

                            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                <router-link :to="{name: 'students.index'}" class="text-indigo-600 hover:text-indigo-900">Voltar</router-link>
                                <button type="submit" class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import CoursesService from '@/services/courses.service'
import router from '@/router'
export default {
    name: 'AddStudents',
    setup() {
        const courses = ref()
        
        const student = reactive({
            course_id: '',
            name: '',
            email: '',
            birth_date: '',
        })
        
        onMounted(async () => {
            CoursesService.getAll()
                        .then(response => {
                            courses.value = response.data.data.data
                        })
        })
        
        const addStudent = () => {
            StudentService.addStudent({...student})
                        .then(() => router.push({name: 'students.index'}))
        }
        return {
            addStudent,
            courses,
            student
        }
    }
}
</script>