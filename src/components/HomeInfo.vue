<template>
  <div class="home-info padding-share" id="HomeInfo">
    <div class="container-share">
      <h3 class="title-en">information</h3>
      <h2 class="title-main-share">Thông tin về cuộc sống tài chính</h2>
      <transition-group name="expand" tag="div" class="home-info-wrap">
        <div
          class="item"
          v-for="(info, index) in infos"
          :key="index"
          :class="{ active: isMobile || activeIndex === index }"
          @click="toggleActive(index)"
        >
          <div class="content">
            <h4 class="title-medium-share">{{ info.title }}</h4>
            <p class="desc">{{ info.desc }}</p>
            <div class="green-bg"></div>
          </div>
          <div class="img-bg">
            <img :src="info.img" alt="info.alt" />
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, onBeforeUnmount } from "vue";

const infos = ref([
  {
    title: "Mở tài khoản ngân hàng/bưu điện",
    desc: "(Sở Di dân - Bộ Nội Chính)",
    img: new URL("@/assets/images/info_bg01.jpg", import.meta.url).href,
    alt: "Mở tài khoản ngân hàng/bưu điện",
  },
  {
    title: "Kê khai thuế",
    desc: "(Trang dịch vụ khai và nộp thuế – Bộ Tài chính)",
    img: new URL("@/assets/images/info_bg02.jpg", import.meta.url).href,
    alt: "Kê khai thuế",
  },
  {
    title: "Học tập ngôn ngữ",
    desc: "(Theo quy định của chính quyền địa phương từng khu vực)",
    img: new URL("@/assets/images/info_bg03.jpg", import.meta.url).href,
    alt: "Học tập ngôn ngữ",
  },
  {
    title: "Thông tin việc làm",
    desc: "(Mạng thông tin phát triễn bồi dưỡng năng Dân trú mớ)",
    img: new URL("@/assets/images/info_bg04.jpg", import.meta.url).href,
    alt: "Thông tin việc làm",
  },
  {
    title: "Thông tin cư trú",
    desc: "(Sở Di dân - Bộ Nội Chính)",
    img: new URL("@/assets/images/info_bg05.jpg", import.meta.url).href,
    alt: "Thông tin cư trú",
  },
  {
    title: "Dịch vụ bảo hiểm",
    desc: "(Đội ngũ chuyên viên tư vấn Việt Nam tại Cathay Life)",
    img: new URL("@/assets/images/info_bg06.jpg", import.meta.url).href,
    alt: "Dịch vụ bảo hiểm",
  },
]);

const activeIndex = ref(0);
const isMobile = ref(window.innerWidth < 768);

const toggleActive = (index) => {
  if (!isMobile.value) {
    activeIndex.value = index;
  }
};

// 監聽螢幕大小變化
const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style lang="scss">
@import "@/assets/styles/main.scss";

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

    @include media-down(lg) {
      height: 400px;
      margin-top: 40px;
    }

    @include media-down(l) {
      height: 280px;
      gap: 10px;
    }

    @include media-down(md) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      height: 100%;
      gap: 20px;
    }

    @include media-down(sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

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

        @include media-down(l) {
          border-radius: 40px;
          width: 565px;
        }

        @include media-down(md) {
          width: 100%;
          height: 250px;
          border-radius: 35px;
        }

        @include media-down(sm) {
          height: 200px;
          border-radius: 25px;
        }
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

          @include media-down(sm) {
            background: #00000064;
          }
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
        bottom: 0;
        padding: 70px 0;
        transition: all 0.5s ease-in-out;

        @include media-down(lg) {
          height: 80%;
        }

        @include media-down(l) {
          padding: 40px 0;
        }

        > h4 {
          color: var(--color-white);
          writing-mode: sideways-lr;
        }

        > p {
          display: none;
        }

        .green-bg {
          position: absolute;
          bottom: 3rem;
          background: linear-gradient(43deg, #177338 23.95%, #4ca164 76.05%);
          width: 100%;
          height: 120px;
          z-index: -1;
          opacity: 1;
          overflow: visible;
          transition: all 0.5s ease-in-out;

          @include media-down(l) {
            height: 80px;
            bottom: 1.5rem;
          }
        }
      }

      &.active .content {
        width: auto;
        height: auto;
        padding: 50px;
        bottom: 0;
        left: 0;
        top: auto;
        transform: none;
        flex-direction: column;
        align-items: flex-start;

        @include media-down(l) {
          padding: 30px;
        }

        @include media-down(md) {
          padding: 20px;
        }

        @include media-down(sm) {
          top: 0;
          justify-content: flex-start;
        }

        @include media-down(xs) {
          padding: 15px;
        }

        > h4 {
          writing-mode: inherit;
        }

        > p {
          display: block;
        }

        .green-bg {
          opacity: 0;
          overflow: hidden;
        }
      }
    }
  }
}

.expand-move {
  transition: transform 0.5s;
}
</style>
