<template>
  <div class="home-event" id="HomeEvent">
    <div class="container-share">
      <div class="home-event-wrap padding-small-share">
        <h3 class="title-en">Event</h3>
        <h2 class="title-main-share">Hoạt động</h2>
        <p class="content">
          Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt
          động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung
          hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội
          dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt
          động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung
          hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội
          dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt
          động Nội dung hoạt động Nội dung hoạt động Nội dung hoạt động Nội dung
          hoạt động
        </p>
      </div>
    </div>
    <div class="circular-a">
      <div class="circular"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";

.home-event {
  position: relative;
  padding-bottom: 120px;

  @include media-down(lg) {
    padding-bottom: 100px;
  }

  @include media-down(sm) {
    padding-bottom: 70px;
  }

  .home-event-wrap {
    border-radius: 50px;
    background: #fafafa;

    .content {
      color: var(--color-grey);
      padding-top: 50px;

      @include media-down(lg) {
        padding-top: 25px;
      }
    }
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
