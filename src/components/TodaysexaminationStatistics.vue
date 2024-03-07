<template>
  <div class="todays-examination-statistics-card">
    <h3>Today's Examination Statistics</h3>
    <section class="live-class-middle-part">
      <div class="demo-progress">
        <el-progress type="dashboard" :percentage="percentage" />
      </div>
      <div class="submited-section">
        <p class="submitted-students-paragraph">0/0</p>
        <p>Submitted</p>
      </div>
    </section>
    <hr />
    <section class="live-class-bottom-part">
      <div>
        <p>0/0 Submissions</p>
        <p>Online (0%)</p>
      </div>
      <div>
        <p>0/0 Submissions</p>
        <p>File Upload (0%)</p>
      </div>
    </section>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
// setting the percentage in the middle to 0% to make the chart empty
const percentage = ref(0);
</script>
  
  <style scoped>
.todays-examination-statistics-card {
  width: 300px;
  height: 300px;
  background-color: white;
  margin-left: 4rem;
}
h3 {
  font-size: 0.9rem;
  color: #2a6fb5;
  font-weight: 500;
  padding-left: 1rem;
  margin-top: 1.5rem;
}
.date-rate {
  font-size: 12px;
  font-weight: 300;
  color: gray;
  padding-left: 1rem;
}
.paragrph-and-hr {
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  padding: 0 8px;
  font-size: 10px;
  color: gray;
}
hr {
  width: 90%;
  height: 1px;
  background-color: gray;
  border: none;
  margin: 1rem;
}

/* adding the chart */
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin: 2rem 15px 0 0;
}

/* live-class-middle-part */
.live-class-middle-part,
.live-class-bottom-part {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.live-class-middle-part {
  margin-top: 2rem;
}
.submited-section {
  display: flex;
  flex-direction: column;
}
.submited-section p {
  font-size: 0.7rem;
}
.submited-section .submitted-students-paragraph {
  color: #2a6fb5;
  font-size: 1.4rem;
  font-weight: 500;
}
</style>