<template>
  <div class="home-page">
    <AppHeader />
    <div class="kv">
      <div class="kv-banner">
        <div class="swiper kv-swiper">
          <div class="swiper-wrapper kv-swiper-wrapper">
            <div
              v-for="(item, index) in banner"
              :key="index"
              class="swiper-slide kv-swiper-slide"
            >
              <div class="container-share kv-container">
                <div class="en-title-svg animation__el fadeUp">
                  <img src="@/assets/images/en_title.png" alt="" />
                </div>
                <h1 class="title animation__el fadeUp delay__750">
                  {{ item.title }}
                </h1>
                <h2 class="subtitle animation__el fadeUp delay__1000">
                  {{ item.subtitle }}
                </h2>
              </div>
              <img
                :src="item.src"
                :alt="item.alt"
                class="desk-bg"
                :style="{ objectPosition: index === 0 ? '80% 0' : '50% 50%' }"
              />
            </div>
          </div>
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
              fill="rgba(255,255,255,0.5"
            />
            <!-- <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            /> -->
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
      <div class="scroll-down">
        <p class="text">scroll down</p>
        <div class="line"></div>
      </div>
    </div>
    <div class="home-intro">
      <div class="container-share">
        <div class="home-intro-wrap">
          <h2 class="title-main-share">
            Bạn gặp vấn đề gì tại Đài Loan mà chẳng biết hỏi ai ?
          </h2>
          <div class="content">
            <p v-for="(item, index) in content" :key="index" class="list">
              {{ item.list }}
            </p>
          </div>
        </div>
      </div>
      <div class="circular-a">
        <div class="circular"></div>
      </div>
      <div class="circular-b">
        <div class="circular"></div>
      </div>
    </div>
    <HomeAbout />
    <HomeInfo />
    <HomeSwiper />
    <HomeFAQ />
    <HomeEvent />
    <div class="copyright">© Cathay Life Insurance. All rights reserved.</div>
    <a href="#" class="page-top">
      <div class="img">
        <img src="@/assets/images/go_top.svg" alt="" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        class="arrow"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 19.3599C10.595 19.3599 10.2666 19.039 10.2666 18.6433L10.2666 5.08643L5.6518 9.59567C5.36541 9.87551 4.90116 9.87551 4.61477 9.59567C4.32838 9.31582 4.32838 8.86219 4.61477 8.58234L10.4814 2.84977C10.6189 2.71534 10.8055 2.63986 11 2.63986C11.1944 2.63986 11.381 2.71534 11.5185 2.84977L17.3852 8.58234C17.6716 8.86219 17.6716 9.31582 17.3852 9.59567C17.0988 9.87551 16.6345 9.87551 16.3481 9.59567L11.7333 5.08643L11.7333 18.6433C11.7333 19.039 11.405 19.3599 11 19.3599Z"
          fill="#333333"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, nextTick } from "vue";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "@/assets/plugins/autoAnimation.js";
import "@/assets/plugins/parallax.js";

// components
import AppHeader from "./components/AppHeader.vue";
import HomeAbout from "./components/HomeAbout.vue";
import HomeInfo from "./components/HomeInfo.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeFAQ from "./components/HomeFAQ.vue";
import HomeEvent from "./components/HomeEvent.vue";

const banner = [
  {
    src: new URL("@/assets/images/kv_banner01.jpg", import.meta.url).href,
    // mobile: new URL("@/assets/images/kv_banner01.jpg", import.meta.url).href,
    alt: "Cathay Life Nền tảng riêng dành cho người Việt Tại Đài Loan ",
    title: "Nền tảng riêng dành cho người Việt Tại Đài Loan ",
    subtitle: "Bắt đầu bảo vệ tài chính vững chắc ngay từ hôm nay",
  },
  {
    src: new URL("@/assets/images/kv_banner02.jpg", import.meta.url).href,
    // mobile: new URL("@/assets/images/kv_banner02_mobile.jpg", import.meta.url).href,
    alt: "Cathay Life Nền tảng riêng dành cho người Việt Tại Đài Loan ",
    title: "Nền tảng riêng dành cho người Việt Tại Đài Loan",
    subtitle: "Bắt đầu bảo vệ tài chính vững chắc ngay từ hôm nay",
  },
  {
    src: new URL("@/assets/images/kv_banner03.jpg", import.meta.url).href,
    // mobile: new URL("@/assets/images/kv_banner03_mobile.jpg", import.meta.url).href,
    alt: "Cathay Life Nền tảng riêng dành cho người Việt Tại Đài Loan ",
    title: "Nền tảng riêng dành cho người Việt Tại Đài Loan",
    subtitle: "Bắt đầu bảo vệ tài chính vững chắc ngay từ hôm nay",
  },
];

