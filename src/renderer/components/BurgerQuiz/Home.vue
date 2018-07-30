<template>
  <div class="burger-wrapper">
    <p class="has-text-centered">
      <span>Burger</span><br/>
      <span>Q</span><span>u</span><span>i</span><span>z</span>
    </p>
  </div>
</template>
<script>
  export default {
    created: function () {
      this.bus.$on('enter', this.startQuiz)
    },
    props: ['bus'],
    methods: {
      startQuiz () {
        this.$router.push('/burger-quiz/nuggets')
      }
    }
  }
</script>
<style lang="scss">
.burger-wrapper {
  font-size: 200px;
}
p {
  :nth-child(even) {
    color: $yellow;
  }
  :nth-child(odd) {
    color: $red;
  }
  :first-child {
    color: $blue;
  }
}
</style>

