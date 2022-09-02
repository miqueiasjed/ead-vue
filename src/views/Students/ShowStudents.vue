<template>
    <div>
    <div class="overflow-hidden bg-white shadow sm:rounded-md"> 
      <ul role="list" class="divide-y divide-gray-200">
        <li>
          
        <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-indigo-600 truncate">
                    Curso
                </p>
                <div class="flex flex-shrink-0 ml-2">
                    <p class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
                        <!-- {{student.course.title}} -->
                    </p>
                </div>
            </div>
        </div>

          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                Nome
              </p>
              <div class="flex flex-shrink-0 ml-2">
                <p class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
                  {{student.name}}
                </p>
              </div>
            </div>
          </div>

          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                Email
              </p>
              <div class="flex flex-shrink-0 ml-2">
                <p class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
                  {{student.email}}
                </p>
              </div>
            </div>
          </div>

          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                Data de Nascimento
              </p>
              <div class="flex flex-shrink-0 ml-2">
                <p class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full">
                  {{student.birth_date}}
                </p>
              </div>
            </div>
          </div>

        </li>
      </ul>

      <router-link :to="{name: 'students.index'}" class="text-indigo-600 hover:text-indigo-900">Voltar</router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import StudentService from '@/services/students.service'
import router from '@/router'

export default {
    name: 'ShowStudent',
    props: {
        id: {
            require: true
        }
    },
    setup(props) {  
        const student = reactive({
            name: '',
            email: '',
            birth_date: '',
            course_id: ''
        })
        onMounted(async () => {
            StudentService.getStudent(props.id)
                        .then(response => {
                            const studentR = response.data.data
                            student.course_id = studentR.course_id
                            student.name = studentR.name
                            student.email = studentR.email
                            student.birth_date = studentR.birth_date
                        })
        })
              
        return {
           student
        }
    }
}
</script>