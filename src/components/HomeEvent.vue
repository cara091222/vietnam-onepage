<template>
  <div class="home-event" id="HomeEvent">
    <div class="container-share">
      <div class="home-event-wrap">
        <h3 class="title-en">Event</h3>
        <h2 class="title-main-share">Thông báo về sự kiện</h2>
        <div class="home-event-info">
          <div class="main-title">
            <p class="date">
              ｜Thời gian diễn ra hoạt động: 01/11/2025 đến 31/12/2025｜
            </p>
            <h3 class="title-small-share">
              Ưu đãi độc quyền cho người Việt nhập cư tại Đài Loan!
            </h3>
            <p class="subtitle">
              Điền thông tin để có cơ hội trúng iPhone 17 Pro và các giải thưởng
              hấp dẫn khác.
            </p>
          </div>
          <div
            class="event-item"
            v-for="(item, index) in eventItem"
            :key="index"
          >
            <h4 class="event-title">{{ item.title }}</h4>
            <p class="desc">{{ item.desc }}</p>
            <ul class="ul">
              <li v-for="(li, i) in item.ul" :key="i">{{ li }}</li>
            </ul>
          </div>
          <div class="btn-wrap">
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=1S08mhOg80K-ue6VblIi_bbejVplT-pEqclP0sutM8lUQTdFU1ZMTFY4UzFaRUYxV0MyNVJQUlRKMy4u&route=shorturl"
              class="btn-main"
              target="_blank"
            >
              <div class="btn">Tham gia rút thăm trúng thưởng ngay</div>
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
          <a
            class="mouse-scroll"
            :class="{ active: showContent }"
            @click="toggleContent"
          >
            <p>tìm hiểu thêm</p>
            <div class="arrow-wrap">
              <svg
                class="arrow-1"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
              >
                <path
                  d="M20.9937 1.50002L11.2468 11.2468L1.50003 1.50002"
                  stroke="#177338"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                class="arrow-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
              >
                <path
                  d="M20.9937 1.50002L11.2468 11.2468L1.50003 1.50002"
                  stroke="#177338"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                class="arrow-3"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
              >
                <path
                  d="M20.9937 1.50002L11.2468 11.2468L1.50003 1.50002"
                  stroke="#177338"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
        <transition name="expand">
          <div class="content-wrap" ref="contentWrap" v-show="showContent">
            <div
              class="event-item"
              v-for="(item, index) in contentItem"
              :key="index"
            >
              <h4 class="event-title">{{ item.title }}</h4>
              <div class="subtitle-wrap" :class="{ 'pt-20': index !== 0 }">
                <span>{{ item.number }}</span>
                <p class="subtitle">
                  {{ item.subtitle }}
                </p>
              </div>
              <ul v-if="item.ul && item.ul.length" class="ul">
                <li v-for="(li, i) in item.ul" :key="i">
                  {{ li.text }}
                  <ul v-if="li.subList && li.subList.length" class="ul-sec">
                    <li v-for="(sub, j) in li.subList" :key="j" class="li-sec">
                      {{ sub }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p class="notice">Mọi vấn đề chưa được đề cập trong thể lệ này sẽ được xử lý theo quy định nội bộ hoặc giải thích của Công ty.</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="circular-a">
      <div class="circular"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      showContent: false,
      eventItem: [
        {
          title: 'Hình thức tham gia:',
          desc: ' Điền bảng câu hỏi trên website và cung cấp thông tin liên lạc của bạn. Chuyên viên tư vấn sẽ liên hệ với bạn để xác nhận thông tin và danh tính. Sau đó, bạn sẽ được tham gia rút thăm trúng thưởng. Ngoài ra đối với những người đăng ký sớm sẽ có ưu đãi đặc biệt! Vui lòng điền thông tin từ ngày 01/11/2025 đến ngày 30/11/2025 để có thêm cơ hội trúng thưởng.',
        },
        {
          title: 'Giải thưởng bao gồm:',
          desc: '',
          ul: [
            '01 giải: iPhone 17 Pro (giá trị 39.900 Đài tệ)',
            '01 giải: AirPods Pro 3 (giá trị 7.490 Đài tệ)',
            '100 giải: Phiếu mua sắm FamilyMart trị giá 300 Đài tệ (giá trị 300 Đài tệ)',
            '200 giải: Phiếu mua sắm FamilyMart trị giá 100 Đài tệ (giá trị 100 Đài tệ)',
          ],
        },
      ],
      contentItem: [
        {
          title: 'Lưu ý',
          number: '1.',
          subtitle: 'Thể lệ chương trình: ',
          ul: [
            {
              text: 'Thời gian diễn ra chương trình từ ngày 01/11/2025 đến hết ngày 31/12/2025. Với mỗi lần quay số mỗi người chỉ được trúng một giải thưởng. Trường hợp một người trúng từ hai giải thưởng trở lên,sẽ chỉ tính giải thưởng giá trị cao nhất các giải thưởng khác sẽ bị hủy bỏ.',
            },
            {
              text: 'Tất cả người Việt Nam định cư tại Đài Loan điền vào mẫu đơn, điền đầy đủ thông tin liên lạc trong thời gian diễn ra chương trình và được đại diện của Công ty TNHH Bảo hiểm Nhân thọ Cathay (sau đây gọi tắt là Công ty) xác minh thân phận qua điện thoại đều đủ điều kiện tham gia chương trình quay số trúng thưởng. Ngoài ra người tham gia điền thông tin từ ngày 01/11/2025 đến hết ngày 30/11/2025 sẽ được nhận thêm một phiếu quay số trúng thưởng.',
            },
            {
              text: 'Công ty sẽ quay số ngẫu nhiên bằng máy tính trước ngày 31/01/2026 và sẽ công bố kết quả trúng thưởng trên trang web chính thức của Công ty trong vòng 30 ngày sau khi chương trình quay số kết thúc. Người trúng thưởng cũng sẽ được thông báo qua số điện thoại do người trúng thưởng đã đăng ký.',
            },
            {
              text: 'Người trúng thưởng cần gửi lại Thư Xác Nhận Nhận Thưởng cho công ty trong vòng 14 ngày kể từ ngày công bố danh sách trúng thưởng.Nếu quá thời hạn trên mà không gửi lại, sẽ được xem là tự động từ bỏ quyền nhận thưởng. Giá trị giải thưởng:',
              subList: [
                'iPhone 17 Pro 256G (Giá thị trường: 39.900 TWD)',
                'AirPods Pro 3 (Giá thị trường: 7.490 TWD)',
                'Phiếu mua hàng điện tử FamilyMart trị giá 300 TWD',
                'Phiếu mua hàng điện tử FamilyMart trị giá 100 TWD',
              ],
            },
            {
              text: '【Phiếu mua sắm FamilyMart (sau đây gọi là phiếu)】Lưu ý sử dụng:',
              subList: [
                'Kiểm tra số dư: Người trúng thưởng có thể kiểm tra số dư tại máy FamiPort trong tất cả cửa hàng FamilyMart trên toàn Đài Loan, hoặc xem biên lai giao dịch / hóa đơn điện tử sau khi sử dụng Phiếu – trên đó sẽ hiển thị số dư còn lại.',
                'Khi thanh toán tại quầy thu ngân, vui lòng điều chỉnh độ sáng màn hình điện thoại ở mức cao nhất để quét mã thuận tiện.',
                'Phiếu không có thời hạn sử dụng, có thể dùng nhiều lần hoặc kết hợp nhiều Phiếu trong cùng một giao dịch. Phiếu có thể dùng tại mọi cửa hàng FamilyMart trên toàn Đài Loan, nhưng không thể dùng để thanh toán các dịch vụ trung gian, thuốc lá, hoặc hàng hóa/dịch vụ không xuất hóa đơn (ví dụ: thanh toán hóa đơn, nạp thẻ EasyCard, dịch vụ giao hàng, mua vé, v.v.).',
                'Phiếu cũng có thể sử dụng tại các nhà hàng: Ootoya, bb.q CHICKEN, và IKIGAI Yakiniku trên toàn Đài Loan (một số cửa hàng không áp dụng, vui lòng xem thông báo trên website FamilyMart).',
                'Phiếu có thể chuyển vào ví điện tử Fami Wallet, sau khi chuyển sẽ được xem là đã sử dụng và không thể hoàn lại.',
                'Quy định chi tiết về việc sử dụng Phiếu, vui lòng xem trên trang web chính thức của FamilyMart Gift Card.',
                'Đơn vị phát hành: Edenred Taiwan (Công ty TNHH Edenred Singapore – Chi nhánh Đài Loan).',
                'Phiếu này chỉ dành cho mục đích tặng thưởng doanh nghiệp, không được bán lẻ hoặc chuyển nhượng, và chỉ có thể sử dụng theo phương thức được ghi trên Phiếu.',
                'Phiếu không ghi tên, bất kỳ ai có Phiếu đều có thể sử dụng. Vui lòng giữ gìn cẩn thận, nếu bị người khác sử dụng hoặc đánh cắp, sẽ không được cấp lại.',
                'Hàng hóa hoặc số tiền đã thanh toán bằng Phiếu sẽ không được xuất hóa đơn, trừ các trường hợp đặc biệt theo quy định pháp luật.',
                'Hiệu lực của Phiếu được xác định theo hệ thống dữ liệu của đơn vị phát hành. Trong trường hợp có trễ mạng, thông tin tại hệ thống của cửa hàng sẽ được ưu tiên.',
                'Phiếu là chứng từ có giá trị, nghiêm cấm làm giả, chỉnh sửa hoặc sao chép trái phép, nếu vi phạm sẽ bị xử lý theo quy định pháp luật hình sự.',
                'Trừ trường hợp có ảnh hưởng lớn đến quyền lợi người dùng, đơn vị phát hành có quyền điều chỉnh nội dung quy định của Phiếu mà không cần thông báo trước.',
              ],
            },
          ],
        },
        {
          title: '',
          number: '2.',
          subtitle: ' Khi người tham gia (bao gồm cả người chưa thành niên và người giám hộ hợp pháp, sau đây gọi chung là “người tham gia”) tham gia chương trình này, đồng nghĩa với việc đã đọc, hiểu rõ và đồng ý với toàn bộ thể lệ của chương trình, bao gồm các nội dung sau: ',
          ul: [
            {
              text: ' Công ty có quyền, theo quy định của Luật bảo vệ dữ liệu cá nhân, thu thập, xử lý và sử dụng dữ liệu cá nhân của người tham gia trong phạm vi lãnh thổ Đài Loan hoặc ngoài lãnh thổ, bằng hình thức điện tử hoặc bản giấy, trong thời gian được người tham gia đồng ý. Tuy nhiên, Công ty sẽ không sử dụng dữ liệu cá nhân cho mục đích tiếp thị thương mại nếu không có sự đồng ý riêng của người tham gia. Người tham gia có quyền tự quyết định việc cung cấp thông tin cá nhân đầy đủ hay không, tuy nhiên nếu thông tin không đầy đủ, sẽ không thể tham gia chương trình.',
            },
            {
              text: 'Người tham gia có thể liên hệ đường dây nóng chăm sóc khách hàng của Công ty (gọi miễn phí từ điện thoại bàn: 0800-036-599, hoặc từ điện thoại di động: (02) 4128-010) để thực hiện các quyền liên quan đến dữ liệu cá nhân của mình, bao gồm: yêu cầu kiểm tra, sao chép, chỉnh sửa, bổ sung, ngừng thu thập, xử lý hoặc xóa dữ liệu cá nhân.',
            },
          ],
        },
        {
          title: '',
          number: '3.',
          subtitle: ' Nếu trong quá trình tham gia chương trình, xảy ra lỗi do máy tính, mạng, điện thoại, kỹ thuật hoặc các nguyên nhân khách quan khác không thuộc trách nhiệm của Công ty, dẫn đến việc thông tin gửi, điền hoặc đăng ký bị mất, sai lệch, hư hỏng hoặc không thể xác định, Công ty sẽ không chịu bất kỳ trách nhiệm pháp lý nào. ',
        },
        {
          title: '',
          number: ' 4.',
          subtitle: 'Công ty có quyền kiểm tra kết quả trúng thưởng để xác định xem có hành vi thao túng hoặc gian lận nào không. Nếu phát hiện người tham gia có hành vi giả mạo, gian lận hoặc sử dụng phương thức không hợp lệ để nhận thưởng, Công ty có quyền hủy bỏ tư cách trúng thưởng hoặc từ chối cho tham gia chương trình. ',
        },
        {
          title: '',
          number: ' 5.',
          subtitle: 'Công ty có quyền yêu cầu người trúng thưởng cung cấp bản sao hợp lệ của thẻ cư trú hoặc chứng minh thư, và chỉ sau khi xác minh thông tin chính xác, người trúng thưởng mới được nhận thưởng. ',
        },
        {
          title: '',
          number: ' 6.',
          subtitle: 'Địa chỉ nhận thưởng chỉ giới hạn trong lãnh thổ Đài Loan (Trung Hoa Dân Quốc). Nếu người trúng thưởng không cung cấp địa chỉ hợp lệ trong nước trước thời hạn nhận thưởng, Công ty có quyền hủy tư cách trúng thưởng.',
        },
        {
          title: '',
          number: ' 7.',
          subtitle: 'Nếu người trúng thưởng không nhận thưởng đúng hạn, hoặc do thiếu hoặc sai thông tin liên hệ khiến Công ty không thể thông báo, sẽ được xem là từ bỏ quyền nhận thưởng. Tương tự, nếu người trúng thưởng từ chối việc khấu trừ thuế thu nhập, cũng sẽ bị hủy tư cách nhận thưởng.',
        },
        {
          title: '',
          number: ' 8.',
          subtitle: 'Giải thưởng không được quy đổi thành tiền mặt, không được chuyển nhượng hoặc trao đổi dưới bất kỳ hình thức nào.',
        },
        {
          title: '',
          number: ' 9.',
          subtitle: 'Giải thưởng thực tế sẽ được căn cứ vào sản phẩm thực tế, hình ảnh và mẫu minh họa chỉ mang tính tham khảo, không thể chọn màu hoặc kiểu dáng. Trong trường hợp hết hàng hoặc do yếu tố bất khả kháng, Công ty có quyền thay thế bằng sản phẩm khác có giá trị tương đương.',
        },
        {
          title: '',
          number: ' 10.',
          subtitle: 'Khi người tham gia (bao gồm cả người chưa thành niên và người giám hộ hợp pháp, sau đây gọi chung là “người tham gia”) tham gia chương trình này, đồng nghĩa với việc đã đọc, hiểu rõ và đồng ý với toàn bộ thể lệ của chương trình, bao gồm các nội dung sau:',
          ul: [
            {
              text: 'Nếu người trúng thưởng là cá nhân cư trú tại Đài Loan, và tổng giá trị phần thưởng trong năm vượt quá 1.000 TWD, Công ty sẽ khai báo thông tin (tên, địa chỉ, mã số ID, tổng giá trị thưởng trong năm...) cho cơ quan thuế vào năm sau.',
            },
            {
              text: 'Nếu giá trị giải thưởng đạt hoặc vượt 20.010 TWD, người trúng thưởng phải nộp 10% thuế thu nhập từ trúng thưởng trước khi nhận thưởng.',
            },
            {
              text: 'Nếu người trúng thưởng là người không cư trú tại Đài Loan (người ở dưới 183 ngày/năm hoặc người nước ngoài), sẽ bị khấu trừ 20% thuế trúng thưởng bất kể giá trị giải thưởng.',
            },
            {
              text:'Nếu không hoàn thành nghĩa vụ nộp thuế, tư cách trúng thưởng sẽ bị hủy bỏ.',
            },
            {
              text:'Tuân thủ quy định miên trừ phát hành chứng từ thuế thu nhập của Bộ Tài chính, Công ty sẽ không gửi bản chứng từ khấu trừ thuế, nhưng phần thưởng vẫn sẽ được liệt kê trong tờ khai thuế thu nhập cá nhân năm tiếp theo.',
            },
            {
              text:'Người tham gia tự chịu trách nhiệm với mọi loại thuế phát sinh từ việc tham gia chương trình, Công ty không chịu trách nhiệm về các khoản thuế này.',
            },
            {
              text:'Nếu quy định về thuế có thay đổi, việc xử lý sẽ căn cứ theo quy định mới nhất.',
            },
          ]
        },
        {
          title: '',
          number: ' 11.',
          subtitle: 'Công ty không phải là nhà sản xuất hay đơn vị cung cấp giải thưởng, và không có mối quan hệ đại lý hoặc hợp tác với các nhà cung cấp đó. Thời hạn bảo hành (nếu có) sẽ căn cứ vào quy định của nhà sản xuất hoặc nhà cung cấp thực tế.Nếu có bất kỳ tranh chấp nào liên quan đến sản phẩm, dịch vụ hoặc bảo hành, Công ty không chịu trách nhiệm.',
        },
        {
          title: '',
          number: ' 12.',
          subtitle: 'Công ty có quyền hủy bỏ, chấm dứt, điều chỉnh hoặc tạm ngừng chương trình, và sẽ thông báo bằng hình thức công khai.',
        },
      ],
    }
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent

      // 若展開 -> 平滑滾動
      if (this.showContent) {
        this.$nextTick(() => {
          const target = this.$refs.contentWrap
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';

.home-event {
  position: relative;
  padding-bottom: 120px;
  height: auto;

  @include media-down(lg) {
    padding-bottom: 100px;
  }

  @include media-down(sm) {
    padding-bottom: 70px;
  }

  .home-event-wrap {
    border-radius: 50px;
    background: #fafafa;
    padding: 100px;

    @include media-down(lg) {
      border-radius: 30px;
      padding: 50px;
    }

    @include media-down(sm) {
      padding: 30px;
    }
  }

  .home-event-info {
    @include d-flex(center, center, column);
    gap: 30px;

    @include media-down(sm) {
      gap: 15px;
    }

    .main-title {
      @include d-flex(center, center, column);
      gap: 5px;
      width: 100%;
      max-width: 100%;
      margin-top: 50px;
      text-align: center;
      border-radius: 20px;
      background-color: var(--color-main);
      color: var(--color-white);
      padding: 20px 10px;

      @include media-down(sm) {
        margin-top: 25px;
      }

      .title-small-share {
        color: var(--color-white);
      }

      p {
        font-size: 18px;
        font-weight: 700;

        @include media-down(sm) {
          font-size: 16px;
        }
      }
    }
  }

  .event-item {
    margin-right: auto;

    .event-title {
      color: var(--color-sec);
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 1px;
      padding-left: 15px;
      border-left: 3px solid var(--color-main);
    }

    .desc {
      padding: 5px 0 0 15px;
    }

    .ul {
      padding-left: 20px;
      list-style: disc;
      list-style-position: inside;
    }
  }

  .btn-wrap {
    // @include d-flex(center, center);
    transition: all 0.5s ease;
    z-index: 3;

    .btn-main {
      @include d-flex(center, center);
      gap: 20px;
      padding: 15px 20px 15px 25px;
      font-size: 24px;

      @include media-down(sm) {
        gap: 10px;
      }

      .btn {
        text-align: center;
        line-height: 30px;

        @include media-down(sm) {
          font-size: 20px;
          line-height: 28px;
        }
      }

      &:hover {
        color: var(--color-main);
      }
    }

    svg {
      @include media-down(sm) {
        width: 50px;
      }
    }
  }

  .mouse-scroll {
    p {
      font-size: 18px;
      font-weight: bold;
      color: var(--color-black);
      margin-bottom: 10px;
    }

    .arrow-wrap {
      @include d-flex(center, center, column);

      svg {
        opacity: 1;
        animation: arrowFlow 1.4s ease-in-out infinite;
      }

      .arrow-1 {
        animation-delay: 0s !important;
      }

      .arrow-2 {
        animation-delay: 0.1s !important;
      }

      .arrow-3 {
        animation-delay: 0.2s !important;
      }
    }

    @keyframes arrowFlow {
      0% {
        opacity: 0;
        transform: translateY(0);
      }

      50% {
        opacity: 0.5;
        transform: translateY(3px);
      }

      100% {
        opacity: 1;
        transform: translateY(6px);
      }
    }
  }

  .content-wrap {
    margin: 80px 0 20px 0;
    

    @include media-down(lg) {
      margin-top: 50px;
    }

    .subtitle-wrap{
      @include d-flex(flex-start,flex-start);
      padding: 5px 0 0 15px;
      font-weight: 700;

      .subtitle {
        padding-left: 8px;
      }
    }

    .pt-20 {
      padding-top: 20px;
    }

    .ul {
      padding: 0 0 0 37px !important;
      list-style: upper-alpha !important;
      list-style-position: inside;
    }

    .li + .li {
      padding-top: 10px;
    }

    .ul-sec {
      list-style: disc;
      padding: 0 0 0 20px;
    }
  }

  .notice {
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
    padding: 10px 0 0 0;
    border-top: 1px solid #D9D9D9;
  }

  /* 展開動畫 */
  .expand-enter-active,
  .expand-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  .expand-enter-from,
  .expand-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .expand-enter-to,
  .expand-leave-from {
    max-height: 1000px;
    opacity: 1;
  }

  .circular-a {
    width: 240px;
    height: 240px;
    z-index: -1;
    left: 9rem;
    top: -1000px;
    // transform: translateY(-100);

    @include media-down(jumbo) {
      width: 200px;
      height: 200px;
    }

    @include media-down(xxl) {
      top: -1100px;
      left: -1rem;
    }

    @include media-down(lg) {
      top: -1300px;
    }

    @include media-down(l) {
      top: -1000px;
    }
  }
}
</style>
