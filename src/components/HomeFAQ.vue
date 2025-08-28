<template>
  <div class="home-FAQ padding-share" id="HomeFAQ">
    <div class="home-FAQ-container">
      <div class="home-FAQ-img">
        <img src="@/assets/images/home_AFQ_img.jpg" alt="" />
      </div>
      <div class="home-FAQ-accordion">
        <h3 class="title-en">FAQ</h3>
        <h2 class="title-main-share">Các câu hỏi thường gặp</h2>
        <div class="accordion-wrap">
          <div
            class="accordion-item"
            v-for="(item, index) in faqList"
            :key="index"
          >
            <div class="accordion-header">
              <h4 class="title-small-share">
                <span>0{{ index + 1 }}</span> {{ item.question }}
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                class="arrow-icon"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  transform="matrix(-1 0 0 1 40 0)"
                  stroke="#333333"
                  stroke-width="2"
                />
                <path
                  d="M26.7856 17.262L20.8333 23.2144L14.8809 17.262"
                  stroke="#333333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="accordion-content">
              <p v-html="item.answer01"></p>
              <p v-html="item.answer02"></p>
              <p>{{ item.answer03 }}</p>
              <p>{{ item.answer04 }}</p>
              <p>{{ item.answer05 }}</p>
              <p>{{ item.answer06 }}</p>
            </div>
          </div>
          <!-- 自製捲軸 -->
          <div class="fake-scrollbar">
            <div class="thumb"></div>
          </div>
          <!-- 上下漸層提示 -->
          <div class="fade-top"></div>
          <div class="fade-bottom"></div>
        </div>
      </div>
    </div>
    <div class="circular-b">
      <div class="circular"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import $ from "jquery";

