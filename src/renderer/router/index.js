import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/burger-quiz',
      name: 'burger-quiz',
      component: require('@/components/BurgerQuiz').default,
      children: [
        {
          path: '/',
          name: 'home',
          component: require('@/components/BurgerQuiz/Home').default
        },
        {
          path: 'nuggets',
          name: 'nuggets',
          component: require('@/components/BurgerQuiz/Nuggets').default,
          children: [
            {
              path: '/',
              name: 'nuggets-home',
              component: require('@/components/BurgerQuiz/Nuggets/NuggetsHome')
                .default
            },
            {
              path: 'questions',
              name: 'questions',
              component: require('@/components/BurgerQuiz/Nuggets/NuggetQuestion')
                .default
            }
          ]
        },
        {
          path: 'sel-ou-poivre',
          name: 'sel-ou-poivre',
          component: require('@/components/BurgerQuiz/SelOuPoivre').default
        },
        {
          path: 'menus',
          name: 'menus',
          component: require('@/components/BurgerQuiz/Menus').default
        },
        {
          path: 'laddition',
          name: 'l-addition',
          component: require('@/components/BurgerQuiz/Addition').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
