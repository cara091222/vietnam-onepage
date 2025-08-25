<template>
  <div class="home-consultant">
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
        <a href="" class="btn-main">
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
    seniority: "7.5 ",
    desc: "Kiến thức chuyên môn mang đến cho bạn sự an tâm, dịch vụ tận tâm giúp bạn yên lòng, và sự thấu hiểu khiến bạn tin cậy.",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Trương Hào Minh",
    residence: "12",
    seniority: "2.5 ",
    desc: "Một tư vấn viên bảo hiểm thân thiện, nhiệt tình, luôn tận tâm tư vấn bảo hiểm phù hợp cho mỗi khách hàng ",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Trương Hào Minh",
    residence: "12",
    seniority: "2.5 ",
    desc: "Tôi đến từ Bảo Hiểm Nhân Thọ Catthay. Tôi mang đến cho bạn một sự phục vụ tận tâm, một quy hoạch bảo hiểm chuyên nghiệp để bạn có thể an tâm lựa chọn.",
  },
  {
    img: new URL("@/assets/images/consultant_01.png", import.meta.url).href,
    name: "Tạ Hà Giang",
    residence: "20",
    seniority: "2.5 ",
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
  &-container {
    padding: 120px 0 150px 0;

    @include media-down(lg) {
      padding: 80px 0;
    }

    @include media-down(sm) {
      padding: 50px 0;
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
    @include d-flex(center, center);
    max-width: auto;
    transition: all 0.5s ease;

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
}
</style>
