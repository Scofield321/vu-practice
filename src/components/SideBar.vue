<template>
  <div class="sidebar-container">
    <img src="@/assets/vu-logo-with-words.png" alt="vu logo with words" />
    <div class="links">
      <router-link to="/home">
        <i class="fa-solid fa-house"></i> <span></span>Home</router-link
      >
      <router-link to="academics">
        <i class="fa-solid fa-book"></i>
        <span>Academics</span>
      </router-link>
      <router-link to="assessments">
        <i class="fa-solid fa-marker"></i>
        <span>Assessments</span></router-link
      >
      <router-link to="staff-management" class="link-with-icon">
        <div class="icon-text">
          <i class="fas fa-user"></i> <span>Staff Management</span>
        </div>
      </router-link>
      <router-link to="finace">
        <i class="fas fa-money-bill-alt"></i>
        <span>Finances</span>
      </router-link>
      <router-link to="manage-elections">
        <i class="fas fa-poll"></i> <span>Manage Elections</span></router-link
      >
      <router-link to="vu-elections">
        <i class="fas fa-vote-yea"></i> <span>VU Elections</span></router-link
      >
      <router-link to="chat-inquiries">
        <i class="fas fa-comments"></i>
        <span>Chat / Inquiries</span></router-link
      >
      <router-link to="cafeteria">
        <i class="fas fa-utensils"></i> <span>Cafeteria</span></router-link
      >
      <div class="extended-links">
        <router-link to="settings">
          <i class="fas fa-cog"></i> <span>Settings</span></router-link
        >
        <router-link to="configuration">
          <i class="fa fa-cog fa-light"></i>
          <span>Configurations</span></router-link
        >
        <router-link to="logout">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18%;
  min-height: 100vh;
  border-right: 1px solid black;
  background-color: white;
}

img {
  margin: -3rem 0 3rem 0;
  width: 8rem;
  text-align: center;
}

.links {
  display: flex;
  flex-direction: column;
  margin-left: -2rem;
  /* margin-left: -5rem; */
}
.links a {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  text-decoration: none;
  color: rgb(64, 63, 63);
  font-weight: 300;
  font-size: 12px;
}
.links a:hover,
.links a:active {
  color: #2a6fb5;
}
.links a i {
  margin-right: 10px; /* Adjust spacing between icon and text */
}
.link-with-icon {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.icon-text {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.extended-links {
  margin-top: 5rem;
}
</style>