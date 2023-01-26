<template>
  <div class="container1">
    <div class="columns">
      <div class="left-col">
        2
        <!-- <div class="images-group">
          <img
            src="@/assets/animation-img/Vector1.svg"
            style="padding-bottom: 20px"
            alt="img"
          />
          <img src="@/assets/animation-img/Vector2.svg" alt="img" />
        </div>
        <div class="bottom-img">
          <img src="@/assets/animation-img/Vector3.svg" alt="img" />
        </div> -->
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
              <span class="created-by">CREATED BY</span>
              <span class="snake central-text"
                >------------------------------------------</span
              >
              <div class="grow-now-btn">
                <span class="grow-now-btn-title"> GROW NOW </span>
              </div>
              <span class="snake central-text"
                >------------------------------------------</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">3</div>
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
  height: 950px;
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
  padding: 50px 0;
}
.grow-now {
  padding-top: 60px;
}
.created-by {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  color: #9aa5b0;
  padding-top: 2.5rem;
}
.for-position {
  position: relative;
}
.grow-now-btn-title {
  display: block;
}
.grow-now-btn {
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebea;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
}
.grow-now-btn:hover {
  .grow-now-btn-title {
    animation-name: btn-title-circle;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    animation-direction: alternate, reverse, normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    color: black;
    animation-fill-mode: forwards;
  }
}
@keyframes btn-title-circle {
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
</style>
