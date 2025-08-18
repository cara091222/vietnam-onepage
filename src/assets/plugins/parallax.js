/* eslint-disable */
(function () {
  function bindParallax() {
    const circles = document.querySelectorAll(".circular-a, .circular-b");
    if (circles.length === 0) return;

    // 避免重複綁定
    if (window._parallaxBound) return;
    window._parallaxBound = true;

    // IntersectionObserver：進入畫面才啟動
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.dataset.active = entry.isIntersecting ? "true" : "false";
        });
      },
      { threshold: 0 }
    );

    circles.forEach((el) => {
      // 保存原本的 transform（可能有 translateX / rotate）
      el.dataset.baseTransform = el.style.transform || "";
      io.observe(el);
    });

    // 滾動事件：加 translateY 做視差
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      circles.forEach((el) => {
        if (el.dataset.active === "true") {
          // circular-a 往下飄，circular-b 往上飄
          const speed = el.classList.contains("circular-a") ? 0.2 : -0.2;
          el.style.transform = `${el.dataset.baseTransform} translateY(${scrollY * speed}px)`;
        }
      });
    });
  }

  // Vue SPA 頁面切換時監聽 DOM 變化
  const mo = new MutationObserver(bindParallax);
  mo.observe(document.body, { childList: true, subtree: true });

  // 頁面首次載入時綁定
  document.addEventListener("DOMContentLoaded", bindParallax);
})();
