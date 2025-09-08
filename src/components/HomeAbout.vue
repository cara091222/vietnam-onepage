<template>
  <div class="home-about padding-share" id="HomeAbout">
    <div class="home-about-container">
      <!-- tab -->
      <div class="tab-wrap">
        <ul class="tab-inner">
          <li
            class="tab-item-a"
            :class="{ active: activeTab === 'tab1' }"
            @click="activeTab = 'tab1'"
          >
            <a href="#tab1" class="tab-link logo-img">
              <img src="@/assets/images/cathay_tree.png" alt="" />
            </a>
          </li>
          <li
            v-for="(tab, index) in tabs.slice(1)"
            :key="tab.id"
            class="tab-item-share"
            :class="[
              'tab-item-' + String.fromCharCode(98 + index),
              { active: activeTab === tab.id },
            ]"
            @click="activeTab = tab.id"
          >
            <svg class="tab-border" viewBox="0 0 110 110">
              <circle
                class="round"
                cx="55"
                cy="55"
                r="50"
                stroke="#666666"
                stroke-width="0.3"
                stroke-dasharray="2 2"
                fill="none"
              />
              <circle cx="55" cy="55" r="49" fill="none" />
            </svg>
            <a :href="'#' + tab.id" class="tab-link">
              {{ tab.label }}
            </a>
          </li>
        </ul>
        <div class="circle-bg">
          <img src="@/assets/images/circle_bg.png" alt="" />
        </div>
      </div>
      <!-- content -->
      <div class="content-wrap">
        <transition name="fade-up" mode="out-in">
          <div :key="activeTab" class="content-item">
            <template v-if="activeTab === 'tab1'">
              <h3 class="title-en">About</h3>
              <h2 class="title-main-share">
                Cathay Life – hậu thuẫn vững chắc, đáng tin cậy của bạn
              </h2>
              <p class="desc"></p>
            </template>
            <template v-else>
              <div
                v-for="tab in tabs.filter((t) => t.id === activeTab)"
                :key="tab.id"
              >
                <div class="number-wrap">
                  <div class="number-box">
                    <p class="number">{{ tab.number }}</p>
                    <p class="unit">{{ tab.unit }}</p>
                  </div>
                  <p class="text">{{ tab.text }}</p>
                </div>
                <p class="desc" v-html="tab.desc"></p>
              </div>
            </template>
          </div>
        </transition>
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
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      activeTab: "tab1",
      tabs: [
        {
          id: "tab1",
          label: "Logo Tab",
        },
        {
          id: "tab2",
          label: "Lớn nhất Đài Loan",
          number: "97",
          unit: "%",
          text: "hài lòng của khác hàng",
          desc: "Công ty bảo hiểm nhân thọ lớn nhất Đài Loan, với hơn 8 triệu khách hàng, hơn 20 triệu hợp đồng bảo hiểm, duy trì mức độ hài lòng của khác hàng trên 97%.",
        },
        {
          id: "tab3",
          label: "Chuẩn mực Châu Á – Thái Bình Dương",
          number: "150",
          unit: "+",
          text: "điểm kinh doanh",
          desc: "Với tầm nhìn trở thành tổ chức tài chính hàng đầu khu vực Châu Á – Thái Bình Dương, trong đó <a href='https://www.cathaylife.com.vn/cathay/' target='_blank'>Cathay Life Việt Nam</a> đã có mặt tại Việt Nam 17 năm, với hơn 150 điểm kinh doanh trên toàn quốc.",
        },
        {
          id: "tab4",
          label: "Khách hàng là số 1",
          number: "20",
          unit: "+",
          text: "giải thưởng trong và ngoài nước",
          desc: "Hằng năm nhận hơn 20 giải thưởng trong và ngoài nước về dịch vụ khách hàng và trải nghiệm số, cam kết mang đến trải nghiệm tin cậy cho khách hàng cả trực tuyến và trực tiếp.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-about {
  position: relative;

  &-container {
    position: relative;
    width: auto;
    max-width: 1340px;
    margin: 0 auto;
    padding: 0px 50px;
    @include d-flex(space-between, center);
    gap: 140px;

    @include media-down(jumbo) {
      gap: 0;
    }

    @include media-down(xl) {
      padding: 0px 30px;
    }

    @include media-down(lg) {
      flex-direction: column;
      padding-bottom: 80px;
    }

    @include media-down(sm) {
      gap: 20px;
    }
  }

  .tab-wrap {
    width: 50%;
    height: 635px;
    padding-bottom: 50px;
    position: relative;

    @include media-down(xl) {
      height: 600px;
    }

    @include media-down(lg) {
      height: 500px;
      width: 100%;
      padding-bottom: 100px;
    }

    @include media-down(l) {
      padding-bottom: 0;
    }

    @include media-down(sm) {
      height: 400px;
    }

    .circle-bg {
      @include poa-center;
      z-index: -3;
      top: 45%;
      width: 100%;
      height: 100%;

      @include media-down(sm) {
        transform: rotateZ(25deg);
        top: 0;
        left: 0;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .tab-inner {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .logo-img {
      width: 100px;
      height: 100px;

      @include media-down(jumbo) {
        width: 70px;
        height: 70px;
      }

      @include media-down(sm) {
        width: 50px;
        height: 50px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .tab-item-a {
      z-index: 2;
      @include poa-center;
      @include d-flex(center, center);
      width: 260px;
      height: 260px;
      background-color: var(--color-white);
      border-radius: 100rem;
      box-shadow: 0 0 31px 0 rgba(23, 115, 56, 0.2);
      transition: all 0.3s ease-in-out;

      &.active,
      &:hover {
        box-shadow: 0 0 31px 0 rgba(95, 176, 118, 0.7);
      }

      @include media-down(jumbo) {
        width: 220px;
        height: 220px;
      }

      @include media-down(xl) {
        width: 200px;
        height: 200px;
      }

      @include media-down(l) {
        width: 160px;
        height: 160px;
      }

      @include media-down(sm) {
        width: 130px;
        height: 130px;
      }
    }

    .tab-item-share {
      @include d-flex(center, center);
      position: relative;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;

      @include media-down(jumbo) {
        width: 250px;
        height: 250px;
      }
      @include media-down(xl) {
        width: 220px;
        height: 220px;
      }
      @include media-down(l) {
        width: 190px;
        height: 190px;
      }
      @include media-down(sm) {
        width: 150px;
        height: 150px;
      }

      /* SVG 外圈 */
      .tab-border {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none; /* 不阻擋點擊 */
      }

      .round {
        transform-origin: 50% 50%;
        animation: rotate-border 20s linear infinite;
      }

      .tab-link {
        position: relative; 
        z-index: 1;
        width: 193px;
        height: 232px;
        border-radius: 100rem;
        @include d-flex(center, center);
        padding: 0 20px;
        color: var(--color-main);
        font-size: 26px;
        font-weight: 700;
        line-height: 30px;
        text-align: center;
        transition: all 0.3s ease-in-out;

        @include media-down(jumbo) {
          width: 153px;
          height: 192px;
        }

        @include media-down(xl) {
          width: 143px;
          height: 182px;
          font-size: 20px;
          line-height: 22px;
        }

        @include media-down(l) {
          width: 113px;
          height: 152px;
          font-size: 18px;
        }

        @include media-down(sm) {
          width: 113px;
          height: 122px;
          padding: 0 5px;
          font-size: 16px;
          line-height: 20px;
        }
      }

      &.active .tab-link,
      &:hover .tab-link {
        background: var(--color-main);
        color: var(--color-white);
      }
    }

    @keyframes rotate-border {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    // 自訂位置
    .tab-item-b {
      margin-left: auto;
      top: 2rem;

      @include media-down(jumbo) {
        margin-right: 2rem;
        top: 5rem;
      }

      @include media-down(xl) {
        margin-right: 3rem;
        top: 5rem;
      }

      @include media-down(lg) {
        margin-right: 14rem;
        top: 2rem;
      }

      @include media-down(l) {
        margin-right: 9.5rem;
        top: 5rem;
      }

      @include media-down(sm) {
        margin-right: 1.5rem;
        top: 3.5rem;
      }

      @include media-down(xs) {
        margin-right: 0rem;
        top: 4rem;
      }

      @include media-down(tiny) {
        margin-right: -1rem;
        top: 4rem;
      }
    }

    .tab-item-c {
      margin-left: auto;
      margin-right: 3rem;
      bottom: -5.5rem;

      @include media-down(jumbo) {
        margin-right: 8rem;
        bottom: -8rem;
      }

      @include media-down(xl) {
        margin-right: 7rem;
        bottom: -8.5rem;
      }

      @include media-down(lg) {
        margin-right: 18rem;
        bottom: -5rem;
      }

      @include media-down(l) {
        margin-right: 14rem;
        bottom: -6.5rem;
      }

      @include media-down(sm) {
        margin-right: 5rem;
        bottom: -5.8rem;
      }
    }

    .tab-item-d {
      margin-left: -4.5rem;
      margin-top: -25rem;

      @include media-down(jumbo) {
        margin-left: 1.5rem;
        top: 2rem;
      }

      @include media-down(xl) {
        margin-left: 1rem;
        top: 6rem;
      }

      @include media-down(lg) {
        margin-left: 11rem;
        top: 6rem;
      }

      @include media-down(l) {
        margin-left: 8rem;
        top: 8rem;
      }

      @include media-down(sm) {
        margin-left: 0rem;
        top: 10.5rem;
      }

      @include media-down(xs) {
        margin-left: -0.5rem;
        top: 10rem;
      }

      @include media-down(tiny) {
        margin-left: -1rem;
        top: 9.5rem;
      }
    }
  }

  .content-wrap {
    width: 50%;

    @include media-down(lg) {
      width: 100%;
    }

    .content-item {
      @include media-down(lg) {
        text-align: center;
      }

      .title-main-share {
        padding-top: 20px;
      }

      .number-wrap {
        @include d-flex(flex-start, flex-end);
        gap: 10px;

        @include media-down(lg) {
          justify-content: center;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .number-box {
          @include d-flex(flex-start, flex-end);
          gap: 8px;

          .number {
            @include en-fontF;
            color: var(--color-main);
            font-size: 100px;
            font-weight: 900;
            line-height: 80px;

            @include media-down(sm) {
              font-size: 72px;
              line-height: 62px;
            }
          }

          .unit {
            font-size: 60px;
            line-height: 54px;
            color: var(--color-main);
            font-weight: 900;

            @include media-down(sm) {
              font-size: 40px;
              line-height: 36px;
            }
          }
        }

        .text {
          color: var(--color-black);
          font-size: 18px;
          font-weight: 700;
          line-height: 28.8px;
        }
      }

      .desc {
        color: var(--color-grey);
        padding-top: 30px;

        @include media-down(lg) {
          padding-top: 15px;
          width: 80%;
          margin: auto;
        }

        @include media-down(md) {
          width: 100%;
        }
      }

      a {
          font-weight: bold;
          color: var(--color-main);
          text-decoration: underline;
        }
    }
  }

  /* 過渡動畫 */
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all 0.5s ease;
  }

  .fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-up-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  /* Waves */
  .waves-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
