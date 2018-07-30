<template>
  <div class="burger-wrapper">
    <p class="has-text-centered seloupoivre"><span>L'addition</span></p>
    <div v-show="show" class="has-text-centered theme">{{theme}}</div>
  </div>
</template>
<script>
  export default {
    created: function () {
      this.bus.$on('arrowright', this.showTheme)
      this.bus.$emit('setincrement', this.calculateMiams())
    },
    props: ['bus'],
    data: function () {
      return {
        theme: 'Accent Belge',
        show: false
      }
    },
    methods: {
      showTheme () {
        this.show = true
      },
      calculateMiams () {
        // this function will calculate the number of miams each question will give
        return 4
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