<template>
<div class="geral">
<!--   <i id="hamburguer" @click="sidebarToggle()" class="fas fa-bars"></i>

  <div :id="sidebar">
    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div
        v-show="show"
        class="item-sidebar"
        style="height: 60px; background-color: rgb(255, 255, 255)"
      >
        <img class="logo" src="@/assets/layout_set_logo.png" alt />
        <i id="close" @click="sidebarToggle()" class="fas fa-bars"></i>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div @click="routerSend('dashboard')" v-show="show1" class="item-sidebar">
        <a class="text-white">
          <i style="font-size: 24px;" class="fas fa-chart-bar mr-2"></i>Dashboard
        </a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show2" class="item-sidebar">
        <a href="#">
          <i style="font-size: 24px;" class="fas fa-upload mr-2"></i>Upload
        </a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div v-show="show3" class="item-sidebar">
        <a href="#">
          <i style="font-size: 24px;" class="fas fa-user mr-2"></i>Perfil
        </a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <router-link tag="div" to="/config" v-show="show3" class="item-sidebar">
        <a>
          <i style="font-size: 24px;" class="fas fa-calendar-check mr-2"></i>ISO
        </a>
      </router-link>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div @click="routerSend('config')" v-show="show4" class="item-sidebar">
        <a class="text-white">
          <i style="font-size: 24px;" class="fas fa-cog mr-2"></i>Config
        </a>
      </div>
    </transition>

    <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <div @click="routerSend('login')" v-show="show5" class="item-sidebar">
        <a class="text-white">
          <i style="font-size: 24px;" class="fas fa-sign-out-alt mr-2"></i>Sair
        </a>
      </div>
    </transition>
  </div>

  <div :class="overlay" @click="sair()"></div> -->

  <transition name="slide" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  props: {
    source: String
  },
  components: {},
  /* eslint-disable */
  beforeRouteEnter(to, from, next) {
  
    const token = localStorage.getItem("nekot");

    if (token) {
      next(true);
    } else {
      next("/");
    }
  },

  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      sidebar: "sidebardesativ",
      overlay: "overlayOut"
    };
  },
  methods: {
    async routerSend(route) {
      this.$router
        .push(`/${route}`)
        .then(response => {
          console.log(route);

          if (route === "login") {
            localStorage.removeItem("nekot");
          }
        })
        .catch(erro => {
          console.log(erro);
        });
    },
    sidebarToggle() {
      if (this.sidebar == "sidebar") {
        setTimeout(() => {
          this.show = !this.show;
          this.overlay = "overlayOut";
        }, 50);

        setTimeout(() => {
          this.show1 = !this.show1;
        }, 100);

        setTimeout(() => {
          this.show2 = !this.show2;
        }, 200);

        setTimeout(() => {
          this.show3 = !this.show3;
        }, 300);

        setTimeout(() => {
          this.show4 = !this.show4;
        }, 400);

        setTimeout(() => {
          this.show5 = !this.show5;
        }, 500);

        setTimeout(() => {
          this.show6 = !this.show6;
        }, 600);

        setTimeout(() => {
          this.sidebar = "sidebardesativ";
        }, 700);
      } else {
        this.sidebar = "sidebar";

        setTimeout(() => {
          this.show = !this.show;
          this.overlay = "overlayIn";
        }, 50);

        setTimeout(() => {
          this.show1 = !this.show1;
        }, 100);

        setTimeout(() => {
          this.show2 = !this.show2;
        }, 200);

        setTimeout(() => {
          this.show3 = !this.show3;
        }, 300);

        setTimeout(() => {
          this.show4 = !this.show4;
        }, 400);

        setTimeout(() => {
          this.show5 = !this.show5;
        }, 500);

        setTimeout(() => {
          this.show6 = !this.show6;
        }, 600);
      }
    },
    sair() {
      this.sidebarToggle();
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");

$verde1: #00b05a;
$verde1t: rgba(0, 176, 90, 0.7);
$verde2: rgb(146, 208, 80);
$verde3: #a9d18e;
$roxo: rgb(171, 91, 153);
$azul: rgb(131, 205, 232);
$teste: #ffffff;

#hamburguer {
  position: fixed;
  top: 2px;
  left: 24px;
  font-size: 27px;
  color: rgba(184, 19, 250, 0.698);
  transition: 500ms;
  z-index: 2000;
  cursor: pointer;
  background-color: #ffffff;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

#hamburguer:hover {
  position: fixed;
  top: 2px;
  left: 24px;
  font-size: 27px;
  color: rgba(184, 19, 250, 1);
  transition: 500ms;
  z-index: 2000;
  cursor: pointer;
  background-color: #ffffff;
  padding: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

#sidebar {
  width: 210px;
  position: fixed;
  top: 0;
  left: 0px;
  height: 100vh;
  z-index: 3000;
  background: rgba(255, 255, 255, 1);
  color: rgb(14, 14, 14);
  transition: all 0.3s;
  overflow-y: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

#sidebardesativ {
  width: 210px;
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  z-index: 3000;
  background: rgba(255, 255, 255, 0);
  color: rgb(8, 8, 8);
  transition: all 0.3s;
  overflow-y: none;
  //box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.item-sidebar {
  font-family: "Ubuntu", sans-serif;
  background-color: rgb(169, 209, 142);
  height: 40px;
  width: 100%;
  padding-top: 8px;
  padding-left: 20px;
  cursor: pointer;
  transition: 0.5s;
}

.item-sidebar:hover {
  background-color: $roxo;
  height: 40px;
  width: 100%;
  padding-top: 8px;
  padding-left: 20px;
  cursor: pointer;
}

.item-sidebar a {
  color: $teste;
  text-decoration: none;
  margin-top: 30px;
}

.logo {
  width: 150px;
  margin-left: -14px;
}

.logo-bnp {
  width: 170px;
  position: absolute;
  bottom: 10px;
}

#close {
  font-size: 30px;
  margin-left: 20px;
  color: rgb(171, 91, 153);
}

.overlayOut {
  display: none;
  z-index: 0;
}

.overlayIn {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 800;
}

.geral{

      font-family: Trebuchet MS,roboto,ubuntu,sans-serif;
}


</style>
