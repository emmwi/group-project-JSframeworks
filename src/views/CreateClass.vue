<template>
  <NavBar />

  <div class="content">
    <div id="new-class-container">
      <h1>Skapa ny klass</h1>
      <b-form>
        <b-form-group
          id="name-of-class-group"
          label="Klassens namn:"
          label-for="name-of-class"
        >
          <b-form-input
            id="name-of-class"
            placeholder="Klassens namn"
            class="input-field"
            v-model="className"
            required
          />
        </b-form-group>
        <b-form-group
          id="year-of-class-group"
          label="Årskurs:"
          label-for="year-of-class"
        >
          <b-form-input
            id="year-of-class"
            class="input-field"
            placeholder=""
            type="number"
            v-model="year"
            required
          />
        </b-form-group>
        <b-form-group
          id="student-names-group"
          label="Elevernas namn:"
          label-for="name-of-students"
        >
          <b-form-input
            id="name-of-student"
            class="input-field"
            v-model="studentName"
            @keyup.enter="addStudent"
          />
          <b-form-group label="E-post:" label-for="email">
            <b-form-input
              type="text"
              id="email"
              v-model="eMail"
              class="input-field"
              placeholder="Email (e.g., example@example.com)"
            />
          </b-form-group>
          <b-form-group label="Lösenord:" label-for="password">
            <b-form-input
              type="password"
              id="password"
              v-model="password"
              class="input-field"
              placeholder="Lösenord (Minst 8 tecken)"
            />
          </b-form-group>
          <b-button
            type="submit"
            variant="primary"
            @click="addStudent"
            id="add-student-btn"
            >Lägg till elev</b-button
          >
        </b-form-group>
      </b-form>
    </div>
    <b-card
      v-for="(student, index) in studentsStore.students"
      :key="index"
      class="student-card"
      ><div class="student">
        <h3>{{ student.studentName }}</h3>
        <div class="student-info">
          <p><strong>Klass:</strong> {{ student.className }}</p>
          <p><strong>Email:</strong> {{ student.eMail }}</p>
          <p><strong>Lösernord:</strong> {{ student.password }}</p>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  import { useStudentsStore } from '../store'
  //för att använda pinia-store som heter useStudentsStore.
  const studentsStore = useStudentsStore()

  //variabler för att kunna spara ner information om studenterna
  const password = ref(''),
    eMail = ref(''),
    className = ref(''),
    year = ref(''),
    studentName = ref('')

  //lägger till värden som sedan sparas i pinia och sätts till localstorage som användarre för studenter
  function addStudent() {
    studentsStore.createStudent({
      className: className.value,
      year: year.value,
      studentName: studentName.value,
      eMail: eMail.value,
      password: password.value
    })
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin: auto;
  }

  .student-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .student-card {
    width: 80vw;
    min-width: 19rem;
    background-color: #f4e2d1;
  }

  h3 {
    border-bottom: 1px solid gray;
  }

  .input-field {
    margin-bottom: 0.5rem;
  }

  h1 {
    width: fit-content;
    margin: auto;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0;
  }

  #new-class-container {
    width: 80vw;
    margin-bottom: 1rem;
    min-width: 19rem;
  }
  #add-student-btn {
    margin-top: 1rem;
  }

  @media screen and (min-width: 550px) {
    .student-card {
      width: 60vw;
    }
    #new-class-container {
      width: 60vw;
    }

    .content {
      width: 60vw;
    }
  }

  @media screen and (min-width: 700px) {
    .student-card {
      width: 60vw;
    }

    #new-class-container {
      width: 60vw;
    }

    .content {
      width: 60vw;
    }
  }

  @media screen and (min-width: 900px) {
    .student-info {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;
    }
  }
</style>
