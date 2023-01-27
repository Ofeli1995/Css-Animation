<template>
  <div class="container1">
    <div class="columns">
      <div class="left-col">
        <div class="animation-images">
          <div class="images-group">
            <img
              src="@/assets/animation-img/Vector.svg"
              alt="img"
              class="left-img"
            />
            <img
              src="@/assets/animation-img/Vector1.svg"
              alt="img"
              class="right-img"
            />
          </div>
          <div>
            <img
              src="@/assets/animation-img/Vector2.svg"
              class="bottom-img"
              alt="img"
            />
          </div>
          <div class="users-animation">
            <img
              src="@/assets/users/1.jpg"
              alt="user"
              width="50px"
              height="50px"
              style="border-radius: 50%"
            />
            <img
              src="@/assets/users/2.jpg"
              alt="user"
              width="50px"
              height="50px"
              style="border-radius: 50%"
            />
          </div>
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
              <span class="created-by">CREATED BY</span>
              <div style="display: flex; align-items: center">
                <span class="snake central-text">--------------</span>
                <div class="grow-now-btn">
                  <span class="grow-now-btn-title"> GROW NOW -> </span>
                </div>
                <span class="snake central-text">--------------</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div class="orange-circle">
          <span class="orange-circle-text">
            <span class="orange-circle-text-first-line"> SEE<br /> </span>

            <span class="orange-circle-text-second-line"> HOW IT <br /> </span>
            <span class="orange-circle-text-last-line"> WORKS </span>
          </span>
        </div>
      </div>
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
.animation-images {
  position: relative;
}
.users-animation {
  position: absolute;
  top: 300px;
}
.left-img {
  position: absolute;
  top: 0;
  left: 0;
  animation: mover2 1.8s alternate;
}
.right-img {
  position: absolute;
  right: 0;
  top: 0;
  animation: mover1 1.8s alternate;
}
.bottom-img {
  position: relative;
  top: 120px;
  animation: mover3 1.8s alternate;
}
.columns {
  display: flex;
  justify-content: space-around;
  padding: 100px 20px 20px 20px;
}
.central-col {
  padding-top: 60px;
  padding-right: 140px;
}
.col-gradient {
  width: 300px;
  height: 950px;
  background: linear-gradient(186.35deg, #d5d8d1 73.58%, #9aa5b0 100.76%);
  border-radius: 10px;
  animation: mover 0.8s alternate;
}
.orange-circle {
  width: 250px;
  height: 250px;
  background: linear-gradient(30.12deg, #e8aea0 14.52%, #f06950 53.5%);
  border-radius: 50%;
  position: relative;
  animation: mover 0.8s alternate;
}
.orange-circle-text {
  position: absolute;
  top: 85px;
  left: 80px;
  font-style: normal;
  font-weight: 900;
  display: block;
}
.orange-circle-text-first-line,
.orange-circle-text-last-line,
.orange-circle-text-second-line {
  display: block;
  overflow: hidden;
  font-size: 1.5rem;
}
.orange-circle:hover {
  .orange-circle-text-first-line,
  .orange-circle-text-last-line,
  .orange-circle-text-second-line {
    animation-name: btn-title-circle;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    animation-direction: alternate, reverse, normal;
    animation-timing-function: linear;
    animation-delay: 0s;
    color: black;
    display: block;

    animation-fill-mode: forwards;
  }
}
.users-animation {
  width: 200px;
  height: 200px;
  // background-color: red;
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
@keyframes mover1 {
  0% {
    transform: translateY(-50px) translateX(+50px);
    opacity: 0;
    height: 50px;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
    height: 189px;
  }
}
@keyframes mover2 {
  0% {
    transform: translateY(-50px) translateX(-50px);
    opacity: 0;
    width: 70px;
  }

  100% {
    transform: translateY(0);
    opacity: 100%;
    width: 245px;
  }
}
@keyframes mover3 {
  0% {
    transform: translateY(50px);
    opacity: 0;
    width: 50px;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
    width: 100%;
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
  padding-bottom: 100px;
}
.for-position {
  position: relative;
}
.grow-now-btn-title {
  display: block;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
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
    color: black;
  }
  100% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: black;
  }
}
</style>
