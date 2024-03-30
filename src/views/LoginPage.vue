<template>
  <div class="login-container">
    <section class="form-container">
      <label for="school">Skola:</label>
      <div class="input-container">
        <b-form-input
          type="text"
          v-model="school"
          class="input-field"
          :state="checkSchool() ? true : false"
          placeholder="Skola"
          readonly
        />
        <!-- Kollar om längen på inmatningen stämmer med vårat krav annars visas förklarande medelande -->
        <span v-if="school.length < 3" class="warning"
          >Skriv minst 3 tecken</span
        >
      </div>
      <label for="email">Email:</label>
      <div class="input-container">
        <b-form-input
          type="text"
          v-model="eMail"
          class="input-field"
          :state="checkEmail() ? true : false"
          placeholder="Email"
        />
        <span v-if="eMail.length < 3 || !eMail.includes('@')" class="warning"
          >Ogiltig email (Minst tre tecken och @ krävs)</span
        >
      </div>
      <label for="password">Lösenord:</label>
      <div class="input-container">
        <b-form-input
          type="password"
          v-model="password"
          class="input-field"
          :state="checkPassword() ? true : false"
          placeholder="Lösenord"
        />
        <span v-if="password.length < 8" class="warning"
          >Ogiltigt lösenord (Minst 8 tecken krävs)</span
        >
      </div>
      <section>
        <b-form-group label="" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="teacher"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="teacher"
            >Lärare</b-form-radio
          >
          <b-form-radio
            v-model="student"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="student"
            >Elev</b-form-radio
          >
        </b-form-group>
      </section>
      <b-button
        class="submit-button"
        variant="primary"
        @click="onClick"
        :disabled="!disable"
        >Logga in</b-button
      >
    </section>
  </div>
</template>
<script>
  import { mapStores } from 'pinia'
  import { useStudentsStore } from '../store'
  // import { Alert } from 'bootstrap'
  export default {
    computed: {
      ...mapStores(useStudentsStore),
      disable() {
        return (
          (this.teacher === 'teacher' || this.student === 'student') &&
          this.school.length >= 3 &&
          this.eMail.includes('@') &&
          this.eMail.length >= 3 &&
          this.password.length >= 8
        )
      }
    },

    data() {
      return {
        school: 'IT-Högskolan',
        eMail: '',
        password: '',
        teacher: '',
        student: '',
        studentFound: false,
        studentStore: useStudentsStore(),
        studentName: '',
        currentStudent: null,
        errorMessage: 'Fel användarnamn eller lösenord, försök igen'
      }
    },

    methods: {
      checkSchool() {
        return this.school.length >= 3
      },
      checkEmail() {
        return this.eMail.includes('@') && this.eMail.length >= 3
      },
      checkPassword() {
        return this.password.length >= 8
      },

      onClick() {
        if (this.student === 'student') {
          for (let i = 0; i < this.studentStore.students.length; i++) {
            //kollar att studenten man loggar in med är skapad sedan tidiagre i createClass via pinia - se createClasses.
            if (
              this.studentStore.students[i].eMail === this.eMail &&
              this.studentStore.students[i].password === this.password
            ) {
              this.currentStudent = this.studentStore.students[i]
              console.log('denna student är inloggad', this.currentStudent)
              this.studentFound = true
            }
          }
          //om student är funnen så lägger vi in den i currentStudent i pinia- sedan skickas du vidare till landingpage för studenten
          if (this.studentFound) {
            this.studentStore.isInlogged(this.currentStudent)

            this.$router.push('/landingpageStudent')
          } else {
            console.log(
              'fel lösenord eller användarnamn-gör om till ordentligt error-message sedan.'
            )
          }
        }
        //skickar vidare till landingpage för lärare
        if (this.teacher === 'teacher') {
          this.$router.push('/landingpageTeacher')
        }
      }
    }
  }
</script>
<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .form-container {
    width: 35vw;
    min-width: 19rem;
    /* Adjust depending on desired width */
    padding: 20px;
    /* Adjust depending on desired distance from edges */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin-top: 2rem;
  }

  .warning {
    color: 'warning';
    font-size: 12px;
    position: relative;
    top: -0.8rem;
  }

  .input-field {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .checkbox-container {
    margin-bottom: 10px;
  }

  .checkbox-container label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .submit-button {
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