const content = [
  {
    list: "Không biết xử lý thế nào những vấn đề trong cuộc sống?",
  },
  {
    list: "Bất đồng về ngôn ngữ, lo sợ không hiểu sẽ dễ bị lừa?",
  },
  {
    list: "Muốn gửi tiền về, nhưng không biết cách chuyển?",
  },
  {
    list: "Cách kê khai và nộp thuế, sợ bị phạt nếu đóng thuế chậm?",
  },
  {
    list: "TThiếu niềm tin, không biết thông tin nào là chính xác?",
  },
  {
    list: "Không nắm rõ pháp luật, gặp vấn đề không biết cách bảo vệ quyền lợi của bản thân?",
  },
];

onMounted(async () => {
  await nextTick();

  const swiper = new Swiper(".kv-swiper", {
    modules: [Autoplay, EffectFade],
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init() {
        // 初始第一張 → 淡入
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.querySelectorAll(".fadeUp").forEach((el) => {
          requestAnimationFrame(() => {
            el.classList.add("in");
          });
        });
      },
      slideChangeTransitionStart() {
        // 舊 slide → 淡出
        const prevSlide = this.slides[this.previousIndex];
        prevSlide?.querySelectorAll(".fadeUp").forEach((el) => {
          el.classList.remove("in");
          el.classList.add("out");

          // 等動畫跑完後再清掉 out，恢復初始狀態
          el.addEventListener("animationend", function handler() {
            if (el.classList.contains("out")) {
              el.classList.remove("out");
            }
            el.removeEventListener("animationend", handler);
          });
        });

        // 新 slide → 預先清空狀態
        const activeSlide = this.slides[this.activeIndex];
        activeSlide?.querySelectorAll(".fadeUp").forEach((el) => {
          el.classList.remove("in", "out");
        });
      },

      slideChangeTransitionEnd() {
        // 新 slide → 淡入
        const activeSlide = this.slides[this.activeIndex];
        activeSlide?.querySelectorAll(".fadeUp").forEach((el) => {
          void el.offsetWidth; // 強制重繪，確保動畫能觸發
          el.classList.add("in");
        });
      },
    },
  });

  // 點擊回頂端
  jQuery(".page-top").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
  });

  // **監聽卷軸，超過 500px 顯示 page-top**
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 300) {
      jQuery(".page-top").fadeIn(300); // 淡入
    } else {
      jQuery(".page-top").fadeOut(300); // 淡出
    }
  });
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .kv {
    position: relative;
    width: 100%;
    height: 750px;
    overflow: hidden;

    @include media-down(tiny) {
      height: 600px;
    }

    .kv-banner {
      z-index: 2;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;

      .kv-swiper {
        width: 100%;
        height: 100%;

        .kv-swiper-wrapper {
          width: 100%;
          height: 100%;

          .kv-swiper-slide {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.5) 6.68%,
                rgba(0, 0, 0, 0) 73.78%
              );
              z-index: 2;

              @include media-down(xxl) {
                background: #00000050;
              }
            }

            .kv-container {
              @include poa-center;
              z-index: 5;
              width: 90%;

              .en-title-svg {
                width: 100%;
                height: 100%;
                max-width: 755px;

                @include media-down(xxl) {
                  margin: auto;
                }

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }

              .title {
                @include fz(46);
                color: var(--color-white);
                font-style: normal;
                font-weight: 700;
                line-height: 52px;
                letter-spacing: 2px;
                padding: 42px 0 20px 0;
                width: 60%;

                @include media-down(xxl) {
                  @include fz(40);
                  line-height: 48px;
                  text-align: center;
                  width: 100%;
                  padding: 20px 0;
                }

                @include media-down(lg) {
                  @include fz(36);
                  line-height: 40px;
                }

                @include media-down(sm) {
                  @include fz(30);
                  line-height: 34px;
                  padding: 10px 0;
                }
              }

              .subtitle {
                color: var(--color-white);
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2px;
                width: 60%;

                @include media-down(xxl) {
                  text-align: center;
                  width: 100%;
                }

                @include media-down(lg) {
                  @include fz(22);
                }
              }
            }

            // .desk-bg {
            //   @include media-down(sm) {
            //     display: none;
            //   }
            // }

            // .mobile-bg {
            //   @include media-down(sm) {
            //     display: block;
            //   }
            // }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: 80% 0;
            }
          }
        }
      }
    }

    .scroll-down {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      z-index: 99;
      bottom: 4rem;
      @include d-flex(center, center, column);
      gap: 15px;
      opacity: 0;

      @include media-between(xl, jumbo) {
        opacity: 1;
      }

      @include media-down(xs) {
        opacity: 1;
        bottom: 7rem;
      }

      @include media-down(tiny) {
        opacity: 0;
      }

      p {
        @include en-fontF;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--color-white);
      }

      .line {
        position: relative;
        width: 1px;
        height: 40px;
        background: var(--color-white);
        animation: line-animation 2s ease-in-out 0s infinite normal;
      }

      @keyframes line-animation {
        0% {
          bottom: 15px;
          opacity: 0;
        }
        50% {
          bottom: 5px;
          opacity: 1;
        }
        100% {
          bottom: -5px;
          opacity: 0;
        }
      }
    }
  }

  // Home Intro
  .home-intro {
    width: 100%;
    height: 100%;
    padding: 100px 0 20px 0;
    position: relative;

    @include media-down(lg) {
      padding: 80px 0 10px 0;
    }

    @include media-down(sm) {
      padding: 50px 0 10px 0;
    }

    .container-share {
      @include d-flex(center, center, column);
    }

    &-wrap {
      @include d-flex(center, center, column);
      max-width: 845px;
      padding: 100px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 31px 0 rgba(23, 115, 56, 0.2);
      text-align: center;

      @include media-down(xl) {
        padding: 80px;
      }

      @include media-down(md) {
        padding: 50px;
      }
      @include media-down(md) {
        padding: 30px;
      }

      .content {
        padding-top: 40px;

        @include media-down(sm) {
          padding-top: 25px;
        }

        .list {
          font-weight: 400;
          font-size: 18px;
          color: var(--color-grey);
        }

        .list + .list {
          padding-top: 15px;
        }
      }
    }

    .circular-a {
      width: 320px;
      height: 320px;
      z-index: -1;
      left: 20%;
      top: 100px;
      transform: translateY(-100);

      @include media-down(jumbo) {
        width: 260px;
        height: 260px;
      }

      @include media-down(xxl) {
        left: 10%;
        top: 0;
      }

      @include media-down(sm) {
        width: 200px;
        height: 220px;
      }
    }

    .circular-b {
      width: 200px;
      height: 200px;
      z-index: 2;
      right: 10%;
      bottom: 30px;

      .circular {
        transform: translateX(-50%) rotate(-89.132deg);
      }

      @include media-down(jumbo) {
        width: 160px;
        height: 160px;
        right: 4%;
      }

      @include media-down(xxl) {
        right: 0rem;
      }

      @include media-down(xl) {
        right: -7rem;
        bottom: 0;
        z-index: -1;
      }
    }
  }

  // copyright
  .copyright {
    @include d-flex(center, center);
    text-align: center;
    color: var(--color-white);
    background: var(--color-main);
    border-radius: 50px 50px 0 0;
    padding: 30px;
    font-weight: 600;

    @include media-down(sm) {
      font-size: 14px;
    }
  }

  // go top
  .page-top {
    display: none;
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 8rem;
    right: 3rem;
    z-index: 99;

    @include media-down(l) {
      width: 70px;
      height: 70px;
      right: 1.5rem;
    }

    .img {
      animation: spin 10s linear infinite;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .arrow {
      @include poa-center;

      @include media-down(l) {
        width: 20px;
        height: 20px;
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
