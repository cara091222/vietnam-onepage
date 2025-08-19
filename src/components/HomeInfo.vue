<template>
  <div class="home-info padding-share">
    <div class="container-share">
      <h3 class="title-en">information</h3>
      <h2 class="title-main-share">Thông tin về cuộc sống tài chính</h2>
      <div class="home-info-wrap">
        <transition-group name="expand" tag="div" class="home-info-wrap">
          <div
            class="item"
            v-for="(info, index) in infos"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="toggleActive(index)"
          >
            <div class="content">
              <h4 class="title-medium-share">{{ info.title }}</h4>
              <p class="desc">{{ info.desc }}</p>
            </div>
            <div class="img-bg">
              <img :src="info.img" alt="" />
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";

const infos = ref([
  {
    title: "Mở tài khoản ngân hàng/bưu điện",
    desc: "(Sở Di dân - Bộ Nội Chính)",
    img: new URL("@/assets/images/home_info_01.png", import.meta.url).href,
  },
  {
    title: "Kê khai thuế",
    desc: "(Trang dịch vụ khai và nộp thuế – Bộ Tài chính)",
    img: new URL("@/assets/images/home_info_02.png", import.meta.url).href,
  },
]);

const activeIndex = ref(0); // 預設展開第一個

const toggleActive = (index) => {
  if (activeIndex.value !== index) {
    activeIndex.value = index;
  }
};
</script>
<style lang="scss">
.home-info {
  .container-share {
    @include d-flex(center, center, column);
  }

  .title-main-share {
    text-align: center;
  }

  &-wrap {
    @include d-flex(flex-start, center);
    gap: 15px;
    margin-top: 80px;
    width: 100%;
    height: 500px;

    .item {
      position: relative;
      overflow: hidden;
      border-radius: 100px;
      width: 88px;
      height: 100%;
      transition: all 0.5s ease-in-out;

      &.active {
        width: 765px;
        height: 100%;
        border-radius: 60px;
      }

      .img-bg {
        width: 100%;
        height: 100%;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 52.8%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .content {
        position: absolute;
        @include d-flex(center, flex-end);
        z-index: 2;
        height: 90%;
        width: 100%;
        color: var(--color-white);
        bottom: 3rem;
        padding: 40px 0 20px 0;
        transition: all 0.5s ease-in-out;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 120px;
          bottom: 0;
          background: linear-gradient(43deg, #177338 23.95%, #4ca164 76.05%);
          z-index: -1;
          opacity: 1;
          overflow: visible;
        }

        > h4 {
          color: var(--color-white);
          writing-mode: sideways-lr;
        }

        > p {
          display: none;
        }
      }

      &.active .content {
        width: 100%;
        height: auto;
        padding: 50px;
        bottom: 0;
        left: 0;
        top: auto;
        transform: none;
        flex-direction: column;
        align-items: flex-start;

        &::before {
          opacity: 0;
          overflow: hidden;
        }

        > h4 {
          writing-mode: inherit;
        }

        > p {
          display: block;
        }
      }
    }
  }
}

.expand-move {
  transition: transform 0.5s;
}
</style>
