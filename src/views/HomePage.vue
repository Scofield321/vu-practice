<template>
  <div class="components">
    <SideBar />
    <div class="header-main-calender">
      <MainHeader />
      <div class="main-section">
        <div class="notice-board-cards">
          <NoticeBoard />
          <BaseStatistics />
          <div class="examination-liveclass-cards">
            <LiveClasses />
            <TodaysexaminationStatistics class="examination-stat" />
          </div>
        </div>
        <RightCalender />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../components/SideBar.vue";
import LiveClasses from "../components/LiveClasses.vue";
import TodaysexaminationStatistics from "../components/TodaysexaminationStatistics.vue";
import BaseStatistics from "../components/BaseStatistics.vue";
import NoticeBoard from "../components/NoticeBoard.vue";
import RightCalender from "../components/RightCalender.vue";
import MainHeader from "../components/MainHeader.vue";

export default defineComponent({
  // name: "App",
  components: {
    SideBar,
    LiveClasses,
    TodaysexaminationStatistics,
    BaseStatistics,
    NoticeBoard,
    RightCalender,
    MainHeader,
  },
});
</script>
<style scoped>
.components {
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
}
.header-main-calender {
  display: flex;
  flex-direction: column;
  width: 75%;
}
.examination-liveclass-cards {
  display: flex;
  gap: 1rem;
}
.examination-stat {
  margin-left: 0.5px;
}

.main-section {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 82vw;
}
.notice-board-cards {
  display: table-column;
}
</style>