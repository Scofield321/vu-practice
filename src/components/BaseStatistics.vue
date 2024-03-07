<template>
  <div class="statistics-container">
    <section class="all-the-cards">
      <!--  start of cards slider -->
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div class="carousel-inner">
          <h2 class="stat-h2">Statistics</h2>
          <div class="carousel-item active">
            <div class="row">
              <div class="col-sm-3">
                <div class="card">
                  <div class="my-card1 d-block w-100">
                    <h2>3275</h2>
                    <p>Active Today</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="my-card2 d-block w-100">
                    <h2>6073</h2>
                    <p>Active Students</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                  <div class="my-card2 d-block w-100">
                    <h2>314</h2>
                    <p>Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
          </div> -->
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--  end of cards slider -->
    </section>
  </div>
</template>

<style scoped>
.all-the-cards {
  width: 44rem;
}
.carousel-item .my-card1,
.carousel-item .my-card2,
.carousel-item .my-card3,
.carousel-item .my-card4 {
  background-color: #df292c;
  width: 11rem !important;
  border-radius: 5px;
  margin-right: 1rem;
  margin-top: -2.5rem;
}

.carousel-inner {
  width: 39.5rem;
  background-color: white;
  height: 12rem;
  position: relative;
  margin: 0 0 1rem 3rem;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: #d1cdcd;
  border: none;
  border-radius: 50%;
  /* padding: 10px; */
  height: 30px;
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  margin: 0;
  padding: 0;
}
.carousel-control-prev {
  left: 55px;
}

.carousel-control-next {
  right: 30px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  font-size: 10px;
}
.sliding-cards p {
  font-size: 15px;
}

.card h2,
.card p {
  color: white;
  text-align: center;
}
.card h2 {
  padding-top: 1rem;
}
.card {
  margin: 3rem 2rem;
}
.stat-h2 {
  font-size: 0.9rem;
  color: #2a6fb5;
  margin: 1rem;
}
.row {
  width: 47rem;
}
</style>