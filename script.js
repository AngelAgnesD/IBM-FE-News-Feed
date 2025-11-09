let newsList = document.getElementById("newsList");
let previewBox = document.getElementById("newsPreview");
let previewImage = document.getElementById("previewImage");
let previewTitle = document.getElementById("previewTitle");
let previewContent = document.getElementById("previewContent");

function addNews() {
  let title = document.getElementById("title").value.trim();
  let content = document.getElementById("content").value.trim();
  let imageInput = document.getElementById("imageInput");

  if (title === "" || content === "") {
    alert("Please enter both title and content!");
    return;
  }

  let li = document.createElement("li");
  li.className = "news-item";

  let imgURL = "";
  if (imageInput.files.length > 0) {
    imgURL = URL.createObjectURL(imageInput.files[0]);
  }

  li.innerHTML = `<strong>${title}</strong>`;
  li.onclick = function() {
    showPreview(title, content, imgURL);
  };

  newsList.prepend(li);

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  imageInput.value = "";
}

function showPreview(title, content, imgURL) {
  previewBox.style.display = "flex";
  previewTitle.innerText = title;
  previewContent.innerText = content;
  previewImage.src = imgURL || "https://via.placeholder.com/400x200?text=No+Image";
}
