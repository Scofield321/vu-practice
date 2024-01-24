<template>
  <div class="login-container">
    <section class="login-form-contol">
      <div class="login-content">
        <img src="../assets/vu-logo-with-words.png" alt="vu-logo" />
        <p class="main-paragraph">Admin E-learning Portal</p>
        <p class="login-heading">Enter your details to login.</p>
        <form @submit.prevent="signIn">
          <div class="mb-1">
            <label for="formGroupExampleInput" class="form-label"></label>
            <input
              type="text"
              class="form-control"
              v-model="email"
              placeholder="Your email"
            />
          </div>
          <div class="mb-1">
            <label for="formGroupExampleInput2" class="form-label"></label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Your password"
            />
          </div>
          <label class="remember-me" @click="storedToLocalstorage">
            <input type="checkbox" />
            Remember me
          </label>
          <button class="sign-in-btn" v-if="!isLoading">
            <!-- :disabled="isSignInDisabled" -->
            Sign in
          </button>
          <div class="spinner-grow" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <!-- isSignInDisabled -->
        </form>
        <!-- contact us modal starts here -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Contact Help
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label-dialog"
                      >Your Full Name</label
                    >
                    <input
                      type="text"
                      class="form-control-dialog"
                      placeholder="Full Name"
                      v-model="fullName"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label-dialog"
                      >Your Email</label
                    >
                    <input
                      type="email"
                      class="form-control-dialog"
                      placeholder="Full Email"
                      v-model="fullEmail"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-1">
                    <label for="recipient-name" class="col-form-label-dialog"
                      >Subject</label
                    >
                    <input
                      type="text"
                      class="form-control-dialog"
                      placeholder="Choose Subject"
                      v-model="subject"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-1">
                    <label for="message-text" class="col-form-label-dialog"
                      >Message</label
                    >
                    <textarea
                      class="form-control-message"
                      placeholder="Type message here..."
                      v-model="message"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-dialog" @click="sendMessage">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
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
//   imports
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const email = ref("");
const password = ref("");
const isEmailInvalid = ref(false);
const isPasswordInvalid = ref(false);
const router = useRouter();
const isLoading = ref(false);
const fullName = ref("");
const fullEmail = ref("");
const subject = ref("");
const message = ref("");
const areFieldsEmpty = ref(false);
const rememberMeCheckboxIsChecked = ref(false);
// const error = ref("");
// const isDialogVisible = ref(false);

const showWarningDialog = async () => {
  const result = await Swal.fire({
    title: "Check all Fields",
    text: "something is wrong with your details you have entered",
    icon: "warning",
    confirmButtonColor: "#3085d6",
  });
  if (result.isConfirmed) {
    return "";
  }
};

const signIn = async () => {
  try {
    // checking email validity with RegExp
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (
      email.value.trim() === "" ||
      !emailRegex.test(String(email.value).trim()) ||
      password.value.trim() === "" ||
      password.value.length < 6
    ) {
      isEmailInvalid.value = true;
      showWarningDialog();
      console.log("email password invalid");
    } else {
      isLoading.value = true;
      // setting timeout for 2 seconds for the loading spinner
      setTimeout(() => {
        isLoading.value = false;
        isEmailInvalid.value = false;
        isPasswordInvalid.value = false;

        // Redirect to home after the spinner has been shown for 2 seconds
        router.push("/home");
      }, 2000);
      const response = await axios.post(
        "https://api.vclass.ac:9903/api/v1.1/login",
        {
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      isLoading.value = false;
      if (response.data) {
        console.log(response.data);
      }
    }
  } catch (error) {
    isLoading.value = false;
    console.log(error);
    alert(error);
    console.error("Error during log in", error);
  }
};

const isSignInDisabled = computed(() => {
  return isEmailInvalid.value || isPasswordInvalid.value;
});

// storing data to localstorage

const storedToLocalstorage = () => {
  if (rememberMeCheckboxIsChecked.value) {
    // Get existing emails from local storage
    const storedEmailString = localStorage.getItem("emails");
    // since localStorage.getItem( ) returns either a string or null
    // first checking if the value is null before using it
    const storedEmails = storedEmailString ? JSON.parse(storedEmailString) : [];
    // Check if the current email is already stored
    const isEmailStored = storedEmails.includes(email.value);
    if (!isEmailStored) {
      storedEmails.push(email.value);
      localStorage.setItem("emails", JSON.stringify(storedEmails));
    }
  } else {
    sessionStorage.setItem("emails", email.value);
  }
};

// sending contact message
const sendMessage = async () => {
  try {
    // checking email validity with RegExp
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (
      fullName.value.trim() === "" ||
      fullEmail.value.trim() === "" ||
      !emailRegex.test(String(fullEmail.value).trim()) ||
      subject.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      areFieldsEmpty.value = true;
      showWarningDialog();
      console.log("something is empty");
      console.log("name", fullName.value);
    } else {
      areFieldsEmpty.value = false;
      console.log("are fields are filled");
    }
  } catch (error) {
    console.log(error);
  }
};
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

/* contact us dialog */
.modal-header {
  margin-top: -3rem !important;
  border-bottom: none !important;
}
.modal-title {
  top: 2rem !important;
  margin-left: 6rem !important;
}
.btn-close {
  position: fixed !important;
  top: 2rem !important;
  right: 2rem !important;
  font-size: 8px;
}
.btn-close:hover {
  color: #2a6fb5;
  opacity: 0.8;
}
.btn-close:active {
  border: none;
}
#exampleModal {
  width: 400px;
  height: 500px;
  position: fixed;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: none;
  overflow-y: hidden;
}
.modal-content {
  border: none;
  height: 400px;
}
.form-control-dialog {
  width: 330px !important;
  height: 2.2rem !important;
  padding: 2px;
}
.form-control-message {
  width: 330px !important;
}
.col-form-label-dialog {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 0.5rem !important;
  text-align: left !important;
}
.btn-dialog {
  width: 330px;
  height: 45px;
  text-transform: capitalize;
  background-color: #2a6fb5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 auto !important;
}
</style>