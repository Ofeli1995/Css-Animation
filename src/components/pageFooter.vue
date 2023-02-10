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
              <img src="@/assets/check.svg" alt="check" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="databest-icon">
      <div class="databest-icon-container">
        <div class="databest-title">
          Databest - powerful AI expert on processing marketing data
        </div>
        <div class="icon">
          <img src="@/assets/Eaa.svg" alt="logo" style="width: 88px" />
        </div>
        <div class="databest-title">Level up your cases with tons of data</div>
      </div>
    </div>
    <div class="contacts">
      <div class="contacts-container">
        <div class="nav">
          <div class="nav-title">Contacts</div>
          <div class="nav-content">
            <div>UA: +3 8096 272 2100</div>
            <div>mail@halo-lab.com</div>
            <div>www.halo-lab.com</div>
            <div>Ukraine, Odessa</div>
          </div>
        </div>
        <div class="footer-block">
          <div class="social-media">
            <div class="social-media-btn">
              <img src="@/assets/social-icons/fb.svg" alt="fb" />
            </div>
            <div class="social-media-btn">
              <img src="@/assets/social-icons/be.svg" alt="be" />
            </div>
            <div class="social-media-btn">
              <img src="@/assets/social-icons/in.svg" alt="in" />
            </div>
            <div class="social-media-btn">
              <img src="@/assets/social-icons/inst.svg" alt="inst" />
            </div>
            <div class="social-media-btn">
              <img src="@/assets/social-icons/ball.svg" alt="ball" />
            </div>
          </div>
          <div class="sign-at">
            <div>
              <img
                src="@/assets/footerlogo.svg"
                alt="logo"
                style="width: 34px"
              />
            </div>
            <div class="signed">
              <div>2022 halo lab</div>
              <div>© All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer",
};
</script>

<style lang="scss" scoped>
::placeholder {
  padding-left: 15px;
  color: #bbbcbf;
}
.footer-container {
  width: 1400px;
  max-height: 440px;
  height: 100%;
  margin: 150px auto auto auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.map-subscribe {
  height: 100%;
  border-right: 1px dashed black;
}
.databest-icon {
  height: 100%;
}
.contacts {
  height: 100%;
  border-left: 1px dashed black;
}
.map-subscribe-container,
.databest-icon-container,
.contacts-container {
  padding: 25px 40px;
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
.map-content div,
.nav-content div {
  font-size: 22px;
  pointer-events: auto;
  cursor: pointer;
}
.map-title,
.newsletter-title,
.nav-title {
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
.databest-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.databest-title {
  font-size: 22px;
}
.nav-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.contacts-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.social-media {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.social-media-btn {
  height: 50px;
  width: 50px;
  border-radius: 10px;
  border: 1px solid #bbbcbf;
  margin-left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
}
.sign-at {
  margin-top: 40px;
  display: flex;
}
.signed {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}
</style>
