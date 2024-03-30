import { createRouter, createWebHashHistory } from 'vue-router'

// import StartingPage from "./views/StartingPage.vue";
//för lärare
// import LandingpageTeacher from "./views/LandingPageTeacher";
// import ResultpageTeacher from "./views/ResultPageTeacher.vue"

import TestPageTeacher from './views/TestPageTeacher.vue'

//för elever
import LoginPage from './views/LoginPage.vue'
import LandingPageStudent from './views/LandingPageStudent.vue'
import TestPageStudent from './views/TestPageStudent.vue'
import LandingPageTeacher from './views/LandingPageTeacher.vue'
import ResultPageStudent from './views/ResultPageStudent.vue'
import ChangePasswordView from './views/ChangePasswordView.vue'
import CreateClass from './views/CreateClass.vue'
import FrontPage from './views/FrontPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginPage,
      path: '/login'
    },
    {
      component: LandingPageTeacher,
      path: '/landingpageTeacher'
    },

    {
      component: TestPageTeacher,
      path: '/testT'
    },
    // {
    //   component: ResultPageTeacher,
    //   path: "/resultTeacher",
    // },
    {
      component: CreateClass,
      path: '/createClass'
    },

    {
      component: LandingPageStudent,
      path: '/landingpageStudent'
    },

    {
      component: TestPageStudent,
      path: '/testStudent'
    },
    {
      component: ResultPageStudent,
      path: '/resultStudent'
    },
    {
      component: ChangePasswordView,
      path: '/changePasswordView'
    },
    {
      component: FrontPage,
      path: '/'
    }
  ]
})
