document.addEventListener("DOMContentLoaded", () => {
  const acceptBtn = document.querySelector(".accept");
  const cancelBtn = document.querySelector(".cancel");

  const popTop = document.querySelector(".popTop");
  const popBottom = document.querySelector(".popBottom");

  let acceptTimer;
  let cancelTimer;

  function showTopPopup() {
    popTop.classList.remove("hide");
    popTop.classList.add("show");

    acceptTimer = setTimeout(function () {
      popTop.classList.remove("show");
      popTop.classList.add("hide");
      openTop = false;
    }, 8000);
  }
  acceptBtn.addEventListener("click", () => {
    showTopPopup();
  });

  acceptBtn.addEventListener("touchend", () => {
    showTopPopup();
  });

  function showBottomPopup() {
    popBottom.classList.remove("hide");
    popBottom.classList.add("show");

    acceptTimer = setTimeout(function () {
      popBottom.classList.remove("show");
      popBottom.classList.add("hide");
      openTop = false;
    }, 8000);
  }
  cancelBtn.addEventListener("click", () => {
    showBottomPopup();
  });

  cancelBtn.addEventListener("touchend", () => {
    showBottomPopup();
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.id !== "a" &&
      e.target.id !== "top" &&
      e.target.id !== "c" &&
      e.target.id !== "bottom"
    ) {
      clearTimeout(acceptTimer);
      clearTimeout(cancelTimer);
      popTop.classList.remove("show");
      popTop.classList.add("hide");
      popBottom.classList.remove("show");
      popBottom.classList.add("hide");
    }
  });
});
