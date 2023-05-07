const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
// 아이템 li자체
const items = article.querySelectorAll("li");
const cart = document.querySelector(".cart");
const buyBtn = document.querySelector(".btn-buy");


// li각각 클릭하면
items.forEach(v => v.addEventListener('click', () => {

  // 노드클론화 해서 카트에 li 그대로 넣기
  cart.append(v.cloneNode(true))
  closePopup()
  // 버튼을 보이게하고
  buyBtn.style.display = 'block'
}))

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (!e.shiftKey && e.key === "Tab") {
    // console.log("tab만 누름");
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.key === "Tab") {
    // console.log("shift + tab");
    e.preventDefault();
    closeBtn.focus();
  }
});