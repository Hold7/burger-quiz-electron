<template>
<div class="modal" v-bind:class="{ 'is-active': show }">
  <div class="modal-background"></div>
  <div class="modal-content is-flex">
    <!-- Any other Bulma elements you want -->
    <div class="ketchup score has-text-centered">
      <span>{{score.ketchup}}</span>
      <img v-bind:src="scoreImage + score.ketchup + '.gif'">
    </div>
    <div class="mayo score has-text-centered">
      <span>{{score.mayo}}</span>
      <img v-bind:src="scoreImage + score.mayo + '.gif'">
    </div>
  </div>
</div>
</template>

<script>
  export default {
    created: function () {
      this.bus.$on('space', this.display)
      this.bus.$on('k', () => this.editScore('inc', 'ketchup'))
      this.bus.$on('j', () => this.editScore('dec', 'ketchup'))
      this.bus.$on('m', () => this.editScore('inc', 'mayo'))
      this.bus.$on('l', () => this.editScore('dec', 'mayo'))
      this.bus.$on('setincrement', this.setIncrement)
    },
    props: ['bus'],
    data: function () {
      return {
        show: false,
        scoreImage: 'static/scores/',
        score: {
          mayo: 0,
          ketchup: 0
        },
        increment: 1 // Number of miams to be added
      }
    },
    methods: {
      display: function () {
        this.show = !this.show
        this.imageUrl = 'static/scores/' + this.score.ketchup + '.gif'
      },
      editScore: function (way, sauce) {
        if (way === 'inc') {
          this.score[sauce] += this.increment
        } else if (way === 'dec') {
          this.score[sauce]--
        }
        if (this.score[sauce] >= 25) {
          this.bus.$emit('victory', sauce)
        }
      },
      setIncrement: function (miams) {
        this.increment = miams
      }
    }
  }
</script>

<style lang="scss">
.modal-background {
  background-color: $background;
}
.modal-content {
  width: 90%;
  height: 90%;
}
.score {
  width: 50%;
  font-size: 200px;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    padding-bottom: 50px;
  }
}
.side-text {
  transform: rotate(-90deg);
}
.mayo {
  color: $yellow;
}
.ketchup {
  color: $red;
}
</style>
