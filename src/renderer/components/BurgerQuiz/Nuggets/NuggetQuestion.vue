<template>
  <div class="question-wrapper" v-on:click="nextQuestion">
    <div class="has-text-centered question-title">
      {{questions[currentQuestion].question}}
    </div>
    <ol v-show="displayChoices">
      <li v-for="(choice, index) in questions[currentQuestion].choices"
        class="is-flex"
        v-if="index < displayChoices"
        v-bind:class="{ 'good-answer': answered && index === questions[currentQuestion].correctAnswer }">
        <p>{{choice}}</p>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    created: function () {
      this.bus.$on('arrowright', this.showAnswer)
      this.bus.$on('arrowleft', this.removeAnswer)
      this.bus.$on('enter', this.nextQuestion)
      this.bus.$on('backspace', this.previousQuestion)
    },
    props: ['bus'],
    data () {
      var Questions = [
        {
          id: 1,
          question: 'Quelle affirmation à propos de Karl Marx est fausse:',
          choices: [
            'Il était sans nationalité',
            'Plus de 22 pays ont édité des timbres à son effigie',
            'Il a écrit le manifeste du communisme en une nuit, pendant une grosse cuite',
            'Il était fan d\'Abraham Lincoln'
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: 'Quelle affirmation sur le monde animal est vraie:',
          choices: [
            'Certaines huîtres très habiles peuvent monter aux arbres',
            'Les salopes de guêpes sont les insectes volants les plus meurtriers pour l’homme',
            'Lorsqu’un serpent mue, il change non seulement de peau mais aussi de sifflement',
            'La baleine à bosses a des bosses parce qu’elle voit pas très bien et que du coup elle se cogne partout'
          ],
          correctAnswer: 0
        },
        {
          id: 3,
          question: 'Quelle citation de OSS 117 est incorrecte:',
          choices: [
            'Mais voyons Armand, le Président Coty n\'a t il pas dit que c’est la France entière qui avait été résistante ?',
            'C\'est marrant, c\'est toujours les nazis qui ont le mauvais rôle. Nous sommes en 1955, herr Bramard, on peut avoir une deuxième chance, merci.',
            'Une dictature c\'est quand les gens sont communistes, déjà. Qu\'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair. C\'est ça, une dictature, Dolorès.',
            'C\'est notre Raïs à nous : c\'est M.René Coty. Un grand homme. Il marquera l\'Histoire. Il aime les Cochinchinois, les Malgaches, les Marocains, les Sénégalais… c\'est donc ton ami. Ce sera ton porte-bonheur.'
          ],
          correctAnswer: 0
        },
        {
          id: 4,
          question: 'Parmi ces titres de presse, lequel est issu du Gorafi:',
          choices: [
            'Pour attendrir les femmes sur les sites de rencontre, il se faisait passer pour un petit chien',
            'Penelopegate: Balkany demande à Fillon de retirer sa candidature',
            'Pour sa première soirée ciné à la Maison Blanche, Trump a choisi "Le Monde de Dory"',
            'Faute de médecin, une mairie bretonne recrute un druide'
          ],
          correctAnswer: 0
        }
      ]
      return {
        questions: Questions,
        currentQuestion: 0,
        answered: false,
        displayChoices: 0
      }
    },
    methods: {
      showAnswer () {
        if (this.displayChoices === 4) {
          this.answered = true
        } else {
          this.displayChoices++
        }
      },
      removeAnswer () {
        if (this.answered) {
          this.answered = false
        } else if (this.displayChoices) {
          this.displayChoices--
        }
      },
      nextQuestion () {
        if (this.currentQuestion < 3) {
          this.answered = false
          this.displayChoices = 0
          this.currentQuestion++
        } else if (this.currentQuestion === 3) {
          this.$router.push('/burger-quiz/sel-ou-poivre')
        }
      },
      previousQuestion () {
        if (this.currentQuestion) {
          this.answered = false
          this.displayChoices = 0
          this.currentQuestion--
        }
      }
    }
  }
</script>
<style lang="scss">
.question-wrapper {
  font-family: $question-font;
}

.question-title {
  font-size: 60px;
  margin: 50px;
}

ol {
  counter-reset: burger-letter;
  list-style: none;
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
ol li:before {
  font-family: $burger-font;
  content: counter(burger-letter, lower-alpha);
  counter-increment: burger-letter;
  margin-right: 50px;
  font-size: 90px;
  align-self: center;
}

.good-answer {
  color: $green;
}
</style>
