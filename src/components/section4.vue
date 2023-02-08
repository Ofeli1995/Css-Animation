<template>
  <div class="section4">
    <div class="custom-formula">
      <span class="custom-formula-text">USE A CUSTOM</span>
      <span class="custom-formula-text">FORMULA FOR YOUR</span>
      <span class="custom-formula-text">OWN MARKETING</span>
      <span class="custom-formula-text">SUCCESS</span>
    </div>
    <div class="efficiency">
      <div class="circles-animation">
        <div class="terabytes">
          <div class="terabytes-content">
            <div style="font-size: 4rem; font-weight: 900">1200 +</div>
            <div>TERABYTES</div>
            <div>OF DATA</div>
          </div>
        </div>
        <div class="correctness">
          <div class="correctness-content">
            <div style="font-size: 4rem; font-weight: 900">+ 98%</div>
            <div>CORRECTNESS</div>
            <div>DATA</div>
          </div>
        </div>
        <div class="campaign">
          <div class="campaign-content">
            <div style="font-size: 4rem; font-weight: 900">- 37%</div>
            <div>CAMPAING</div>
            <div>DATA</div>
          </div>
        </div>
        <div class="small-orange-circle">
          <div class="small-orange-circle-content">
            <div>SEE</div>
            <div>MORE</div>
            <div>STARS</div>
          </div>
        </div>
      </div>
      <div class="efficiency-content">
        <div class="efficiency-content-text">
          ----------------     EFFICIENCY - is a key due to the power of AI,
          algorithm has a lot of ways to help business to achieve any goals and
          data results.
        </div>
        <div class="efficiency-bottom-text">
          <div class="history-info" style="font-size: 1.25rem">
            We support our clients and help them define the problems to set up
            the Databest in a better solution way. The more information you give
            the greatest result you have.
          </div>
          <div class="history-info" style="font-size: 1.25rem">
            Our analyzer technology is so young but doesn't have any
            competitors. We already have a lot of cases and numbers we are proud
            of. And some of them are able here.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section4",
};
</script>

<style lang="scss" scoped>
.section4 {
  margin-inline: auto;
  width: 80%;
  // height: 100vh;
  // background-color: red;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
}
.custom-formula {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
}
.custom-formula-text {
  font-size: 7.5rem;
  font-weight: 900;
}
.efficiency {
  display: flex;
  justify-content: space-between;
  // padding: 100px 0;
  height: 800px;
  align-items: center;
}
.efficiency-content {
  width: 750px;
  display: flex;
  flex-direction: column;
  animation: mover 0.8s alternate;
}
.efficiency-content-text {
  font-size: 1.75rem;
}
.efficiency-bottom-text {
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
}
.terabytes {
  width: 350px;
  height: 350px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  // left: 200px;
  bottom: -230px;
  animation: mover-circle1 1.5s alternate;
}
.small-orange-circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background: linear-gradient(30.12deg, #e8aea0 14.52%, #f06950 53.5%);
  position: absolute;
  left: 475px;
}
.small-orange-circle-content {
  font-size: 1.5rem;
  font-weight: 900;
}
.campaign {
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  left: 720px;
  top: 270px;
  animation: mover-circle3 1.5s alternate;
}
.correctness {
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 250px;
  top: 320px;
  animation: mover-circle2 1.5s alternate;
}
.small-orange-circle-content,
.campaign-content,
.correctness-content,
.terabytes-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circles-animation {
  display: flex;
  position: relative;
}
.history-info {
  width: 147px;
  padding-right: 40px;
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
@keyframes mover-circle1 {
  0% {
    transform: translateY(50px) translateX(350px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-circle2 {
  0% {
    transform: translateY(-200px) translateX(150px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-circle3 {
  0% {
    transform: translateY(-200px) translateX(-150px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
</style>
