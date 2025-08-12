<template>
  <div class="home-page">
    <div class="vk">
      <!-- <div class="container-share vk-container">
        <div class="en-title-svg animation__el fadeUp">
          <img src="@/assets/images/en-title.svg" alt="" />
        </div>
        <h1 class="title animation__el fadeUp delay__750">
          國泰人壽專為<br />在台越籍設立的平台
        </h1>
        <h2 class="subtitle animation__el fadeUp delay__1000">
          讓財富更有保障
        </h2>
      </div> -->
      <div class="vk-banner">
        <div class="swiper vk-swiper">
          <div class="swiper-wrapper vk-swiper-wrapper">
            <div v-for="(item, index) in banner" :key="index" class="swiper-slide vk-swiper-slide">
              <div class="container-share vk-container">
                <div class="en-title-svg animation__el fadeUp">
                  <img src="@/assets/images/en-title.svg" alt="" />
                </div>
                <h1 class="title animation__el fadeUp delay__750">
                  {{ item.title }}
                </h1>
                <h2 class="subtitle animation__el fadeUp delay__1000">
                  {{ item.subtitle }}
                </h2>
              </div>
              <img :src="item.src" :alt="item.alt" />
            </div>
          </div>
        </div>
      </div>
      <!--Waves start-->
      <div class="waves-wrapper">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.5" />
            <!-- <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            /> -->
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
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

const banner = [
  {
    src: new URL("@/assets/images/kv_banner.jpg", import.meta.url).href,
    alt: "Banner1",
    title: "國泰人壽專為在台越籍設立的平台",
    subtitle: "讓財富更有保障",
  },
  {
    src: new URL("@/assets/images/kv_banner02.jpg", import.meta.url).href,
    alt: "Banner2",
    title: "Cathay Life xây dựng riêng một nền tảng dành cho người Việt Nam đang sinh sống tại Đài Loan ",
    subtitle: "Khởi đầu hành trình bảo vệ tài chính vững chắc cho bạn, bắt đầu từ đây.",
  },
  {
    src: new URL("@/assets/images/kv_banner03.jpg", import.meta.url).href,
    alt: "Banner3",
    title: "國泰人壽專為在台越籍設立的平台",
    subtitle: "讓財富更有保障",
  },
];

onMounted(async () => {
  await nextTick();

  new Swiper(".vk-swiper", {
    modules: [Autoplay, EffectFade],
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-page {
  width: 100%;
  height: 100%;

  .vk {
    position: relative;
    width: 100%;
    height: 750px;
    overflow: hidden;

    @include media-down(tiny) {
      height: 600px;
    }
  }

  .vk-banner {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .vk-swiper {
      width: 100%;
      height: 100%;

      .vk-swiper-wrapper {
        width: 100%;
        height: 100%;

        .vk-swiper-slide {
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
            background: linear-gradient(90deg,
                rgba(0, 0, 0, 0.5) 6.68%,
                rgba(0, 0, 0, 0) 73.78%);
            z-index: 2;

            @include media-down(xxl) {
              background: #00000050;
            }
          }

          .vk-container {
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
              @include en-fontF;
              @include fz(46);
              color: var(--color-white);
              font-style: normal;
              font-weight: 700;
              line-height: 58px;
              letter-spacing: 2px;
              margin: 43px 0 20px 0;
              width: 60%;

              @include media-down(xxl) {
                @include fz(40);
                line-height: 48px;
                text-align: center;
                width: 100%;
              }

              @include media-down(lg) {
                @include fz(36);
                line-height: 40px;
              }

              @include media-down(sm) {
                @include fz(30);
                line-height: 34px;
                margin: 20px 0;
              }
            }

            .subtitle {
              @include en-fontF;
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
}
</style>
