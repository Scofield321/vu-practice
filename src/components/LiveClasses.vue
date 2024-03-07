<template>
  <div class="live-classes-card">
    <h3>Live Class Attendace in last 7 days</h3>
    <p class="date-rate">26th Feb 2024 - 4th Mar 2024</p>

    <div class="paragrph-and-hr">
      <p>100</p>
      <hr />
    </div>
    <div class="paragrph-and-hr">
      <p>80</p>
      <hr />
    </div>
    <div class="paragrph-and-hr">
      <p>60</p>
      <hr />
    </div>
    <div class="paragrph-and-hr">
      <p>40</p>
      <hr />
    </div>
    <div class="paragrph-and-hr">
      <p>20</p>
      <hr />
    </div>
    <div class="paragrph-and-hr">
      <p>0</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.live-classes-card {
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
  /* padding-right: 8px; */
  font-size: 10px;
  color: gray;
  padding-left: 1rem;
}
hr {
  width: 90%;
  height: 1.3px;
  background-color: gray;
  border: none;
  flex: 1;
  margin: -0.5rem 1rem 0 0.5rem;
}
</style>