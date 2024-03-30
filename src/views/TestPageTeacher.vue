<template>
  <nav-bar />
  <h1 id="h1-text">Skapa prov</h1>
  <div class="exam-container">
    <!-- Om selectedClass är tom visas texten "Välj klass", annars visas den valda klassen i menyn. -->
    <b-dropdown
      id="dropdown-1"
      :text="selectedClass ? selectedClass : 'Välj klass'"
      class="dropdown-menu-right"
    >
      <b-dropdown-item @click="selectedClass = '6A'">6A</b-dropdown-item>
      <b-dropdown-item @click="selectedClass = '6B'">6B</b-dropdown-item>
      <b-dropdown-item @click="selectedClass = '7A'">7A</b-dropdown-item>
      <b-dropdown-item @click="selectedClass = '7B'">7B</b-dropdown-item>
      <b-dropdown-item @click="selectedClass = '8A'">8A</b-dropdown-item>
      <b-dropdown-item @click="selectedClass = '8B'">8B</b-dropdown-item>
    </b-dropdown>
    <!-- Om selectedCategory är tom visas texten "Välj kategori", annars visas det valda värdet i menyn. -->
    <b-dropdown
      id="dropdown-2"
      :text="selectedCategory ? selectedCategory : 'Välj kategori'"
      class="dropdown-menu-left"
    >
      <b-dropdown-item @click="selectedCategory = 'Algebra'"
        >Algebra</b-dropdown-item
      >
      <b-dropdown-item @click="selectedCategory = 'Statistik'"
        >Statistik</b-dropdown-item
      >
    </b-dropdown>
    <b-button
      id="button"
      variant="primary"
      @click="showModal = true"
      :disabled="!allFieldsFilled"
      >Skapa prov</b-button
    >
    <b-modal v-model="showModal">
      <p>Vill du skapa detta prov?</p>
      <template #modal-footer="{ cancel, ok }">
        <b-button @click="cancel">Avbryt</b-button>
        <b-button @click="ok" variant="primaty">Ja</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        selectedCategory: '',
        selectedClass: '',
        text: '',
        showModal: false
      }
    },
    computed: {
      allFieldsFilled() {
        return this.selectedCategory !== '' && this.selectedClass !== ''
      }
    }
  }
</script>

<style>
  #h1-text {
    text-align: center;
    margin-bottom: 1rem;
  }

  .exam-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7vw;
    border: 0.05rem solid #e5852d;
    background-color: rgba(235, 195, 136, 0.23);
    padding: 6rem;
    border-radius: 1rem;
    width: 90vw;
    margin: auto;
  }

  #chooseClass {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 730px) {
      .exam-container{
        width: 40vw;
        min-width: 15rem;
      }
  }
</style>
