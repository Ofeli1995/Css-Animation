<template>
  <div class="section2" style="width: 100%">
    <div class="section2-content">
      <div class="founder-animation">
        <div class="animation-container"></div>
        <div class="animation-img">
          <div class="anim">
            <img
              src="@/assets/users/founderwithtablet.jpg"
              alt="img"
              height="800px"
            />
          </div>
        </div>
      </div>
      <div class="about-us">
        <div class="animation-containers">
          <div class="left-cont-container">
            <div class="left-cont"></div>
          </div>
          <div class="right-cont-container">
            <div class="right-cont"></div>
          </div>
        </div>
        <div class="about-us-content">
          ----------------     <span class="databest"> DATABEST</span> - is
          unique powerful artificial inteligence. It works with marketing data,
          makes analiyzes, and provides precise results
        </div>
        <div class="history">
          <div class="history-info">
            Just a few years ago, marketing and analitics where considered an
            innovation, and a great optional addition to the agency's toolbox,
            Now we provide the whole posibilities to take the whole spectrum of
            data. It's easy to use, cause
          </div>
          <div class="history-info">
            with the Databest you will have the patterns, emotions, and main
            empathy points users needs. This platform analyzes data and get you
            a clear vision of own user, It helps get the best out of any ads and
            people for any product.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section2",
};
</script>

<style lang="scss" scoped>
.section2 {
  margin-top: 150px;
}
.section2-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 20px 20px;
  margin-inline: auto;
  width: 80%;
}
.founder-animation {
  width: 360px;
  height: 1000px;
}
.animation-container {
  max-height: 917px;
  width: 560px;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, #abb9bc 7.13%, #abb7b7 89.45%);
  border-radius: 10px;
  animation: gradient-height 0.8s alternate linear;
}
.animation-img {
  overflow: hidden;
  position: absolute;
  top: 1555px;
  width: 1000px;
}
.anim {
  animation: image-right 1s alternate;
  width: 560px;
}
.about-us {
  width: 600px;
}
.animation-containers {
  position: relative;
  display: flex;
}
.left-cont-container {
  width: 230px;
  height: 135px;
  display: flex;
  flex-direction: column;
  bottom: -50px;
  position: absolute;
  left: 370px;
  justify-content: flex-start;
}
.left-cont {
  width: 230px;
  max-height: 135px;
  height: 100%;
  background-color: #dddbd6;
  border-radius: 10px;
  animation: gradient-height2 0.6s alternate linear;
}
.right-cont-container {
  width: 230px;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: absolute;

  bottom: -230px;
  left: 90px;
}
.right-cont {
  width: 230px;
  max-height: 450px;
  height: 100%;
  background-color: #c2b0a9;
  border-radius: 10px;

  transform: rotate(180deg);
  animation: gradient-height1 0.6s alternate linear;
}
.about-us-content {
  font-size: 1.75rem;
  word-break: break-word;
  padding-top: 400px;
}
.databest {
  font-size: 2rem;
}
.history {
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
}
.history-info {
  width: 147px;
  padding-right: 40px;
}
@keyframes image-right {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes gradient-height {
  0% {
    height: 750px;
  }
  100% {
    height: 917px;
  }
}
@keyframes gradient-height1 {
  0% {
    height: 350px;
  }
  100% {
    height: 450px;
  }
}
@keyframes gradient-height2 {
  0% {
    height: 85px;
  }
  100% {
    height: 135px;
  }
}
</style>
