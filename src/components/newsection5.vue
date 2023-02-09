<template>
  <div class="section5-container">
    <div class="section5-header">
      <div class="general-text">
        We are helping brands to begin a new life in the digital era and leave
        competitors
      </div>
      <div class="secondary-text">
        This is a complete solution, with marketing strategy, and
        recommendations for budgets, and creatives.
      </div>

      <div class="go">
        <div>GO</div>
        <img src="@/assets/arrows/arrow-right.svg" alt="" />
      </div>
    </div>
    <divider />
    <div class="section5-content">
      <div class="reclaim anim-container">
        <div class="big-animation-text">Reclaim Creative Co</div>
        <div>CREATIVE & OPTIMIZATION</div>
      </div>
      <divider />
      <div class="corporation anim-container">
        <div class="big-animation-text">BigBlaze Corporation</div>
        <div>FULL MARKETING SOULTION</div>
      </div>
      <divider />
      <div class="word anim-container">
        <div class="big-animation-text">Neotel & RED Word</div>
        <div>ANALYSIS & AUDIT</div>
      </div>
      <divider />
      <div class="studio anim-container">
        <div class="big-animation-text">Olliveri Studio</div>
        <div>CREATIVE & OPTIMIZATION</div>
      </div>
      <divider />
      <div class="store anim-container">
        <div class="big-animation-text">Greezely Brand Store</div>
        <div>FULL MARKETING SOULTION</div>
      </div>
      <divider />
    </div>
  </div>
</template>
<script>
import divider from "@/components/divider.vue";
export default {
  name: "section5",
  components: {
    divider,
  },
};
</script>

<style lang="scss" scoped>
.section5-container {
  width: 1150px;
  margin: 300px auto auto auto;
  //   background-color: red;
  //   height: 1000px;
  padding: 25px;
  display: flex;
  flex-direction: column;
}
.section5-header {
  display: flex;
  justify-content: space-between;
}
.anim-container {
  display: flex;
  justify-content: space-between;
}
.general-text {
  width: 50%;
  font-size: 3rem;
}
.secondary-text {
  width: 30%;
  font-size: 1.5rem;
  padding-top: 10px;
}
.go {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}
.big-animation-text {
  font-size: 3rem;
  font-weight: bolder;
}
</style>
