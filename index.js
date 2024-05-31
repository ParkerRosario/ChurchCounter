//theme
document.addEventListener("DOMContentLoaded", function () {
  const nineAmButton = document.getElementById("nine-am-button");
  const elevenAmButton = document.getElementById("eleven-am-button");

  nineAmButton.addEventListener("click", function () {
    document.body.className = 'nine-am';
  });

  elevenAmButton.addEventListener("click", function () {
    document.body.className = 'eleven-am';
  });


  document.body.className = 'nine-am';
});
//theme end

//counter
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function minus() {
  count -= 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

//counter end


