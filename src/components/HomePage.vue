<template>
  <div class="container1">
    <div class="section1">
      <div class="left-col">
        <div class="animation-images">
          <div class="images-group">
            <img
              src="@/assets/animation-img/Vector.svg"
              alt="img"
              class="left-img"
              :class="{ showimages: showImages }"
            />
            <img
              src="@/assets/animation-img/Vector1.svg"
              alt="img"
              :class="{ showimages: showImages }"
              class="right-img"
            />
          </div>
          <div>
            <img
              src="@/assets/animation-img/Vector2.svg"
              class="bottom-img"
              alt="img"
              :class="{ showimages: showImages }"
            />
          </div>
          <div class="users-animation">
            <div>
              <img src="@/assets/users/2.jpg" alt="user" class="user1" />
              <img src="@/assets/users/1.jpg" alt="user" class="user2" />
            </div>

            <!-- @mouseout="onMouseOut"
            @mouseover="onMouseOver" -->
            <!-- :class="{
              'case-animation': showtextAnimation,
              'case-animation-out': showtextAnimationAfter,
            }" -->

            <div class="case-studies">
              <span>CASE </span>
              <span>STUDIES</span>
              <!-- :class="{ 'case-arrow-animation': showtextAnimation }" -->
              <img
                class="grow-arrow"
                src="@/assets/arrows/arrow-right.svg"
                alt="arrow"
                style="padding-top: 8px"
              />
            </div>
          </div>
          <div class="left-col-bottom">
            <div class="left-col-bottom-icon">
              <img src="@/assets/E.svg" alt="E" />
            </div>
            <div class="left-col-bottom-body">
              <span class="left-col-bottom-title">LATEST NEWS & INSIGHTS</span>
              <span>AI Adoption lessons from real life</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col central-col">
        <div class="col-gradient">
          <div class="for-position">
            <div class="dash-gorizont">
              <div class="container-orange-small">
                <div class="orange-circle-small">
                  <span class="orange-circle-text-small">
                    <span class="orange-circle-text-first-line-small">
                      SEE<br />
                    </span>

                    <span class="orange-circle-text-second-line-small">
                      HOW IT <br />
                    </span>
                    <span class="orange-circle-text-last-line-small">
                      WORKS
                    </span>
                  </span>
                </div>
              </div>
              <span class="snake central-text"
                >--------------------------------------</span
              >
              <span class="central-text">YOUR BEST</span>
              <span class="central-text">MARKETING & DATA</span>
              <span class="central-text">ANALYSER</span>
              <span class="created-by">CREATED BY</span>
              <div style="display: flex; align-items: center">
                <span class="snake central-text">------------</span>
                <div
                  class="grow-now-btn"
                  @mouseout="onMouseOut"
                  @mouseover="onMouseOver"
                >
                  <span
                    class="grow-now-btn-title"
                    :class="{
                      growAnimation: isHoverGrowNow,
                      growAnimationout: isHoverGrowNowAfter,
                    }"
                  >
                    GROW NOW
                  </span>

                  <img
                    class="grow-arrow"
                    :class="{
                      arrowAnimation: isHoverGrowNow,
                      arrowAnimationOut: isHoverGrowNowAfter,
                    }"
                    src="@/assets/arrows/up-arrow.svg"
                    alt="arrow"
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
        <div class="founder-container">
          <div>
            <img class="founder" src="@/assets/users/founder.jpg" alt="seo" />
          </div>
          <div class="about">
            <span class="founder-name"> GUY HAWKINS </span>
            <span class="position"> SEO & FOUNDER </span>
          </div>
        </div>
      </div>
    </div>
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
            unique powerful artificial inteligence. It works with marketing
            data, makes analiyzes, and provides precise results
          </div>
          <div class="history">
            <div class="history-info">
              Just a few years ago, marketing and analitics where considered an
              innovation, and a great optional addition to the agency's toolbox,
              Now we provide the whole posibilities to take the whole spectrum
              of data. It's easy to use, cause
            </div>
            <div class="history-info">
              with the Databest you will have the patterns, emotions, and main
              empathy points users needs. This platform analyzes data and get
              you a clear vision of own user, It helps get the best out of any
              ads and people for any product.
            </div>
          </div>
        </div>
      </div>
    </div>
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
            algorithm has a lot of ways to help business to achieve any goals
            and data results.
          </div>
          <div class="efficiency-bottom-text">
            <div class="history-info" style="font-size: 1.25rem">
              We support our clients and help them define the problems to set up
              the Databest in a better solution way. The more information you
              give the greatest result you have.
            </div>
            <div class="history-info" style="font-size: 1.25rem">
              Our analyzer technology is so young but doesn't have any
              competitors. We already have a lot of cases and numbers we are
              proud of. And some of them are able here.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section5" style="height: 100vh"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isHoverGrowNow: false,
      isHoverGrowNowAfter: false,
      showtextAnimation: false,
      showtextAnimationAfter: false,
      showImages: false,
    };
  },
  created() {
    this.showImages = true;
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
    onMouseOver(e) {
      // if (e.target.className === "case-studies") {
      //   this.showtextAnimationAfter = false;
      //   this.showtextAnimation = true;
      // } else
      // if (e.target.className === "grow-now-btn") {
      this.showtextAnimation = true;
      this.isHoverGrowNowAfter = false;
      this.isHoverGrowNow = true;
      // }
    },
    onMouseOut(e) {
      // if (e.target.className === "case-studies") {
      //   this.showtextAnimation = false;
      //   this.showtextAnimationAfter = true;
      // } else
      // if (e.target.className === "grow-now-btn") {
      this.isHoverGrowNow = false;
      this.isHoverGrowNowAfter = true;
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
}
.founder-container {
  padding-top: 230px;
  padding-left: 100px;
  animation: mover 0.8s alternate;
}
.section2-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left-col {
  width: 350px;
}

.founder {
  width: 280px;
  height: 300px;
}
.founder-name {
  font-weight: 900;
  padding-top: 8px;
}
.position {
  font-size: 0.75rem;
  color: #a6a6a6;
  padding-top: 8px;
}
.left-col-bottom-title {
  color: #a6a6a6;
}
.left-col-bottom-body {
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}
.left-col-bottom {
  position: absolute;
  top: 840px;
  display: flex;
  align-items: center;
  animation: mover 0.8s alternate;
}
.left-col-bottom-icon {
  padding-right: 25px;
}
.case-studies {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 180px;
  animation: mover-text 0.8s alternate;
}
.case-studies span {
  font-size: 1.25rem;
  font-weight: 900;
}
.case-studies:hover span {
  animation-name: btn-title-circle;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  color: black;
  display: block;
}
.container-orange {
  position: relative;
  width: 350px;
  height: 350px;
}
.container-orange-small {
  position: relative;
  width: 150px;
  height: 150px;
  display: none;
  padding-left: 300px;
}
.orange-circle-small {
  width: 150px;
  height: 150px;
  background: linear-gradient(30.12deg, #e8aea0 14.52%, #f06950 53.5%);
  border-radius: 50%;
  position: absolute;
}
.animation-images {
  position: relative;
}
.users-animation {
  position: absolute;
  top: 600px;
  width: 350px;
  height: 650px;
  display: flex;
  justify-content: space-between;
}
.user1 {
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  left: 65px;
  width: 80px;
  height: 80px;
  animation: mover-user1 0.8s alternate;
}
.user2 {
  animation: mover-user2 0.8s alternate;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  width: 80px;
  height: 80px;
}
.showimages {
  display: block !important;
}
.left-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 245px;
  height: 146px;
  display: none;
  animation: mover2 1.5s alternate;
}
.right-img {
  width: 142px;
  height: 189px;
  position: absolute;
  right: 0;
  top: 0;
  display: none;

  animation: mover1 1.5s alternate;
}
.bottom-img {
  position: relative;
  width: 349px;
  height: 113px;
  display: none;

  top: 120px;
  animation: mover3 1.5s alternate;
}
.section1 {
  display: flex;
  justify-content: space-between;
  padding: 140px 20px 20px 20px;
  margin-inline: auto;
  width: 80%;
}
.central-col {
  padding-top: 60px;
  // padding-right: 40px;
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
.orange-circle-text-small {
  position: absolute;
  top: 50px;
  left: 50px;
  font-style: normal;
  font-weight: 900;
  display: block;
}
.orange-circle-text-first-line-small,
.orange-circle-text-last-line-small,
.orange-circle-text-second-line-small {
  display: block;
  overflow: hidden;
  font-size: 1rem;
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
@keyframes arrow-right {
  0% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: black;
  }
  33% {
    transform: translateX(100%) translateY(0%);
    opacity: 0;
    color: black;
  }
  66% {
    transform: translateX(-100%) translateY(0%);
    opacity: 0;
    color: tomato;
  }
  100% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: tomato;
  }
}
@keyframes mover-user2 {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-user1 {
  0% {
    transform: translateX(-50px) translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}
@keyframes mover-text {
  0% {
    transform: translateX(-50px) translateY(100px);
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

.growAnimation,
.case-animation {
  animation-name: btn-title-circle;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  color: black;
  animation-fill-mode: forwards;
}
.case-arrow-animation {
  animation-name: arrow-right;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}
.growAnimationout,
.case-animation-out {
  animation-name: btn-title-circle-back;
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  color: black;
  animation-fill-mode: forwards;
}

.grow-arrow {
  width: 12px !important;
  padding-left: 10px;
}

.arrowAnimation {
  animation-name: arrow-rotate;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}
.arrowAnimationOut {
  animation-name: arrow-rotate-back;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-direction: alternate, reverse, normal;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

@keyframes arrow-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes arrow-rotate-back {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0);
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
@keyframes btn-title-circle-back {
  0% {
    transform: translateX(0%) translateY(0%);
    opacity: 1;
    color: black;
  }
  33% {
    transform: translateX(0%) translateY(+100%);
    opacity: 0;
    color: black;
  }
  66% {
    transform: translateX(0%) translateY(-100%);
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
  .container-orange-small {
    display: block;
  }
  .snake {
    padding: 25px 0;
  }
  .created-by {
    padding-bottom: 60px;
  }
  .central-col {
    padding-left: 25px;
    position: relative;
  }

  .col-gradient {
    height: 800px;
  }
  .section1 {
    padding-top: 0px;
  }
  .dash-gorizont {
    top: -50px;
  }
}
@media screen and (max-width: 980px) {
  .central-text {
    font-size: 5rem;
  }
  .col-gradient {
    height: 800px;
  }
}
@media screen and (max-width: 850px) {
  .central-text {
    font-size: 4rem;
  }
}
@media screen and (max-width: 810px) {
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
  }
  .col-gradient {
    height: 800px;
  }
}
@media screen and (max-width: 620px) {
  .dash-gorizont {
    width: 480px;
    left: -31%;
  }
  .central-text {
    font-size: 3rem;
  }
}
@media screen and (max-width: 520px) {
  .dash-gorizont {
    width: 480px;
    left: -31%;
  }
  .central-text {
    font-size: 3rem;
  }
}
@media screen and (max-width: 500px) {
  .central-text {
    font-size: 2.5rem;
  }
  .dash-gorizont {
    width: 440px;

    left: -24%;
  }
}
@media screen and (max-width: 480px) {
  .dash-gorizont {
    width: 410px;
    left: -19%;
  }
}
@media screen and (max-width: 460px) {
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    position: absolute;
    left: 5%;
  }
  .col-gradient {
    height: 800px;
  }

  .central-text {
    font-size: 1.75rem;
  }
}
@media screen and (max-width: 450px) {
  .dash-gorizont {
    left: 18%;
    width: 177px;
  }
  .central-text {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 430px) {
  .central-text {
    font-size: 1.5rem;
  }
  .dash-gorizont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    position: absolute;
    left: 5%;
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
  }
  .col-gradient {
    width: 250px;
  }
  .central-text[data-v-df02a584] {
    font-size: 1.25rem;
  }
}
//----------------------- section2
// .section2 {
//   width: 100%;
//   height: 800px;
//   display: flex;
//   justify-content: space-around;
// }
.section2 {
  margin-top: 150px;
}
.section2-content {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 20px 20px;
  margin-inline: auto;
  width: 80%;
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
.history {
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
}
.history-info {
  width: 147px;
  padding-right: 40px;
}
.about-us {
  width: 600px;
}
.about-us-content {
  font-size: 1.75rem;
  word-break: break-word;
  padding-top: 400px;
}

.founder-animation {
  width: 360px;
  height: 1000px;
}
.databest {
  font-size: 2rem;
}
.animation-containers {
  position: relative;
  display: flex;
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
.right-cont-container {
  width: 230px;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: absolute;

  bottom: -230px;
  left: 90px;
}
.left-cont {
  width: 230px;
  max-height: 135px;
  height: 100%;
  background-color: #dddbd6;
  border-radius: 10px;
  animation: gradient-height2 0.6s alternate linear;
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

// secttion3
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
  left: 200px;
  bottom: -230px;
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
  left: 675px;
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
  left: 920px;
  top: 270px;
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
  left: 450px;
  top: 320px;
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
</style>
