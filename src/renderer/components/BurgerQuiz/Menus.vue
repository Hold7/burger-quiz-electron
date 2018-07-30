<template>
  <div class="burger-wrapper">
    <p class="has-text-centered">
      Menus
    </p>
    <ol class="question-wrapper">
      <li v-for="menu in menus" class="is-flex">
        <p>{{menu.title}}</p>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    created: function () {
      console.log('Menus')
      this.bus.$on('enter', this.goToAddition)
    },
    props: ['bus'],
    data: function () {
      return {
        menus: [
          {
            id: 1,
            title: 'Les combats célèbres'
          },
          {
            id: 2,
            title: 'Les records mondiaux'
          },
          {
            id: 3,
            title: 'Les Chantiers de l’Atlantique, un thème marin qui plaira tant aux amateurs des grandes constructions qu’aux matelots de tous types, ou intéressera à minima les habitants de Saint-Nazaire.'
          }
        ]
      }
    },
    methods: {
      goToAddition () {
        this.$router.push('/burger-quiz/laddition')
      }
    }
  }
</script>
<style lang="scss">
.question-wrapper {
  font-family: $question-font;
}

ol li {
  margin-left: 150px;
  margin-right: 100px;
  margin-bottom: 50px;
  p {
    align-self: center;
    font-size: 40px;
  }
}
</style>
