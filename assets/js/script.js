window.addEventListener("scroll", function () {
  let floatingBlock = document.querySelector(".floating-block");
  let scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  let scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  let scrolledToBottom = scrollTop + window.innerHeight >= scrollHeight;
  let offset = window.scrollY;
  let middle = scrollHeight / 2;
  if (offset > 76 && offset < middle) {
    floatingBlock.style.cssText = "position:fixed; top: 0";
  }
  if (middle) {
    floatingBlock.style.cssText = "position:fixed; top: 50%; opacity: 0.5";
  }
  if (scrolledToBottom) {
    // you're at the bottom of the page
    floatingBlock.style.cssText =
      "position:fixed; bottom: 0; top: auto; opacity: 1";
  }
  if (offset < 76) {
    floatingBlock.style.cssText = "position:absolute; top: -40px";
  }
});
