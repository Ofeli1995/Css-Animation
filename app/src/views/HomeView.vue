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
        <div class="col-manu">
          <img class="burger-manu" src="@/assets/menu.svg" alt="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style lang="scss">
.container {
  background-image: url("@/assets/background.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  height: 120px;
  padding: 2.125rem 0;
}
.column,
.col {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.col {
  gap: 75px;
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
}
</style>