export default {
  name: "HomeFAQ",
  data() {
    return {
      faqList: [
        {
          question:
            "Bảo hiểm y tế, bảo hiểm lao động và có các phúc lợi xã hội Đài Loan nào, tôi có đủ điều kiện không, làm sao để đăng ký?",
          answer01:
            "bảo hiểm xã hội (Phúc lợi bảo hiểm) và bảo hiểm hưu trí, quyền lợi lao động (Việc làm, quy định lao động,..)、nguồn tài nguyên (trang web các huyện thành phố, trang phát triển và bồi dưỡng năng lực dành cho Tân di dân), những thông tin trên sẽ thực hiện theo quy định của các huyện, thành phố.",
        },
        {
          question: "Tôi muốn mua bảo hiểm, phải làm sao?",
          answer01: "5 bước nhanh để hiểu rõ về Bảo hiểm",
          answer02:
            "Bước 1:Hãy xác định rõ mục tiêu của bạn: bảo vệ sức khoẻ, chuẩn bị cho tương lai của người thân, ....",
          answer03:
            "Bước 2: Các loại bảo hiểm thường gặp là bảo hiểm sức khoẻ, bảo hiểm nhân thọ, bảo hiểm tai nạn, bảo hiểm liên kết đầu tư.",
          answer04:
            "Bước 3: Phí bảo hiểm hàng tháng không nên vượt quá 10% thu nhập, quan trọng là phù hợp với khả năng chi trả của bạn. ",
          answer05:
            "Bước 4: Sử dụng công cụ tính thử trực tuyến của Cathay Life để nắm rõ mức phí và nội dung quyền lợi bạn sẽ được bảo vệ.",
          answer06:
            "Bước 5: Liên hệ chuyên viên tư vấn để thiết kế phương án phù hợp nhất với bạn.",
        },
        {
          question:
            "Tôi có nhu cầu hỗ trợ về cuộc sống tại Đài Loan, như thị thực, đổi bằng lái xe quốc tế, công việc, nuôi dạy con cái, nên tìm đến ai hỗ trợ ?",
          answer01:
            "Nếu bạn có nhu cầu liên quan đến thị thực, cư trú, việc làm, giáo dục – văn hóa, thuế, bảo hiểm y tế, giao thông (đổi bằng lái xe), dịch vụ việc làm, y tế – sức khỏe, an toàn cá nhân, nuôi dạy con cái, dịch vụ phúc lợi, thông tin pháp lý hoặc các vấn đề đời sống khác, có thể gọi đến Đường dây nóng tư vấn cho người nước ngoài tại Đài Loan – 1990 (miễn phí).",
          answer02:
            "Dịch vụ tư vấn được cung cấp 24/7 bằng tiếng Trung và tiếng Anh, và bằng tiếng Việt từ thứ Hai đến thứ Sáu (trừ các ngày lễ và ngày nghỉ khác), trong khung giờ 9:00 sáng đến 5:00 chiều.",
          answer03:
            "Tất nhiên, chúng tôi hoan nghênh bạn đặt lịch hẹn với chuyên viên tư vấn, chúng tôi sẽ hết sức hỗ trợ bạn!",
        },
        {
          question:
            "Nếu tôi gặp tranh chấp lao động hoặc bị đối xử không công bằng thì phải làm gì?",
          answer01:
            "Khi bạn gặp tranh chấp lao động hoặc bị đối xử bất công tại Đài Loan, hãy ngay lập tức gọi đến Đường dây nóng tư vấn khiếu nại lao động 1955 (miễn phí, hoạt động 24/24). Đường dây này hỗ trợ bằng nhiều ngôn ngữ, bao gồm tiếng Việt, có thể tư vấn cho bạn về quyền lợi, khiếu nại, và hỗ trợ sắp xếp chỗ ở tạm thời hoặc pháp lý nếu cần thiết. Đây là kênh hỗ trợ đáng tin cậy nhất dành cho bạn tại Đài Loan.",
        },
        {
          question:
            "Nếu tôi gặp tranh chấp lao động hoặc bị đối xử không công bằng thì phải làm gì?",
          answer01:
            "Người Việt tại Đài Loan khi khai báo thuế được phân thành hai nhóm: Nhóm đã có CCCD Đài Loan hoặc Nhóm chỉ có thẻ cư trú, trong đó lại chia thành: Người cư trú tại Đài Loan đủ 183 ngày trở lên/ năm, Người cư trú chưa đủ 183 ngày/năm tại Đài Loan. Chi tiết vui lòng tham khảo quy định cụ thể của Cục Thuế địa phương nơi bạn sinh sống để thực hiện đúng quy định.",
          answer02:
            "<a href='https://news.immigration.gov.tw/NewsSection/Detail/8C6CC7D0-B793-49BC-AF28-BF33EBBCD025' target='_blank'>Tham khảo thông tin tại</a> ",
        },
        {
          question:
            "Nếu muốn thường xuyên cập nhật thông tin mới, tôi có thể theo dõi qua các kênh nào?",
          answer01:
            "Ngoài các phương tiện truyền thông như báo chí, tạp chí, bạn có thể truy cập vào <a href='https://ifi.immigration.gov.tw/wSite/mp?mp=1' target='_blank'>Trang phát triển  bồi dưỡng năng</a>lực cho Tân di dân do Sở Di dân Đài Loan quản lý.",
          answer02:
            "Trang này cung cấp thông tin mới nhất liên quan đến: hỗ trợ đời sống cho người nước ngoài, bồi dưỡng năng lực việc làm, giáo dục – văn hóa, phúc lợi y tế, dịch vụ thông tin, quỹ hỗ trợ và hội nghị, …",
          answer03:
            "Ngoài ra, bạn cũng có thể tham gia nhóm LINE có tên “Trang phát triển bồi dưỡng năng lực cho Tân di dân”. Chọn “Tài khoản Official” → “Trang chủ”, tìm kiếm ID: @ifitw, sau đó chọn “Thêm” để tham gia nhóm.",
        },
        {
          question:
            "Tôi gặp vấn đề pháp luật liên quan đến cư trú và lưu trú, làm thế nào để được hỗ trợ?",
          answer01:
            "Ngoài các phương tiện truyền thông như báo chí, tạp chí, bạn có thể truy cập vào Trang phát triển  bồi dưỡng năng lực cho Tân di dân do Sở Di dân Đài Loan quản lý. Trang này cung cấp thông tin mới nhất liên quan đến: hỗ trợ đời sống cho người nước ngoài, bồi dưỡng năng lực việc làm, giáo dục – văn hóa, phúc lợi y tế, dịch vụ thông tin, quỹ hỗ trợ và hội nghị, …",
          answer02:
            "Thông tin liên lạc tham khảo trên<a href='https://www.immigration.gov.tw/5475/5478/141386/127061/127076/' target='_blank'>Trang thông tin của Sở di dân Đài Loan</a>",
        },
      ],
    };
  },
  mounted() {
    // jQuery 控制 accordion
    $(".accordion-header").on("click", function () {
      const $item = $(this).closest(".accordion-item");
      $item.toggleClass("active");
      $item.find(".accordion-content").slideToggle();
      $item.find(".accordion-header").toggleClass("active");
    });

    // ------- 自製捲軸 + 漸層提示 -------
    const scrollBox = this.$el.querySelector(".accordion-wrap");
    const content = this.$el.querySelector(".accordion-wrap"); // 內容就是自己
    const thumb = document.querySelector(".thumb");
    const fadeTop = document.querySelector(".fade-top");
    const fadeBottom = document.querySelector(".fade-bottom");

    // 判斷是否為手機裝置 (你也可以改用 window.innerWidth)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function updateScroll() {
      if (!isMobile) return; // 桌面版直接跳出，不處理

      const scrollHeight = content.scrollHeight; // 內容總高度
      const visibleHeight = scrollBox.clientHeight; // 可見高度
      const scrollTop = scrollBox.scrollTop; // 滾動位置

      // 計算 thumb 高度與位置
      const thumbHeight = Math.max(
        (visibleHeight / scrollHeight) * visibleHeight,
        20
      );
      const thumbTop =
        (scrollTop / (scrollHeight - visibleHeight)) *
        (visibleHeight - thumbHeight);

      thumb.style.height = thumbHeight + "px";
      thumb.style.top = thumbTop + "px";

      // 控制漸層顯示
      fadeTop.style.display = scrollTop > 5 ? "block" : "none";
      fadeBottom.style.display =
        scrollTop + visibleHeight < scrollHeight - 5 ? "block" : "none";
    }

    // 只在手機才綁定事件
    if (isMobile) {
      scrollBox.addEventListener("scroll", updateScroll);
      window.addEventListener("resize", updateScroll);
      updateScroll();
    } else {
      // 桌面 → 隱藏假捲軸 & 漸層
      thumb.parentElement.style.display = "none";
      fadeTop.style.display = "none";
      fadeBottom.style.display = "none";
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-FAQ {
  position: relative;

  &-container {
    position: relative;
    @include d-flex(center, center);
    max-width: 1790px;
    margin: 0 auto;
    padding: 0px 50px;

    @include media-down(xl) {
      padding: 0px 30px;
    }

    @include media-down(sm) {
      padding: 0px 20px;
    }

    @include media-down(xl) {
      flex-direction: column;
    }
  }

  .home-FAQ-img {
    border-radius: 100px;
    box-shadow: 0 0 31px 0 rgba(23, 115, 56, 0.2);
    overflow: hidden;
    max-width: 795px;
    width: 100%;
    height: 860px;

    @include media-down(jumbo) {
      height: 700px;
    }

    @include media-down(xl) {
      max-width: 100%;
      height: 500px;
      border-radius: 80px;
    }

    @include media-down(sm) {
      height: 350px;
      border-radius: 50px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @include media-down(xl) {
        object-position: top right;
      }
    }
  }

  // 手風琴樣式
  .home-FAQ-accordion {
    position: relative;
    padding: 50px 0 50px 80px;
    width: 100%;

    @include media-down(jumbo) {
      padding-left: 40px;
    }

    @include media-down(xl) {
      padding: 40px 0 0 0;
      width: 90%;
    }

    @include media-down(sm) {
      width: 100%;
    }

    .title-main-share {
      padding-bottom: 30px;

      @include media-down(xl) {
        padding-bottom: 15px;
      }
    }

    .accordion-wrap {
      width: 806px;
      height: 520px;
      overflow-y: auto;
      position: relative;

      @include media-down(jumbo) {
        width: 706px;
        height: 420px;
      }

      @include media-down(xl) {
        width: 100%;
      }

      /* 滾軸整體 */
      &::-webkit-scrollbar {
        width: 8px; /* 垂直滾軸寬度 */
      }

      /* 滾軸軌道 */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }

      /* 滾軸滑塊 */
      &::-webkit-scrollbar-thumb {
        background: var(--color-main);
        border-radius: 4px;
      }

      /* 滾軸滑塊 hover */
      &::-webkit-scrollbar-thumb:hover {
        background: var(--color-main);
      }

      .scroll-box {
        position: fixed;
        width: 300px;
        height: 100%;
        overflow-y: auto;
        padding-right: 10px; /* 預留空間避免文字壓到假捲軸 */
        border: 1px solid #ddd;
      }

      /* 假捲軸外框 */
      .fake-scrollbar {
        position: absolute;
        top: 0;
        right: 2px;
        width: 8px;
        height: 100%;
        border-radius: 100px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 2px;
      }

      /* 假捲軸滑塊 */
      .fake-scrollbar .thumb {
        width: 100%;
        background: var(--color-main);
        position: absolute;
        border-radius: 100px;
        top: 0;
        height: 40px; /* JS 會覆蓋 */
      }

      /* 漸層提示（上方） */
      .fade-top {
        position: absolute;
        top: 0;
        left: 0;
        right: 10px; /* 預留捲軸空間 */
        height: 20px;
        background: linear-gradient(to bottom, white, transparent);
        pointer-events: none;
        display: none; /* 預設隱藏，JS 控制 */
      }

      /* 漸層提示（下方） */
      .fade-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 10px;
        height: 20px;
        background: linear-gradient(to top, white, transparent);
        pointer-events: none;
        display: none; /* 預設隱藏，JS 控制 */
      }

      .accordion-item {
        border-bottom: 1px solid #dadada;
        margin-right: 20px;

        .accordion-header {
          @include d-flex(space-between, flex-start);
          padding: 20px 15px;
          cursor: pointer;
          gap: 15px;

          @include media-down(sm) {
            padding: 15px;
          }

          &.active {
            .title-small-share {
              color: var(--color-main);
            }

            .arrow-icon {
              transform: rotate(180deg);

              circle {
                stroke: var(--color-main);
              }
              path {
                stroke: var(--color-main);
              }
            }
          }

          .title-small-share {
            @include d-flex(flex-start, flex-start);
            gap: 17px;
            max-width: 680px;
            width: 100%;

            @include media-down(sm) {
              gap: 8px;
            }

            > span {
              font-size: 18px;
            }
          }

          .arrow-icon {
            transition: all 0.3s ease-in-out;
            width: 30px;
            height: 30px;
          }
        }

        .accordion-content {
          max-width: 680px;
          display: none;
          padding: 0px 60px 20px 60px;

          @include media-down(sm) {
            padding: 0px 20px 15px 48px;
          }

          p + p {
            margin-top: 10px;
          }

          a {
            font-weight: bold;
            color: var(--color-main);
            text-decoration: underline;
          }
        }
      }
    }
  }

  .circular-b {
    width: 200px;
    height: 200px;
    z-index: -1;
    right: 10rem;
    top: 900px;
    // transform: translateY(-200);

    .circular {
      transform: rotate(-56.36deg);
    }

    @include media-down(xxl) {
      // top: -500px;
    }

    @include media-down(xl) {
      right: 5rem;
      top: 1500px;
    }

    @include media-down(md) {
      top: 800px;
    }

    @include media-down(sm) {
      width: 150px;
      height: 150px;
      top: 1200px;
      right: 3rem;
    }
  }
}
</style>
