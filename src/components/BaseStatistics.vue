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
          <span
            class="carousel-control-prev-icon custom-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon custom-icon"
            aria-hidden="true"
          ></span>
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
  margin: -2.5rem 1rem 0 0;
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
  background-color: #888787;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 1);
}
.carousel-control-prev {
  left: 4rem;
}

.carousel-control-next {
  right: 30px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 12px;
  height: 12px;
  color: white;
  font-weight: 900;
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