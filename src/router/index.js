import { createRouter, createWebHistory } from 'vue-router'
import addStudentsVue from '../views/Students/addStudents.vue'
import EditStudentsVue from '../views/Students/EditStudents.vue'
import ShowStudentsVue from '../views/Students/ShowStudents.vue'
import StudentsVue from '../views/Students/Students.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { guestOnly: true }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { guestOnly: true }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { authOnly: true }
    }
    // {
    //   path: '/',
    //   name: 'students.index',
    //   component: StudentsVue,
    // }, 
    // {
    //   path: '/students/create',
    //   name: 'students.create',
    //   component: addStudentsVue,
    // }, 
    // {
    //   path: '/students/:id/edit',
    //   name: 'students.edit',
    //   component: EditStudentsVue,
    //   props: true
    // },
    // {
    //   path: '/students/:id/show',
    //   name: 'students.show',
    //   component: ShowStudentsVue,
    //   props: true
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});


function isLoggedIn() {
  return localStorage.getItem("auth");
}

export default router
