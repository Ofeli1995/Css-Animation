<template>
  <div class="container">
    <div class="content">
      <div class="column">
        <div class="col">
          <div class="nav-title-container">
            <span class="nav-title"> Product </span>
          </div>
          <div class="nav-title-container">
            <span class="nav-title"> Resources </span>
          </div>
          <div class="nav-title-container">
            <span class="nav-title"> Support </span>
          </div>
        </div>
        <div class="col-icon">
          <img
            src="@/assets/logo.svg"
            alt="logo"
            class="logo-img"
            style="width: 235px"
          />
        </div>
        <div class="col">
          <div class="nav-title-container">
            <span class="nav-title"> Company </span>
          </div>
          <div class="nav-title-container">
            <span class="nav-title"> Pricing </span>
          </div>
          <div class="nav-title">
            <button class="connect-btn">
              <span class="connect-btn-title"> Connect </span>
            </button>
          </div>
        </div>
        <div
          class="burger"
          :class="{ act: menuActive }"
          @click="menuActive = !menuActive"
        >
          <div class="bars">
            <div class="bar top"></div>
            <div class="bar mid"></div>
            <div class="bar btm"></div>
          </div>
        </div>
        <div class="main-menu" :class="{ act: menuActive }">
          <ul class="menu-list">
            <li
              class="list-item"
              v-for="(item, index) of menuList"
              :key="index"
            >
              {{ item.label }}
            </li>
          </ul>
          <div class="media-container">
            <i class="media fab fa-instagram"></i>
            <i class="media fab fa-github"></i>
          </div>
        </div>
      </div>
    </div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
