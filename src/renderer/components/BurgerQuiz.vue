<template>
  <div>
    <scores :bus="bus"></scores>
    <router-view :bus="bus"></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import Scores from './BurgerQuiz/Scores'

export default {
  created: function () {
    window.addEventListener('keyup', this.keyupHandler)
    this.bus.$on('escape', this.resetApp)
    this.bus.$on('victory', this.burgerDeLaMort)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyupHandler)
  },
  components: { Scores },
  data () {
    return {
      // this is used to broadcast events from parent to childrens.
      // This Vue instance is passed as a prop to child and event are triggered on this instance.
      bus: new Vue(),
      display: false
    }
  },
  methods: {
    keyupHandler (keypressed) {
      let eventName = keypressed.key.toLowerCase()
      if (keypressed.code === 'Space') {
        eventName = 'space'
      }
      this.bus.$emit(eventName)
      console.log(eventName)
    },
    resetApp () {
      this.$router.push('/')
    },
    burgerDeLaMort (sauce) {
      alert(sauce + ' won')
    }
  }
}
</script>

<style lang="scss">
</style>


