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
            <div>
              <img
                src="@/assets/users/2.jpg"
                alt="user"
                width="100px"
                height="100px"
                class="user1"
              />
              <img
                src="@/assets/users/1.jpg"
                alt="user"
                width="100px"
                height="100px"
                class="user2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col central-col">
        <div class="col-gradient">
          <div class="for-position">
            <div class="dash-gorizont">
              <span class="snake central-text"
                >--------------------------------------</span
              >
              <span class="central-text">YOUR BEST</span>
              <span class="central-text">MARKETING & DATA</span>
              <span class="central-text">ANALYSER</span>
              <span class="created-by">CREATED BY</span>
              <div style="display: flex; align-items: center">
                <span class="snake central-text">------------</span>
                <div class="grow-now-btn">
                  <span class="grow-now-btn-title"> GROW NOW </span>
                  <img
                    class="arrow-animation"
                    src="@/assets/arrows/up-arrow.svg"
                    alt="arrow"
                    width="18px"
                    height="18px"
                  />
                </div>
                <span class="snake central-text">------------</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div
          class="container-orange"
          @mousemove="onMouseMove"
          @mouseleft="onMouseLeave"
        >
          <div class="orange-circle">
            <span class="orange-circle-text">
              <span class="orange-circle-text-first-line"> SEE<br /> </span>

              <span class="orange-circle-text-second-line">
                HOW IT <br />
              </span>
              <span class="orange-circle-text-last-line"> WORKS </span>
            </span>
          </div>
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
  methods: {
    onMouseMove(e) {
      let orange = document.querySelector(".orange-circle");
      let clientY = -(window.innerHeight / 2 - e.pageY) / 5;
      let clientX = -(window.innerWidth / 2 - e.pageX) / 5;
      orange.style.left = clientX + "px";
      orange.style.top = clientY + "px";
    },
    onMouseLeave() {
      orange.style.left = 0 + "px";
      orange.style.top = 0 + "px";
    },
  },
};
</script>
<style lang="scss" scoped>
.container-orange {
  position: relative;
  width: 350px;
  height: 350px;
}
.animation-images {
  position: relative;
}
.users-animation {
  position: absolute;
  top: 300px;
}
.user1 {
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  left: 80px;
}
.user2 {
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
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
  padding: 140px 20px 20px 20px;
}
.central-col {
  padding-top: 60px;
  padding-right: 40px;
}
.col-gradient {
  width: 300px;
  height: 950px;
  background: linear-gradient(
    185.53deg,
    #d6d9d2 42.08%,
    #b2c0c0 64.68%,
    #9ba6b1 82.3%
  );
  border-radius: 10px;
  animation: mover 0.8s alternate;
}
.orange-circle {
  width: 250px;
  height: 250px;
  background: linear-gradient(30.12deg, #e8aea0 14.52%, #f06950 53.5%);
  border-radius: 50%;
  position: absolute;
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
  width: 300px;
  height: 600px;
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
  display: block;
  width: max-content;
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
  .arrow-animation {
    animation: arrow-rotate 0.8s alternate;
  }
}
@keyframes arrow-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
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
@media screen and (max-width: 1160px) {
  .container-orange,
  .animation-images {
    display: none;
  }
  .snake {
    padding: 25px 0;
  }
  .created-by {
    padding-bottom: 60px;
  }
  .central-col {
    padding-right: 0;
  }
  .col-gradient {
    height: 800px;
  }
  .columns {
    padding-top: 0px;
  }
}
@media screen and (max-width: 980px) {
  .central-text {
    font-size: 5rem;
  }
  .col-gradient {
    height: 750px;
  }
}
@media screen and (max-width: 850px) {
  .central-text {
    font-size: 4rem;
  }
}
@media screen and (max-width: 800px) {
  .central-text {
    font-size: 3.5rem;
  }
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    position: absolute;
    left: -50%;
    top: 100px;
  }
  .col-gradient {
    height: 650px;
  }
}
@media screen and (max-width: 620px) {
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    position: absolute;
    left: -34%;
    top: 100px;
  }
}
@media screen and (max-width: 500px) {
  .central-text {
    font-size: 2.5rem;
  }
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    position: absolute;
    left: -24%;
    top: 100px;
  }
}
@media screen and (max-width: 450px) {
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    position: absolute;
    left: -16%;
    top: 100px;
  }
  .col-gradient {
    height: 570px;
  }
}
@media screen and (max-width: 420px) {
  .central-text {
    font-size: 1.5rem;
  }
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    position: absolute;
    left: 0%;
    top: 100px;
  }
}
@media screen and (max-width: 360px) {
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    position: absolute;
    left: 10%;
    top: 100px;
  }
  .col-gradient {
    width: 250px;
  }
  .central-text[data-v-df02a584] {
    font-size: 1.25rem;
  }
}
</style>
