<template>
  <div class="burger-wrapper">
    <p class="has-text-centered"><span>Nuggets</span></p>
  </div>
</template>
<script>
  export default {
    created: function () {
      this.bus.$on('enter', this.openQuestion)
    },
    props: ['bus'],
    methods: {
      openQuestion () {
        this.$router.push('/burger-quiz/nuggets/questions')
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
</style>