import { createRouter, createWebHistory } from 'vue-router'
import addStudentsVue from '../views/Students/addStudents.vue'
import EditStudentsVue from '../views/Students/EditStudents.vue'
import StudentsVue from '../views/Students/Students.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students.index',
      component: StudentsVue,
    }, 
    {
      path: '/students/create',
      name: 'students.create',
      component: addStudentsVue,
    }, 
    {
      path: '/students/:id/edit',
      name: 'students.edit',
      component: EditStudentsVue,
      props: true
    }
  ]
})

export default router
