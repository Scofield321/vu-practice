<template>
  <div class="login-container">
    <section class="login-form-contol">
      <div class="login-content">
        <img src="../assets/vu-logo-with-words.png" alt="vu-logo" />
        <p class="main-paragraph">Admin E-learning Portal</p>
        <p class="login-heading">Enter your details to login.</p>
        <form @submit.prevent="signIn">
          <div class="mb-1">
            <input
              type="text"
              class="form-control"
              v-model="email"
              placeholder="Your email"
            />
          </div>
          <div class="mb-1">
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Your password"
            />
          </div>
          <label class="remember-me">
            <input type="checkbox" v-model="shouldRememberMe" />
            Remember me
          </label>
          <button
            class="sign-in-btn"
            v-if="!isLoading"
            :disabled="isFormInvalid"
          >
            Sign in
          </button>
          <div class="spinner-grow" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <!-- isFormInvalid -->
        </form>
        <!-- </section> -->
        <div>
          <button
            type="button"
            class="btn-contact-us"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            NEED HELP? CONTACT US
          </button>
        </div>
      </div>
    </section>
    <section class="cover-page-control">
      <img src="../assets/cover_photo.jpg" alt="vu-cover-page" />
    </section>
  </div>
</template>
  
  <script lang="ts" setup>
import { computed, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const email = ref("");
const password = ref("");
const router = useRouter();
const isLoading = ref(false);
const shouldRememberMe = ref(false);

const isFormInvalid = computed(() => {
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]+$/;

  // Update isEmailInvalid based on the email conditions
  const isEmailInvalid =
    email.value.trim() === "" ||
    !emailRegex.test(String(email.value).trim().toLowerCase());

  // Update isPasswordInvalid based on the password conditions
  const isPasswordInvalid =
    password.value.trim() === "" || password.value.length < 6;

  // Update isFormInvalid based on both email and password conditions
  return isEmailInvalid || isPasswordInvalid;
});

const showWarningDialog = async () => {
  const result = await Swal.fire({
    title: "Check all Fields",
    text: "An account with matching credentials was not found",
    icon: "warning",
    confirmButtonColor: "#3085d6",
  });
  if (result.isConfirmed) {
    return "";
  }
};

const signIn = async () => {
  try {
    isLoading.value = true;

    const response = await axios.post(
      "https://api.vclass.ac:9903/api/v1.1/staff/login",
      {
        email_phone_number: email.value,
        password: password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      if (response.data.message === "" && response.data.accessToken) {
        // Storing the access token based on user preference
        storeAccessToken(response.data.accessToken);
        router.push("/home");
        // console.log(response.data);
      }

      //TODO: CHeck fr other things too
    } else {
      throw Error("Login failed, check your credentials");
    }
  } catch (error) {
    alert(error);
  } finally {
    isLoading.value = false;
  }
};

// storing data to localstorage or session storage

const storeAccessToken = (accessToken: string) => {
  if (shouldRememberMe.value) {
    localStorage.setItem("access_token", accessToken);
  } else {
    sessionStorage.setItem("access_token", accessToken);
  }
};

// sending contact message
</script>
  
  <style scoped>
/* container */
.login-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;
}

.login-form-contol {
  width: 530px;
  padding: 20px;
  background-color: #fff;
}
.login-content {
  width: 250px;
  margin: 3rem auto;
}
/* paragraphs */
.login-form-contol p {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
p {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.login-heading {
  font-weight: 200;
  color: rgba(0, 0, 0, 0.8);
}
.main-paragraph {
  display: block;
  font-weight: 500;
  color: #2a6fb5;
  opacity: 0.8;
}
/* inputs */
.login-form-contol label {
  display: block;
  margin-bottom: 5px;
}

.login-form-contol input,
.form-control {
  height: 2.8rem;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 400;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: inherit;
}

.login-form-contol ::placeholder {
  font-weight: 100;
  font-size: 12px;
}

.login-form-contol input[type="checkbox"] {
  margin-right: 8px;
}

.login-form-contol label {
  display: flex;
  align-items: center;
}

.form-control label span {
  margin-left: 5px;
}
/* logo of vu */
.login-form-contol img {
  width: 200px;
  vertical-align: middle;
  border-style: none;
  overflow-clip-margin: content-box;
  overflow: clip;
  height: auto;
  margin-bottom: 20px;
}

/*  remember me starts here*/
.mb-1 {
  width: 265px;
}

.remember-me {
  padding-bottom: 1.5rem;
  width: 265px;
}

.remember-me:hover {
  cursor: pointer;
}

.remember-me input {
  background-color: transparent;
  border-color: #5a5a5a;
  border-radius: 2px;
  height: 20px;
  width: 20px;
  top: 0;
  z-index: 0;
}

.remember-me input:hover {
  cursor: pointer;
}
/* buttons starts here */
.sign-in-btn,
.btn {
  width: 265px;
  height: 45px;
  text-transform: capitalize;
  background-color: #2a6fb5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 6rem;
}
.sign-in-btn:disabled,
.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed !important;
  pointer-events: all !important;
}

.btn-contact-us {
  text-decoration: none;
  font-weight: 500;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
}
.btn-contact-us {
  background-color: transparent;
}
/* loading spinner */
.spinner-grow {
  background-color: #2a6fb5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1rem 0 7rem 7rem;
}

/* cover image */
.cover-page-control img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>