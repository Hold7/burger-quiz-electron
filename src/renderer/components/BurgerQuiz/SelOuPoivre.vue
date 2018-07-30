<template>
  <div class="burger-wrapper">
    <p class="has-text-centered seloupoivre"><span>Sel</span><br/><span>O</span><span>u</span><br/><span>Poivre</span></p>
    <div v-show="show" class="has-text-centered theme">{{theme}}</div>
  </div>
</template>
<script>
  export default {
    created: function () {
      this.bus.$on('enter', this.openMenus)
      this.bus.$on('arrowright', this.showTheme)
    },
    props: ['bus'],
    data: function () {
      return {
        theme: 'excellent, bizarre, ou les deux',
        show: false
      }
    },
    methods: {
      openMenus () {
        this.$router.push('/burger-quiz/menus')
      },
      showTheme () {
        this.show = true
      }
    }
  }
</script>
<style lang="scss">
p {
  :nth-child(even) {
    color: $yellow;
  }
  :nth-child(odd) {
    color: $red;
  }
  :first-child,
  :last-child {
    color: $blue;
  }
}

.seloupoivre {
  font-size: 150px;
}

.theme {
  margin-top: 50px;
  font-size: 120px;
}
</style>