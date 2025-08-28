<template>
  <div class="app-header">
    <div class="app-container">
      <div class="container-share">
        <div class="app-logo">
          <img src="@/assets/images/logo_en.png" alt="" />
        </div>
        <nav class="app-nav">
          <ul class="nav-wrap">
            <li class="main-item">
              <a class="main-link" href="#HomeAbout">về chúng tôi</a>
            </li>
            <li class="main-item">
              <a class="main-link" href="#HomeInfo">Cuộc sống tài chính</a>
            </li>
            <li class="main-item">
              <a class="main-link" href="#HomeSwiper">Chuyên viên tư vấn</a>
            </li>
            <li class="main-item">
              <a class="main-link" href="#HomeFAQ">FAQ</a>
            </li>
            <li class="main-item">
              <a class="main-link" href="#HomeEvent">Hoạt động</a>
            </li>
          </ul>
          <div class="contact-btn">
            <a
              href="https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=c9a559d2-7aab-4f13-a6ed-e7e9c52aec87&redirect_uri=https%3A%2F%2Fforms.office.com%2Flanding&state=eyJ2ZXJzaW9uIjoxLCJkYXRhIjp7IklkZW50aXR5UHJvdmlkZXIiOiJBUVY4SEg1ZHBxYXdmTUcyVkpzU0V4T3pHbkNLRWdKd3pjWG44MVk5T3RNbDVRYkxuWXV6VWs5NUpGZkIzMVZzZDdjQXYyQVA5azRLcXh4LU9seFVRSVEiLCIucmVkaXJlY3QiOiJodHRwczovL2Zvcm1zLm9mZmljZS5jb20vUGFnZXMvRGVzaWduUGFnZVYyLmFzcHg_c3VicGFnZT1kZXNpZ24mdG9rZW49YmZjNTJiOWE3NmM0NDA2MWI4NGYyNWRjMmZjNzdkMGMmaWQ9MVMwOG1oT2c4MEstdWU2VmJsSWlfUlhkY011bklZZERrZm8tNnNpN1BxSlVOMGMxTkVsWU16RlpTbGhITnpCS1UxUXhNRVpCT0ZWT1NDNHUiLCIueHNyZiI6IkFRY29kdHRmalZEVS10NVBsY2dZY1JucHM4a1NLWG03cUlSOFJaU01acHk4MjB6M09UMEsxc3F1WTJZTUF4SEZDTl9lLVBPWUJ5WklWXzl4ZnFLSGJRY0pyTFh5SjlsbDMwOGx0c1NBRmkwZmhKTVdKM21ZaDdBWTNubUF4MU9hLVEiLCJPcGVuSWRDb25uZWN0LkNvZGUuUmVkaXJlY3RVcmkiOiJBY2hKLXRPNFEwdk5Od3pCM3ZtbzhXZUctQUJCU1Ruc2FJZVBHaEpQVXlrQ0UyQmI0V0h1NEVrSy1MYVRVSS1hUlc3clNrNlJhUTFVZFpfMUxCTXVhQTR3WDl2X296eWs2ajYxVXNhS1J1M3VhQ1NxbGlGbHhkWHFzNU51U0tIZmZBIn19&response_type=code&scope=openid%20profile&response_mode=form_post&nonce=638917102964437588.MTFiY2NiYTQtNGMwZi00OTYxLTlmNWItYjZlNmE3NTc3MDI2N2RkZGVhNGYtNDFhNS00MDY3LWJmNTItMzIwM2YzN2RkNWQ0&msafed=0&x-client-SKU=ID_NET9_0&x-client-ver=8.9.0.0"
              class="btn-main"
              >Liên hệ</a
            >
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

    // 單頁錨點
    if (window.location.pathname === "/") {
      jQuery(".main-link[href^='#']").on("click", function (e) {
        const target = jQuery(this.getAttribute("href"));
        if (target.length) {
          e.preventDefault();
          jQuery("html, body").animate(
            { scrollTop: target.offset().top },
            800,
            "swing"
          );
        }
      });
    }
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

    // @include media-down(sm) {
    //   width: 120px;
    // }
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
        gap: 0;
      }

      @include media-down(lg) {
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

      @include media-down(sm) {
        width: 60%;
      }

      .main-item {
        @include media-down(lg) {
          padding: 12px 0;
        }
      }

      .main-link {
        font-weight: 700;
        padding: 30px 0;
        position: relative;
        color: var(--color-black);

        @include media-down(lg) {
          padding: 12px 0;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 5px;
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

      @include media-down(lg) {
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

          @include media-down(lg) {
            &:hover {
              background: var(--color-white);
            }

            &:active {
              background: var(--color-white);
            }
          }
        }
      }
    }

    // 漢堡選單
    .nav-hamburger {
      display: none;

      @include media-down(lg) {
        display: block;
        transition: all 0.5s ease-in-out;
        position: relative;
        width: 25px;
        height: 25px;
        margin-left: 10px;
        cursor: pointer;
        top: 0rem;

        > span {
          width: 25px;
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
