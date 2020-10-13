<template>
  <div class="back d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center">
      <div class="box-main">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
              style="width: 100%; height: 100%;"
            >
              <div class="recuo">
                <img class="working" src="../assets/undraw_report_mx0a.svg" alt srcset />
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="box-login">
                <div
                  class="d-flex justify-content-center align-items-center user-login"
                  style="margin-top: 20%; margin-bottom: 5%"
                >User Login</div>
                <div class="mt-3">
                  <InputCustomUser
                    icon="fas fa-user icone-tm"
                    v-model="user"
                    label
                    placeholder="User"
                    :min="11"
                    erroMsg
                  />
                </div>

                <div class="mt-3">
                  <InputCustomPassword
                    icon="fas fa-lock icone-tm"
                    v-model="password"
                    label
                    placeholder="Password"
                    :min="11"
                    erroMsg
                  />
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    @click="irHome()"
                    :disabled="hab"
                    class="btn btn-sm btn-cetelem mt-4"
                  >{{ statusbtn }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import InputCustomUser from "../components/InputCustomUser";
import InputCustomPassword from "../components/InputCustomPassword";

export default {
  components: {
    InputCustomUser,
    InputCustomPassword,
  },
  data() {
    return {
      statusbtn: "Entrar",
      user: null,
      password: null,
      msgErro: null,
      hab: false,
    };
  },
  methods: {
    ir() {
      this.$router.push("/dashboard");
    },
    irHome() {
      this.hab = true;
      this.statusbtn = "Carregando";

      const usuario = {
        id: this.user,
        senha: this.password,
      };

      if (usuario.id == "admin" && usuario.senha == "admin2019") {
        setTimeout(() => {
          this.hab = false;
          this.statusbtn = "Entrar";

          localStorage.setItem("nekot", "teste");

          this.$router.push("/dashboard");
        }, 2000);
      } else {
        setTimeout(() => {
          this.hab = false;
          this.statusbtn = "Entrar";

          //this.msgErro = "Usúario ou senha inválidos";

          toast = this.$toasted.error("Usúario ou senha inválidos", {
            theme: "bubble",
            position: "top-center",
            icon: "times",
            duration: 5000,
          });
        }, 2000);

        setTimeout(() => {
          this.msgErro = "";
        }, 7000);
      }
    },
  },
  created() {

      this.$http
      .get("main/dashboard")
      .then(response => {
      console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");

@media screen and (max-width: 1024px) {
  div.box-main {
    width: 85vw;
    background: rgb(255, 255, 255);
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
    transition: 300ms;
  }
}

@media screen and (max-width: 750px) {
  div.recuo {
    display: none;
  }

  div.box-login {
    width: 95%;
    height: 40vh;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 32px;
  }
}
.erro {
  color: rgb(212, 55, 55);
  width: 80%;
  margin: 0 auto;
}

.user-login{
  font-size: 25px;
  color: #AA478C;
}

.box-main {
  width: 60vw;
  min-height: 390px;
  background: rgb(255, 255, 255);
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px -6px rgba(0, 0, 0, 0.75);
  transition: 300ms;
}

.working {
  width: 100%;
  height: 300px;
  margin-top: 10%;
}

.box-login {

  width: 95%;
  height: 60vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 32px;
}

.back {
  // background: url("../assets/back.png");
  width: 100vw;
  height: 100vh;
  background: cover;
  background: #d9e3e7;
  padding: 30px;
  //background: linear-gradient(356deg, rgba(171, 91, 153,1)0%, rgb(255,255,255) 100%);
}

.form-control.login {
  width: 80%;
  margin: 0 auto;
}

.btn-cetelem {
  color: #fff;
  background-color: #AA478C;
  border-color: #AA478C;
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
  width: 100%;
}

.btn-cetelem:hover,
.btn-cetelem:active,
.btn-cetelem:focus {
  background: #AA478C;
  color: #ffffff;
  border-color: #AA478C;
}

.form-control.login:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.btn:focus,
.btn:active,
.btn:hover {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.btn-outline {
  color: #4fbfa8;
  background-color: #ffffff;
  border-color: #4fbfa8;
  font-weight: bold;
  border-radius: 7px;
}

.btn-outline:hover,
.btn-outline:active,
.btn-outline:focus {
  background: #4fbfa8;
  color: #ffffff;
  border-color: #4fbfa8;
}

.btn-colour-1 {
  color: #fff;
  background-color: #004e64;
  border-color: #004e64;
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
}

.btn-colour-1:hover,
.btn-colour-1:active,
.btn-colour-1:focus {
  background: #003d4f;
  color: #ffffff;
  border-color: #003d4f;
}

.input-custom {
  width: 80%;
  margin: 0 auto;
}

.error {
  font-family: "Varela Round", sans-serif;
}
</style>
