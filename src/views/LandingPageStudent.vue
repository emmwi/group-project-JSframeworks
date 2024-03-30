<template>
  <!-- <change-passwordview></change-passwordview> -->
  <h1 id="student-name">Hej {{ studentName }}</h1>
  <section id="student-button">
    <RouterLink to="/testStudent"
      ><b-button variant="primary" class="student-landing-button"
        >Starta prov</b-button
      >
    </RouterLink>
    <!-- <b-button variant="primary" class="studentLandingButton"
      >Se tidigare prov</b-button
    > -->
  
    <RouterLink to="/changePasswordView">
      <b-button variant="primary" class="student-landing-button"
        >Ändra lösenord</b-button
      >
    </RouterLink>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useStudentsStore } from '../store'

  //använder information från pinia

  const studentStore = useStudentsStore()
  const studentName = ref('')
  //onmounted för att DOM ska hinna laddats klar innan man sätter värdet på final points som hämtas från store.js så att det görs i rätt ordning
  onMounted(() => {
    console.log('inloggad student', studentName.value)
    studentName.value = studentStore.lastLoggedInStudent.studentName
    return {
      //vi retunerar den uppdaterade finalPoint som vi fått från store.js
      studentName
    }
  })
</script>

<style scoped>
  .student-landing-button {
    margin: 1rem;
    padding: 0.5rem;
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
    width: 10rem;
  }

  #student-name {
    margin-top: 1rem;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  #student-button {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*gör mediaquery till 750 för knapparnsas skull, texten blir på två rader på skärm mindre än 750px*/
  @media only screen and (min-width: 600px) {
    #student-button {
      margin-top: 5rem;
      flex-direction: row;
      justify-content: center;
      gap: 10rem;
    }
  }
</style>
