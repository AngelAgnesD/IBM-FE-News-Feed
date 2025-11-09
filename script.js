let newsList = document.getElementById("newsList");

function addNews() {
  let title = document.getElementById("title").value.trim();
  let content = document.getElementById("content").value.trim();

  if (title === "" || content === "") {
    alert("Please enter both title and content!");
    return;
  }

  let li = document.createElement("li");
  li.className = "news-item";
  li.innerHTML = `<strong>${title}</strong>`;
  li.onclick = function() {
    alert(content);
  };

  newsList.prepend(li);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
