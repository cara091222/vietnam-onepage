<template>
  <div class="app-header">
    <div class="app-container">
      <div class="container-share">
        <div class="app-logo">
          <img src="@/assets/images/logo.svg" alt="" />
        </div>
        <nav class="app-nav">
          <ul class="nav-wrap">
            <li class="main-item">
              <a class="main-link" data-hash="#">về chúng tôi</a>
            </li>
            <li class="main-item">
              <a class="main-link" data-hash="#">Dịch vụ</a>
            </li>
            <li class="main-item">
              <a class="main-link" data-hash="#">tư vấn</a>
            </li>
            <li class="main-item">
              <a class="main-link" data-hash="#">đặt vấn đề</a>
            </li>
          </ul>
          <div class="contact-btn">
            <a href="" class="btn-main">Liên hệ</a>
          </div>
          <div class="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import jQuery from "jquery";

export default {
  mounted() {
    const $ = jQuery;
    // 主選單點擊時，只加在 main-link 上
    jQuery(".main-link").on("click", function (e) {
      jQuery(".main-link").removeClass("active");
      jQuery(this).addClass("active");
    });

    // 點擊漢堡選單
    jQuery(".nav-hamburger").on("click", function (e) {
      e.stopPropagation();
      jQuery(this).toggleClass("active");
      jQuery(".app-container").toggleClass("menu-show"); // 控制 nav-wrap 出現
    });

    // 點擊 page-top 回到頁面頂端
    jQuery(".page-top").on("click", function (e) {
      e.preventDefault(); // 阻止 <a href="#"> 的預設跳轉行為
      jQuery("html, body").animate({ scrollTop: 0 }, 600);
    });

  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app-header {
  position: fixed;
  z-index: 999;
  width: 100%;
  max-height: 80px;
  transition: all 0.5s ease;

  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    background: var(--color-white);
    box-shadow: 0 0 31px 0 rgba(23, 115, 56, 0.2);

    @include media-down(sm) {
      padding: 15px 0;
    }
  }

  .container-share {
    @include d-flex(space-between, center);
  }

  .app-logo {
    width: 150px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      @include d-flex(center, center, column);
    }

    @include media-down(sm) {
      width: 120px;
    }
  }

  .app-container.menu-show .nav-wrap {
    transform: translateX(0);
  }

  .app-nav {
    @include d-flex(center, center);

    .nav-wrap {
      @include d-flex(center, center);
      gap: 25px;

      @include media-down(lg) {
        gap: 15px;
      }

      @include media-down(md) {
        flex-direction: column;
        justify-content: left;
        position: absolute;
        top: -20px;
        right: 0;
        padding-top: 78px;
        width: 50%;
        height: 100vh;
        background-color: #ffffff;
        transform: translateX(100%);
        transition: transform 0.3s ease;
      }

      .main-link {
        font-weight: 700;
        padding: 10px 0;
        position: relative;

        @include media-down(md) {
          padding: 5px 0;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--color-main);
          transition: all 0.3s ease-in-out;
        }

        &:hover::after {
          width: 100%;
          background: var(--color-main);
        }

        &.active::after {
          width: 100%;
        }
      }
    }

    .contact-btn {
      margin-left: 25px;
      box-sizing: border-box;


      @include media-down(lg) {
        gap: 15px;
      }

      @include media-down(md) {
        position: fixed;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 50px;
        margin-left: 0;

        .btn-main {
          @include d-flex(center, center);
          width: 90%;
          height: 100%;
          margin: auto;
          // border-radius: 0;
          padding: 0;
        }
      }
    }

    // 漢堡選單
    .nav-hamburger {
      display: none;

      @include media-down(md) {
        display: block;
        transition: all 0.5s ease-in-out;
        position: relative;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        cursor: pointer;
        top: 0rem;

        > span {
          width: 20px;
          height: 3px;
          position: absolute;
          background: var(--color-main);
          right: 0;
          margin: auto;
          left: 0;
          border-radius: 50px;
          transition: all 0.5s cubic-bezier(0.5, 0, 0.1, 1.2);
          top: calc(50% - ((5.5px)) + -1px);
        }

        > span:nth-child(1) {
          top: calc(50% - ((5.5px)) + -3px);
        }

        > span:nth-child(2) {
          top: calc(50% - ((5.5px)) + 3px);
        }

        > span:nth-child(3) {
          top: calc(50% - ((5.5px)) + 9px);
        }
      }

      &.active span:nth-child(1) {
        transform: rotate(45deg);
        top: 9px;
        background: var(--color-black);
      }

      &.active span:nth-child(2) {
        opacity: 0;
      }

      &.active span:nth-child(3) {
        transform: rotate(-45deg);
        top: 9px;
        background: var(--color-black);
      }
    }
  }
}
</style>
