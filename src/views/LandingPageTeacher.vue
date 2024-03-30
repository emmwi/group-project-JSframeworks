<template>
  <nav-bar />
  <div class="content">
    <h1 style="width: fit-content; margin-bottom: 0">Klasser</h1>
    <div class="classes" role="tablist">
      <!-- för varje klass -->
      <b-card
        no-body
        v-for="(classItem, index) in classes"
        :key="index"
        id="class-card"
      >
        <!-- klassnamn -->
        <b-card-header
          header-tag="header"
          role="tab"
          class="class-header"
          v-b-toggle="'accordion-' + classItem.className"
        >
          <h6 id="class-name">{{ classItem.className }}</h6>
        </b-card-header>
        <b-collapse
          :id="'accordion-' + classItem.className"
          accordion="my-accordion"
          role="tabpanel"
        >
          <!-- inuti varje accordion -->
          <!-- lista med alla elever -->
          <b-list-group>
            <!-- varje elev -->
            <b-list-group-item
              v-for="(student, studentIndex) in classItem.studentNames"
              :key="studentIndex"
              id="student-list"
              style="padding: 0.4rem"
              ><p v-b-toggle="'accordion-' + student.name" id="student-name">
                <b>{{ student.name }}</b>
                Genomsnitt:
                {{ calculateAverageStudent(student.testResults) }}/12
              </p>
              <b-collapse :id="'accordion-' + student.name">
                <b-table
                  striped
                  hover
                  :items="student.testResults"
                  :fields="studentField"
                  id="student-table"
                />
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-card>
    </div>

    <div id="student-results">
      <b-card
        v-for="(student, index) in studentsStore.students"
        :key="index"
        class="student-card"
      >
        <h5>{{ student.studentName }}</h5>
        <div class="student-info">
          <p class="student-details"><b>Klass:</b> {{ student.className }}</p>
          <p class="student-details"><b>Resultat:</b> {{ student.result }}</p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'

  import classData from '../JSON/classes.json'

  import { mapStores } from 'pinia'
  import { useStudentsStore } from '../store'

  export default {
    computed: {
      ...mapStores(useStudentsStore)
    },
    NavBar,
    data() {
      return {
        classes: classData.classes,
        studentField: [
          {
            key: 'date',
            label: 'Datum',
            sortable: true
          },
          {
            key: 'category',
            label: 'Kategori',
            sortable: true
          },
          {
            key: 'result',
            label: 'Resultat'
          }
        ],
        classField: [
          {
            key: 'studentName',
            label: 'Namn'
          },
          {
            key: 'result',
            label: 'Resultat'
          }
        ]
      }
    },
    methods: {
      calculateAverageStudent(score) {
        let average = 0
        let length = score.length

        for (let i = 0; i < length; i++) {
          average += score[i].result
        }

        if (length > 0) {
          average /= length
        }

        return average
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    margin: auto;
    width: 88vw;
  }
  .student-details {
    margin-bottom: 0;
  }
  .classes {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .class-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #student-table {
    width: 90%;
    margin: auto;
  }

  #class-name {
    margin-bottom: 0;
    padding: 0.4rem;
    background-color: var(--orange);
    border-radius: 0.3rem;
  }

  #student-name {
    margin: 0.2rem 0.4rem;
  }

  .student-card {
    width: 100%;
    background-color: #f4e2d1;
  }

  .student-info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #student-results {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    margin: auto;
    width: 100%;
  }

  @media screen and (min-width: 550px) {
    .content {
      width: 60vw;
    }

    #student-table {
      width: 90%;
    }

    .student-info {
      flex-direction: row;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 700px) {
    .student-info {
      flex-direction: row;
      gap: 2rem;
    }

    .student-card {
      display: flex;
      flex-direction: row;
    }

    .content {
      width: 60vw;
      min-width: 25rem;
    }
  }
</style>
