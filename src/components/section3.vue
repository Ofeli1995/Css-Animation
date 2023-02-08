<template>
  <div class="section3">
    <div class="statistics">
      <div class="lines">
        <div class="ourteam-line-cont">
          <div class="ourteam-line"></div>
        </div>
        <div class="line-cont">
          <div class="line"></div>
        </div>
        <div class="line-cont">
          <div class="line"></div>
        </div>
        <div class="line-cont">
          <div class="line"></div>
        </div>
        <div class="line-cont">
          <div class="line"></div>
        </div>
      </div>
      <div class="values">
        <div class="ourteam">
          <div class="images-animation-2">
            <img src="@/assets/users/3.jpg" alt="img" class="anim-img3" />
            <img src="@/assets/users/4.jpg" alt="img" class="anim-img4" />
            <img src="@/assets/users/5.jpg" alt="img" class="anim-img5" />
          </div>
        </div>
        <div class="divider-container">
          <div class="vertical-divider"></div>
        </div>
        <div class="value">
          <div class="val">44</div>
          <div class="title-section3">COUNTRIES</div>
        </div>
        <div class="divider-container">
          <div class="vertical-divider"></div>
        </div>

        <div class="value">
          <div class="val">32</div>
          <div class="title-section3">BUSINESS AREAS</div>
        </div>
        <div class="divider-container">
          <div class="vertical-divider"></div>
        </div>

        <div class="value">
          <div class="val">500+</div>
          <div class="title-section3">TBYTE DATA</div>
        </div>
        <div class="divider-container">
          <div class="vertical-divider"></div>
        </div>

        <div class="value">
          <div class="val">81+</div>
          <div class="title-section3">LANGUAGES</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section3",
};
</script>

<style lang="scss">
.section3 {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  margin-inline: auto;
  width: 80%;
}
.statistics {
  display: flex;
  flex-direction: column;
  animation: mover 0.8s alternate;
  margin: 0 auto;
}
.lines,
.values {
  display: flex;
}
.lines {
  height: 0px;
}
.ourteam-line {
  height: 0px;
  width: 400px;
  border-top: 1px dashed black;
  margin: 0 20px;
  animation: gradient-width 0.6s alternate linear;
}
.line {
  height: 0px;
  width: 200px;
  border-top: 1px dashed black;
  margin-right: 40px;
  animation: gradient-width1 0.6s alternate linear;
}
.line-cont {
  width: 200px;
  height: 0px;
  margin-right: 40px !important;
}
.ourteam-line-cont {
  width: 400px;
  height: 0px;
  margin-right: 60px;
}
.anim-img3,
.anim-img4,
.anim-img5 {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.ourteam {
  width: 400px;
  margin: 0 20px;
}
.value {
  margin: 0 20px;
  width: 200px;
  padding-top: 20px;
}
.val {
  font-size: 2.5rem;
  font-weight: 900;
}
.title-section3 {
  font-size: 1rem;
  padding-top: 10px;
}
.vertical-divider {
  width: 0px;
  height: 100px;
  border-right: 1px dashed black;
  margin-top: 20px;
  animation: divider-height 0.6s alternate linear;
}
.divider-container {
  width: 0px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.images-animation-2 {
  padding-left: 15px;
  position: relative;
  padding-top: 20px;
  margin-right: 20px;
}
.anim-img3,
.anim-img4,
.anim-img5 {
  position: absolute;
  border: 1px solid white;
}
.anim-img3 {
  left: 145px;
  animation: mover-user3 0.8s alternate;
}
.anim-img4 {
  left: 80px;
  animation: mover-user4 0.8s alternate;
}
.anim-img5 {
  animation: mover-user5 0.8s alternate;
}

@keyframes mover-user3 {
  0% {
    transform: translateX(120px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user4 {
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user5 {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user3 {
  0% {
    transform: translateX(120px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user4 {
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user5 {
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes gradient-width {
  0% {
    width: 200px;
  }
  100% {
    height: 400px;
  }
}
@keyframes gradient-width1 {
  0% {
    width: 100px;
  }
  100% {
    height: 200px;
  }
}
@keyframes divider-height {
  0% {
    height: 20px;
  }
  100% {
    height: 100px;
  }
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
</style>
