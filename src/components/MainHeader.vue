<template>
  <div class="header-container">
    <div>
      <h2>Admin.<span>VClass Admin</span></h2>
    </div>
    <div class="bell-user-image">
      <i class="fas fa-bell"></i>
      <img src="@/assets/user-images.jpeg" alt="user-image" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78vw;
  margin: 2rem 0 0 0.5rem;
}

img {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
h2 {
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem -1rem 0 2.5rem;
}
h2 span {
  color: #9d9b9b;
  font-size: 11px;
}
h3,
p {
  color: white;
  margin-left: 1rem;
}
h3 {
  font-size: 0.9rem;
  margin-top: 1.3rem;
}
p {
  font-size: 12px;
}
i {
  margin-right: 1rem;
  font-size: 1.2rem;
}
.bell-user-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>