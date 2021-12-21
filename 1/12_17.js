const title = document.querySelector("body"); //body 태그로 전달
title.className = "third";
function handleResize() {
  const winSize = window.innerWidth; // 윈도우 크기
  const sizefirst = "first";
  const sizesecond = "second";
  const sizethird = "third";
  if (winSize < 200) {
    title.classList.remove(sizesecond); // 클래스 이름에 sizesecond 있으면 삭제해라 여기서 sizesecond는 second second클래스는 css 적용
    title.classList.remove(sizethird);
    title.classList.add(sizefirst); // 클래스 이름에 sizefisrt 추가해라 여기서 first클래스 css 적용
  } else if (200 < winSize && winSize <= 400) {
    title.classList.add(sizesecond);
    title.classList.remove(sizethird);
    title.classList.remove(sizefirst);
  } else if (400 < winSize && winSize <= 600) {
    title.classList.remove(sizesecond);
    title.classList.add(sizethird);
    title.classList.remove(sizefirst);
  }
}
window.addEventListener("resize", handleResize);