export default {
  name: "HomeView",
  components: { HomePage },
  data() {
    return {
      menuActive: false,
      menuList: [
        { label: "Product", url: "#" },
        { label: "Resources", url: "#" },
        { label: "Support", url: "#" },
        { label: "Company", url: "#" },
        { label: "Pricing", url: "#" },
        { label: "Connect", url: "#" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.main-menu {
  display: none;
}
.container {
  background-image: url("@/assets/background.jpg");
  background-position: 0 0;
  background-repeat: repeat-y;
  background-size: cover;
  padding: 0px;
  margin: 0;
}
.col-manu {
  display: none;
}
.burger-manu {
  width: 50px;
  margin-top: 8px;
}
.column {
  height: 100px;
  padding: 0.5rem 0;
}
.column,
.col {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.col {
  gap: 75px;
  padding: 0 20px;
}
.nav-title {
  font-size: 1.562rem;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1px;
}
.connect-btn-title {
  font-size: 1.562rem;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1px;
}
.connect-btn {
  height: 50px;
  display: flex;
  align-items: center;
}
.nav-title-container {
  height: 60px;
  display: flex;
  align-items: center;
}
.connect-btn:hover {
  .connect-btn-title {
    animation-name: btn-title-circle;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: alternate, reverse, normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }
}
.nav-title-container:hover {
  .nav-title {
    animation-name: title-circle;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: alternate, reverse, normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    color: tomato;
    animation-fill-mode: forwards;
  }
}
.connect-btn {
  background-color: black;
  color: #fff;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.25rem 0.875rem 0.375rem;
}
.content {
  border-bottom: 0.0625rem solid #c4c4c4;
  width: 100%;
  animation-name: show-navbar;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-fill-mode: none;
}
.logo-img {
  width: 235px;
}
@keyframes show-navbar {
  0% {
    transform: translateX(0%) translateY(-100%);
    opacity: 0;
    color: black;
  }

  100% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
  }
}
@keyframes title-circle {
  0% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: black;
  }
  33% {
    transform: translateX(0%) translateY(-100%);
    opacity: 0;
    color: black;
  }
  66% {
    transform: translateX(0%) translateY(100%);
    opacity: 0;
    color: tomato;
  }
  100% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: tomato;
  }
}
@keyframes btn-title-circle {
  0% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
  }
  33% {
    transform: translateX(0%) translateY(-100%);
    opacity: 0;
  }
  66% {
    transform: translateX(0%) translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
  }
}

ol,
ul {
  list-style: none;
}

$primary: #e74315;
$black: #000;
$white: #fff;
$time: 0.15s;
$menuTime: 0.55s;
$delay: 0.4s;

body {
  height: 100vh;
}

.burger {
  z-index: 4001;
  cursor: pointer;
  position: fixed;
  top: 33px;
  left: 20px;
  position: absolute;
  width: 50px;
  height: 50px;
  display: none;
  .bars {
    position: relative;
    transition: all 0.8s;
    left: 10px;
    top: 24px;
    width: 30px;
    height: 3px;
  }
  .bar {
    position: absolute;
    transition: all $time linear, background $time linear $delay;
    transform-origin: 50% 50%;
    width: 100%;
    height: 100%;
    background: $black;
    &.top {
      top: -8px;
    }
    &.mid {
      left: 0;
      right: 0;
    }
    &.btm {
      bottom: -8px;
    }
  }
}

.burger:not(.act):hover {
  .bar {
    &.top {
      width: 60%;
    }
    &.mid {
      width: 75%;
    }
    &.btm {
      width: 90%;
    }
  }
}

.burger.act {
  .bars {
    transform: rotate(360deg);
  }
  .bar {
    background: $white;
    &.top {
      top: 0;
      transform: rotate(45deg);
      transition-delay: $time;
    }
    &.mid {
      opacity: 0;
      width: 0;
      left: 50%;
      right: 50%;
    }
    &.btm {
      bottom: 0;
      transform: rotate(-45deg);
      transition-delay: $time;
    }
  }
}

.main-menu {
  position: fixed;
  z-index: 4000;
  transition: transform $menuTime cubic-bezier(0.85, 0.2, 0.2, 0.85);
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  transform: translateX(100%);
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding-top: 130px;
  .menu-list {
    .list-item {
      user-select: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      color: $white;
      transition: color $time linear;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 70px;
      text-align: center;
      &:hover {
        color: tomato;
      }
    }
  }
  .menu-list .list-item {
    transform: translateX(70px);
    opacity: 0;
    @for $i from 1 to 10 {
      &:nth-child(#{$i}) {
        transition: transform $time * 2 linear $i * 0.2s,
          opacity $time * 2 linear $i * 0.2s, color $time linear;
      }
    }
  }
  .media-container {
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .media {
      cursor: pointer;
      font-size: 30px;
      color: $white;
      transition: color $time linear;
      transform: translateY(70px);
      opacity: 0;
      transition: transform $time * 2 linear 1s, opacity $time * 2 linear 1s,
        color $time linear;
      &:hover {
        color: $primary;
      }
    }
    .media + .media {
      margin-left: 30px;
    }
  }
}

.main-menu.act {
  transform: translateX(0);
  .menu-list .list-item {
    opacity: 1;
    transform: translateX(0px);
  }
  .media-container {
    .media {
      transform: translateX(0px);
      opacity: 1;
    }
  }
}

@media screen and (max-width: 1250px) {
  .col {
    gap: 55px;
  }
}
@media screen and (max-width: 1160px) {
  .col {
    gap: 40px;
  }
}
@media screen and (max-width: 1160px) {
  .col {
    display: none;
  }
  .col-manu {
    display: block;
  }
  .burger {
    display: block;
  }
  .column {
    justify-content: center;
  }
  .burger .bars {
    width: 50px;
  }
  .main-menu {
    display: block;
  }
}
@media screen and (max-width: 520px) {
  .logo-img {
    width: 180px !important;
  }
  .burger .bars {
    width: 30px;
  }
}
@media screen and (max-width: 400px) {
  .logo-img {
    width: 160px !important;
  }
}
@media screen and (max-width: 360px) {
  .logo-img {
    width: 150px !important;
  }
}
</style>
