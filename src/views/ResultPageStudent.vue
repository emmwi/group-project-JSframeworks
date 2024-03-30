<template>
  <article id="result-container">
    <h1>Resultat</h1>
    <!-- visar poängen från testet -->
    <p>Du fick {{ finalPoint }} av 12 poäng</p>
    <section v-show="finalPoint >= 10" class="nextActionForTestPage">
      <h3>Godkänt</h3>
      <BButton
        @click="showModal = !showModal"
        variant="primary"
        class="redo-test-btn"
      >
        Logga ut
      </BButton>
      <BModal @ok="onOk" v-model="showModal" title="Logga ut">
        Är du säker att du vill logga ut?
      </BModal>
    </section>
    <section v-show="finalPoint <= 9" class="next-action-for-testpage">
      <h3>Icke godkänt</h3>
      <RouterLink to="/testStudent">
        <b-button variant="primary" class="redo-test-btn">Gör om test</b-button>
      </RouterLink>
    </section>
  </article>
</template>

<!-- bytt till composition api -->
<script setup>
  import { ref, onMounted } from 'vue'
  import { useStudentsStore } from '../store'
  import { useRouter } from 'vue-router'
  //använder information från pinia
  const showModal = ref(false)
  const studentStore = useStudentsStore()
  const finalPoint = ref(0)
  const router = useRouter()

  //trycker man på button kopplad till funktionen onOK så hamnar man på första sidan.
  const onOk = () => {
    router.push('/')
  }
  //onmounted för att DOM ska hinna laddats klar innan man sätter värdet på final points som hämtas från store.js så att det görs i rätt ordning
  onMounted(() => {
    finalPoint.value = studentStore.lastLoggedInStudent.result
    return {
      //vi retunerar den uppdaterade finalPoint som vi fått från store.js
      finalPoint
    }
  })
</script>

<style>
  #result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25vh;
  }
  .redo-test-btn {
    margin-top: 100%;
  }
  .next-action-for-testpage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
