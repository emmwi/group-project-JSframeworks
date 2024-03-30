<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <!---vi använder (question, index) för att vi ska kunna ha reda på vilket index vi senare vill visa, vi använder v-show för att visa en fråga i taget basserat på indexet.--->
    <section
      v-for="(question, index) in algebraQuestions"
      :key="index"
      v-show="currentIndex === index"
      id="question-section"
    >
      <h2>Fråga nr. {{ question.questionNumber }} (av 12)</h2>
      <p>{{ question.question }}</p>
    </section>

    <form @submit.prevent="submitTest" id="input-and-btn">
      <label for="answerText">Svar:</label>
      <input type="text" v-model="text" id="answerText" ref="textInput" />

      <b-button
        variant="primary"
        class="student-test-btn"
        @click="nextQuestion"
        v-show="!(this.currentIndex === this.algebraQuestions.length - 1)"
        type="button"
        :disabled="!text"
      >
        Nästa fråga
      </b-button>
      <!---- v-show gör att denna knappen visas när man är på sista fårgan. currentIndex kollar hela tiden vilken fråga man är på -->
      <RouterLink to="/resultStudent">
        <b-button
          @click="submitTest"
          variant="primary"
          class="student-landing-button"
          v-show="this.currentIndex === this.algebraQuestions.length - 1"
          :disabled="!text"
          >Lämna in
        </b-button>
      </RouterLink>
    </form>
    <!---kollar ifall texten är nummer eller text, om det inte är ett number ses felmeddelande-->
    <p v-if="isNaN(text)" id="error">Fel format, skriv ett nummer istället.</p>
  </div>
</template>

<script>
  import questionData from '../JSON/questions.json'
  import { useStudentsStore } from '../store'
  export default {
    data() {
      return {
        algebraQuestions: questionData.algebra,
        text: '',
        //håller reda på vilket index (vilken av frågorna) vi befinner oss på
        currentIndex: 0,
        //räknar poängen
        points: 0
      }
    },
    methods: {
      //metod för att kolla om man skrivit i placeholder eller inte
      isDisable() {
        return this.text.length === 0
      },
      //vi sätter en funktion nextQuestion på knappen "nästa fråga", den lägger till poäng och nollställer textfält när man klickar på knappen
      nextQuestion() {
        //if-sats som kollar om texten man skrivit in matchar med svaret på den frågan man är på, denna behöver vara först innan nästa if-sats byter till nästa fråga
        if (
          parseInt(this.text) ===
          this.algebraQuestions[this.currentIndex].answer
        ) {
          this.points++ //ökar poängen med 1
        }
        //kollar vilket index man är på och om man inte är på sista frågan så ökar den indexet (byter till nästa fråga) med +1
        if (this.currentIndex < this.algebraQuestions.length - 1) {
          this.currentIndex++
          this.text = ''
          //väntat på att DOM har laddat klart, $nextTick-funktionen kollat att det är färdigladdat och sedan lägger den till fokus igen på textfältet
          this.$nextTick(() => {
            this.$refs.textInput.focus()
          })
        }
      },
      //knapp som tar upp alla sparade poäng och lägger till store.js så att de kan användas av annan komponent
      submitTest() {
        if (
          parseInt(this.text) ===
          this.algebraQuestions[this.currentIndex].answer
        ) {
          this.points++
        }
        //lagt in en try-catch pga tidiagre error
        try {
          useStudentsStore().setPoints(this.points) //sparar poöngen i setPoints i store.js
        } catch (error) {
          console.log(error)
        }
      }
    },
    //lägger till fokus i textfältet när sidan laddas $refs hjälper till att referera till vår input (textInput) när sidan har laddats klart..
    mounted() {
      this.$refs.textInput.focus()
    }
  }
</script>
<!-- Källa:
https://www.w3schools.com/vue/ref_metNextTick.php
https://vuejs.org/guide/essentials/template-refs
 -->
<style scoped>
  * {
    color: #150b04;
  }
  .student-test-btn {
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
  }
  #input-and-btn {
    display: flex;
    flex-direction: column;
    font-family: 'Lexend', sans-serif;
  }
  input {
    border-color: var(--mörkbrun);
  }
  input:focus {
    border-color: var(--orange);
    outline-style: groove;
  }
  #question-section {
    text-align: center;
    width: 95vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #question {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin-bottom: 1rem;
  }
  #error {
    color: rgb(163, 4, 4);
  }
  @media only screen and (min-width: 990px) {
    h2 {
      font-size: 1.8rem;
    }
    #question-section {
      width: 90vw;
    }
  }
</style>
