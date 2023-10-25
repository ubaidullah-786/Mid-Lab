const state = document.querySelectorAll(".faq-toggle");
state.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentNode.classList.toggle("active");
  });
});

const task = document.querySelector(".faq-container");
const question = document.querySelector(".query-space");
const answer = document.querySelector(".answer-space");

function update() {
  const card = document.createElement("div");
  task.appendChild(card);
  card.classList.add("faq");
  card.innerHTML = ` <h3 class="faq-title">${question.value}</h3>

  <p class="faq-text">${answer.value}</p>

  <button class="faq-toggle" onclick="myupdate(this)">
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-times"></i>
  </button>`;

  question.value = "";
  answer.value = "";
}

function myupdate(f) {
  f.parentNode.classList.toggle("active");
}