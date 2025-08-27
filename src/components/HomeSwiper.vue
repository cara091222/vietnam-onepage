<template>
  <div class="home-consultant" id="HomeSwiper">
    <div class="home-consultant-container">
      <div class="container-share">
        <h3 class="title-en">Consultant</h3>
        <h2 class="title-main-share">
          Về đội ngũ chuyên viên kinh doanh người Việt
        </h2>
        <p class="desc">
          Chúng tôi thấu hiểu nhu cầu của cộng đồng người Việt tại Đài Loan, và
          luôn sẵn sàng mang đến các sản phẩm bảo hiểm đa dạng cùng dịch vụ tận
          tâm.Bạn có thắc mắc về bảo hiểm y tế, kế hoạch nghỉ hưu, quản lý tài
          sản hoặc vấn đề trong cuộc sống, hãy liên hệ hoặc đặt lịch hẹn với
          chuyên viên tư vấn của chúng tôi. Chúng tôi luôn lắng nghe và sẵn sàng
          giải đáp, hỗ trợ bạn an tâm phát triển ổn định, vững chắc hơn tại Đài
          Loan!
        </p>
      </div>
      <div class="consultant-swiper-wrap">
        <div class="swiper consultant-swiper">
          <div class="swiper-wrapper consultant-swiper-wrapper">
            <div
              v-for="(slide, index) in swiper"
              :key="index"
              class="swiper-slide consultant-slide"
            >
              <div class="consultant-img">
                <img :src="slide.img" alt="" />
                <div class="name">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="112"
                    viewBox="0 0 380 112"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M380 0C380 0 183.584 98.0328 0 0V130H380V0Z"
                      fill="#177338"
                    />
                  </svg>
                  <h3 class="title-small-share">{{ slide.name }}</h3>
                </div>
              </div>
              <div class="content">
                <div class="year-wrap">
                  <div class="year-item">
                    <p class="title">ở Đài Loan</p>
                    <p class="year">{{ slide.residence }}</p>
                    <p class="unit">năm</p>
                  </div>
                  <div class="year-item">
                    <p class="title">ở Đài Loan</p>
                    <p class="year">{{ slide.seniority }}</p>
                    <p class="unit">năm</p>
                  </div>
                </div>
                <p class="desc">{{ slide.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="btn-wrap">
        <a
          href="https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=c9a559d2-7aab-4f13-a6ed-e7e9c52aec87&redirect_uri=https%3A%2F%2Fforms.office.com%2Flanding&state=eyJ2ZXJzaW9uIjoxLCJkYXRhIjp7IklkZW50aXR5UHJvdmlkZXIiOiJBUVY4SEg1ZHBxYXdmTUcyVkpzU0V4T3pHbkNLRWdKd3pjWG44MVk5T3RNbDVRYkxuWXV6VWs5NUpGZkIzMVZzZDdjQXYyQVA5azRLcXh4LU9seFVRSVEiLCIucmVkaXJlY3QiOiJodHRwczovL2Zvcm1zLm9mZmljZS5jb20vUGFnZXMvRGVzaWduUGFnZVYyLmFzcHg_c3VicGFnZT1kZXNpZ24mdG9rZW49YmZjNTJiOWE3NmM0NDA2MWI4NGYyNWRjMmZjNzdkMGMmaWQ9MVMwOG1oT2c4MEstdWU2VmJsSWlfUlhkY011bklZZERrZm8tNnNpN1BxSlVOMGMxTkVsWU16RlpTbGhITnpCS1UxUXhNRVpCT0ZWT1NDNHUiLCIueHNyZiI6IkFRY29kdHRmalZEVS10NVBsY2dZY1JucHM4a1NLWG03cUlSOFJaU01acHk4MjB6M09UMEsxc3F1WTJZTUF4SEZDTl9lLVBPWUJ5WklWXzl4ZnFLSGJRY0pyTFh5SjlsbDMwOGx0c1NBRmkwZmhKTVdKM21ZaDdBWTNubUF4MU9hLVEiLCJPcGVuSWRDb25uZWN0LkNvZGUuUmVkaXJlY3RVcmkiOiJBY2hKLXRPNFEwdk5Od3pCM3ZtbzhXZUctQUJCU1Ruc2FJZVBHaEpQVXlrQ0UyQmI0V0h1NEVrSy1MYVRVSS1hUlc3clNrNlJhUTFVZFpfMUxCTXVhQTR3WDl2X296eWs2ajYxVXNhS1J1M3VhQ1NxbGlGbHhkWHFzNU51U0tIZmZBIn19&response_type=code&scope=openid%20profile&response_mode=form_post&nonce=638917102964437588.MTFiY2NiYTQtNGMwZi00OTYxLTlmNWItYjZlNmE3NTc3MDI2N2RkZGVhNGYtNDFhNS00MDY3LWJmNTItMzIwM2YzN2RkNWQ0&msafed=0&x-client-SKU=ID_NET9_0&x-client-ver=8.9.0.0"
          class="btn-main"
        >
          <div class="btn">Hẹn lịch tư vấn</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle
              cx="15"
              cy="15"
              r="14.25"
              transform="matrix(-1 0 0 1 30 0)"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M13.3929 10.7144L17.8572 15.1786L13.3929 19.6429"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
    <!--Waves start-->
    <div class="waves-wrapper">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(219, 239, 230, 0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(219, 239, 230, 0.7)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(53, 147, 57, 0.1)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#ffffff" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
    <div class="circular-a">
      <div class="circular"></div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, nextTick } from "vue";
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "@/assets/plugins/autoAnimation.js";
import "@/assets/plugins/parallax.js";

const swiper = [
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Đặng Thị Thu Huyên",
    residence: "20",
    seniority: "7.5",
    desc: "Kiến thức chuyên môn mang đến cho bạn sự an tâm, dịch vụ tận tâm giúp bạn yên lòng, và sự thấu hiểu khiến bạn tin cậy.",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Trương Hào Minh",
    residence: "12",
    seniority: "2.5",
    desc: "Một tư vấn viên bảo hiểm thân thiện, nhiệt tình, luôn tận tâm tư vấn bảo hiểm phù hợp cho mỗi khách hàng ",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Trương Hào Minh",
    residence: "12",
    seniority: "5",
    desc: "Tôi đến từ Bảo Hiểm Nhân Thọ Catthay. Tôi mang đến cho bạn một sự phục vụ tận tâm, một quy hoạch bảo hiểm chuyên nghiệp để bạn có thể an tâm lựa chọn.",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Tạ Hà Giang",
    residence: "20",
    seniority: "2.5",
    desc: "Một tư vấn viên bảo hiểm thân thiện, nhiệt tình, luôn tận tâm tư vấn bảo hiểm phù hợp cho mỗi khách hàng ",
  },
];

onMounted(async () => {
  await nextTick();

  const consultantSwiper = new Swiper(".consultant-swiper", {
    modules: [Autoplay, EffectFade, Navigation],
    centeredSlidesBounds: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        // 700px 以下
        slidesPerView: 1,
        spaceBetween: 40,
      },
      700: {
        // 700~1024
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1025: {
        // 768~1279
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1380: {
        // 1380~1920 以上
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-consultant {
  background: #fafafa;
  position: relative;

  &-container {
    padding: 120px 0 150px 0;

    @include media-down(lg) {
      padding: 80px 0 120px 0;
    }

    @include media-down(sm) {
      padding: 50px 0 90px 0;
    }
  }

  .container-share {
    @include d-flex(center, center, column);
    text-align: center;

    .desc {
      max-width: 905px;
      padding-top: 30px;
    }
  }

  .consultant-swiper-wrap {
    z-index: 3;
    height: 100%;
    padding: 80px 100px 0 100px;
    position: relative;

    @include media-down(xl) {
      padding: 60px 80px 0 80px;
    }

    @include media-down(sm) {
      padding: 40px 40px 0 40px;
    }

    .consultant-swiper {
      max-width: 1670px;
    }

    .consultant-swiper-wrapper {
      width: 100%;
      height: 100%;
      // overflow: hidden;

      .consultant-slide {
        height: 100%;

        .consultant-img {
          width: 100%;
          height: 420px;
          border-radius: 50px;
          overflow: hidden;
          position: relative;

          @include media-down(sm) {
            height: 360px;
          }

          .name {
            @include d-flex(center, center, column);
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            z-index: 2;

            .title-small-share {
              position: absolute;
              bottom: 0;
              z-index: 3;
              color: var(--color-white);
              padding: 20px;
              text-align: center;
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .content {
          padding: 30px;

          @include media-down(sm) {
            padding: 20px;
          }

          .year-wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .year-item {
              @include d-flex(center, center, column);

              .title {
                color: var(--color-black);
                text-align: center;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 22px;
                letter-spacing: 1px;
              }

              .year {
                color: var(--color-main);
                @include en-fontF;
                font-size: 42px;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                letter-spacing: 1px;
                text-transform: uppercase;
              }

              .unit {
                line-height: 8px;
                color: var(--color-black);
              }

              &:nth-child(2) {
                border-left: 4px solid var(--color-main);
              }
            }
          }

          .desc {
            padding-top: 20px;
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 38%; // 置中
      transform: translateY(-50%);
      z-index: 10;
      width: 50px;
      height: 50px;
      border: 1px solid var(--color-main);
      border-radius: 100rem;

      &::after {
        color: var(--color-main);
        font-size: 18px;
        font-weight: 600;
      }

      &:hover {
        background-color: var(--color-main);
        &::after {
          color: #fff;
        }
      }
    }

    .swiper-button-prev {
      left: 20px;
    }
    .swiper-button-next {
      right: 20px;
    }
  }

  .btn-wrap {
    position: relative;
    @include d-flex(center, center);
    max-width: auto;
    transition: all 0.5s ease;
    z-index: 3;

    .btn-main {
      @include d-flex(center, center);
      gap: 20px;
      padding: 15px 20px 15px 25px;
      font-size: 24px;

      &:hover {
        color: var(--color-main);
      }
    }
  }

  /* Waves */
  .waves-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
  }

  .circular-a {
    width: 280px;
    height: 280px;
    z-index: 1;
    left: -1rem;
    top: -700px;
    // transform: translateY(-100);

    @include media-down(jumbo) {
      width: 220px;
      height: 220px;
    }

    @include media-down(xxl) {
      top: -500px;
    }

    @include media-down(l) {
      width: 180px;
      height: 180px;
      left: -0.5rem;
    }

    @include media-down(sm) {
      // width: 200px;
      // height: 220px;
    }
  }
}
</style>
