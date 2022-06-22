let form = document.getElementById("addForm");
let container = document.querySelector(".container");
form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleRemove);

function handleSubmit(e) {
  e.preventDefault();

  let imageUrl = document.getElementById("memeImage").value;
  let textAbove = document.getElementById("aboveText").value;
  let textBelow = document.getElementById("bottomText").value;
  let row = document.getElementById("memeRow");

  row.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-md-6 col-12">
          <div class="meme">
            <div class="overlay"><span class="oi oi-x"></span></div>
            <p>${textAbove}</p>
            <img
              src="${imageUrl}"
            />
            <p>${textBelow}</p>
          </div>
        </div>
       `
  );

  e.target.reset();
}

function handleRemove(e) {

  if (e.target.classList.contains("overlay")) {
    e.target.parentElement.parentElement.remove();
  }
}
