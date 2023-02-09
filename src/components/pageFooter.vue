<template>
  <div class="footer-container">
    <div class="map-subscribe">
      <div class="map-subscribe-container">
        <div class="map">
          <div class="map-title">Website map</div>
          <div class="map-content">
            <div>Products</div>
            <div>Support</div>
            <div>Resources</div>
            <div>Company</div>
          </div>
        </div>
        <div class="newsletter">
          <div class="newsletter-title">Newsletter our</div>
          <div class="newsletter-content">
            <input
              type="text"
              class="newsletter-input"
              placeholder="Email Adress"
            />
            <div class="form-submit">
              <img src="@/assets/check.svg" alt="check" width="18" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="databest-icon">
      <div></div>
    </div>
    <div class="contacts">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/archia");
::placeholder {
  padding-left: 15px;
  color: #bbbcbf;
}
.footer-container {
  width: 1488px;
  max-height: 440px;
  height: 100%;
  margin: 150px auto auto auto;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.map-subscribe {
  width: 33.3%;
  // background-color: red;
  height: 100%;
  border-right: 1px dashed black;
}
.databest-icon {
  // background-color: green;
  width: 33.3%;
  height: 100%;
}
.contacts {
  width: 33.3%;
  // background-color: blue;
  height: 100%;
  border-left: 1px dashed black;
}
.map-subscribe-container {
  padding: 25px;
  justify-content: space-between;
  height: 380px;
}
.map-subscribe-container,
.map,
.newsletter {
  display: flex;
  flex-direction: column;
}
.map-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 300px;
}
.map-content div {
  font-size: 17px;
  pointer-events: auto;
  cursor: pointer;
}
.map-title,
.newsletter-title {
  color: #17171b;
  font-size: 2rem;
  margin-bottom: 3rem;
  font-family: "Archia", sans-serif;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.newsletter-input {
  height: 50px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #aec2c0;
  background: inherit;
}
.form-submit {
  height: 50px;
  width: 50px;
  background: linear-gradient(30.12deg, #e8aea0 14.52%, #f06950 53.5%);
  border-radius: 10px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.newsletter-content {
  display: flex;
}
</style>
