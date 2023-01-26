<template>
  <div class="container1">
    <div class="columns">
      <div class="col">
        <div class="images-group">
          <img
            src="@/assets/animation-img/Vector1.svg"
            style="padding-bottom: 20px"
            alt="img"
          />
          <img src="@/assets/animation-img/Vector2.svg" alt="img" />
        </div>
        <div class="bottom-img">
          <img src="@/assets/animation-img/Vector3.svg" alt="img" />
        </div>
      </div>
      <div class="col central-col">
        <div class="col-gradient">
          <div class="for-position">
            <div class="dash-gorizont">
              <span class="snake central-text"
                >------------------------------------------</span
              >
              <span class="central-text">YOUR BEST</span>
              <span class="central-text">MARKETING & DATA</span>
              <span class="central-text">ANALYSER</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.columns {
  display: flex;
  justify-content: space-between;
  padding: 100px 20px 20px 20px;
}
.central-col {
  padding-top: 60px;
}
.col-gradient {
  width: 300px;
  height: 650px;
  background: linear-gradient(186.35deg, #d5d8d1 73.58%, #9aa5b0 100.76%);
  border-radius: 10px;
  animation: mover 0.8s alternate;
}
@keyframes mover {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
.dash-gorizont {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  position: absolute;
  left: -83%;
  top: 100px;
}
.central-text {
  font-size: 5.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.snake {
  font-size: 16px !important;
  letter-spacing: 5px;
  font-family: cursive !important;
  padding-bottom: 50px;
}
.for-position {
  position: relative;
}

// .content {
//   border-bottom: 0.0625rem solid #c4c4c4;
//   width: 100%;
//   animation-name: show-navbar;
//   animation-duration: 1s;
//   animation-iteration-count: 1;
//   animation-timing-function: linear;
//   animation-delay: 0s;
//   animation-fill-mode: none;
// }
</style>
