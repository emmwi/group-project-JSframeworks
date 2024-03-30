<template>
  <div class="classes" role="tablist">
    <!-- för varje klass -->
    <b-card no-body v-for="(classItem, index) in classes" :key="index">
      <!-- klassnamn -->
      <b-card-header
        header-tag="header"
        role="tab"
        class="class-header"
        v-b-toggle="'accordion-' + classItem.className"
      >
        <h6 id="class-name">{{ classItem.className }}</h6>
        <!-- <b-button variant="primary">{{ classItem.className }}</b-button> -->
        <!-- Klassens genomsnitt (funkar ej) -->
        <p style="margin-bottom: 0">Klassens genomsnitt:</p>
      </b-card-header>
      <b-collapse
        :id="'accordion-' + classItem.className"
        accordion="my-accordion"
        role="tabpanel"
      >
        <!-- inside each accordion -->
        <b-card-body>
          <!-- list with all students -->
          <b-list-group>
            <!-- each student -->
            <b-list-group-item
              v-for="(student, studentIndex) in classItem.studentNames"
              :key="studentIndex"
              ><p
                v-b-toggle="'accordion-' + student.name"
                style="display: inline"
              >
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
                />
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import classData from '../JSON/classes.json'
  export default {
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
  .classes {
    width: 80vw;
    margin: auto;
  }

  .class-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #class-name {
    margin-bottom: 0;
    padding: 0.4rem;
    background-color: var(--orange);
    border-radius: 0.3rem;
  }
</style>
