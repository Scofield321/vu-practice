<template>
  <div class="calendar">
    <div class="header">
      <h2>{{ month }}</h2>
      <div class="buttons-btn">
        <button class="arrow-button" @click="previousMonth">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="arrow-button" @click="nextMonth">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="days">
      <div v-for="day in daysOfWeek" :key="day" class="day">{{ day }}</div>
      <div
        v-for="blankDay in leadingBlanks"
        :key="'blank-' + blankDay"
        class="blank-day"
      ></div>
      <div
        v-for="date in daysInMonth"
        :key="date"
        class="date"
        :class="{ today: isToday(date) }"
      >
        {{ date }}
      </div>
    </div>
    <div class="upcoming-lectures">
      <p>Upcoming Lectures</p>
      <p>You have no upcoming Lectures</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const daysOfWeek = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const currentDate = ref(new Date());

const month = computed(() => {
  return currentDate.value.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
});

const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, index) => index + 1);
});

const leadingBlanks = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const shiftedFirstDayOfMonth =
    firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  return Array.from({ length: shiftedFirstDayOfMonth }, (_, index) => index);
});

const previousMonth = () => {
  currentDate.value.setMonth(currentDate.value.getMonth() - 1);
};

const nextMonth = () => {
  currentDate.value.setMonth(currentDate.value.getMonth() + 1);
};

const isToday = (date: number) => {
  const today = new Date();
  return (
    date === today.getDate() &&
    currentDate.value.getMonth() === today.getMonth() &&
    currentDate.value.getFullYear() === today.getFullYear()
  );
};
</script>

<style scoped>
/* Your styles here */
</style>

  
  <style scoped>
.calendar {
  background-color: white;
  /* width: 40rem; */
  width: 100%;
  margin: 2.5rem 2rem 0 -2rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}
.arrow-button {
  background-color: #cce1f6;
  border: none;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}
i {
  color: #2a6fb5;
  font-size: 10px;
}

.arrow-button:hover {
  opacity: 0.8;
}
.buttons-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.days {
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 1rem;
}

.day {
  text-align: center;
  padding: 0.5rem;
  font-size: 10px;
  font-weight: 500;
  /* border-bottom: 1px solid #ccc; */
}

.blank-day {
  padding: 0.5rem;
}

.date {
  text-align: center;
  padding: 6px;
  font-size: 10px;
  font-weight: 500;
  /* border-bottom: 1px solid #ccc; */
}

.today {
  /* background-color: lightblue; */
  border: 1px solid #2a6fb5;
}
h2 {
  font-size: 0.8rem;
  /* margin: 1rem; */
}
.upcoming-lectures {
  margin: 3rem 0 0 1rem;
}
.upcoming-lectures p:first-child {
  color: #2a6fb5;
  font-size: 0.7rem;
  margin-bottom: 5px;
  font-weight: 500;
}
.upcoming-lectures p:last-child {
  font-size: 0.7rem;
}
</style>
  