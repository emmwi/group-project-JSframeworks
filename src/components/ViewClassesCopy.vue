<template>
  <div class="classes" role="tablist">
    <!-- Show classes data -->
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ classes }}</pre>
    </b-card> -->

    <!-- for each class -->
    <b-card
      no-body
      class="mb-1"
      v-for="(classItem, index) in classes"
      :key="index"
    >
      <!-- class name -->
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle="'accordion-' + classItem.className"
          variant="info"
          >{{ classItem.className }}</b-button
        >
        <p style="display: inline">
          <!-- Genomsnitt: {{ calculateAverage(classItem.className) }} -->
        </p>
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
              v-b-toggle="'accordion-' + student.name"
              >{{ student.name }}
              <p style="display: inline">
                Genomsnitt:
                {{ calculateAverageStudent(student.testResults) }}/12
              </p>
              <!-- <b-collapse :id="'accordion-' + student.name"> -->
              <!-- <b-card class="mt-3" header="Form Data Result">
                  <pre class="m-0">{{ student.testResults }}</pre>
                </b-card> -->
              <b-card>
                <b-table
                  striped
                  hover
                  :items="student.testResults"
                  :fields="studentField"
                />
              </b-card>
              <!-- </b-collapse> -->
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

        for (let n = 0; n < length; n++) {
          average += score[n].result
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
    padding: 0 10vw 0 10vw;
  }
</style>
