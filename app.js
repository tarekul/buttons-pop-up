document.addEventListener("DOMContentLoaded", () => {
  const acceptBtn = document.querySelector(".accept");
  const cancelBtn = document.querySelector(".cancel");

  const popTop = document.querySelector(".popTop");
  const popBottom = document.querySelector(".popBottom");

  let acceptTimer;
  let cancelTimer;
  acceptBtn.addEventListener("click", () => {
    popTop.style.left = "68%";

    acceptTimer = setTimeout(function () {
      popTop.style.left = "100%";
      openTop = false;
    }, 8000);
  });

  acceptBtn.addEventListener("touchend", () => {
    popTop.style.left = "68%";

    acceptTimer = setTimeout(function () {
      popTop.style.left = "100%";
      openTop = false;
    }, 8000);
  });

  cancelBtn.addEventListener("click", () => {
    popBottom.style.left = "68%";

    cancelTimer = setTimeout(function () {
      popBottom.style.left = "100%";
      openBtm = false;
    }, 8000);
  });

  cancelBtn.addEventListener("touchend", () => {
    popBottom.style.left = "68%";

    cancelTimer = setTimeout(function () {
      popBottom.style.left = "100%";
      openBtm = false;
    }, 8000);
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
      popTop.style.left = "100%";
      popBottom.style.left = "100%";
    }
  });
});
