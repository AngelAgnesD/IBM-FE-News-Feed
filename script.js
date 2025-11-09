const newsContainer = document.getElementById('news-container');

const newsData = [
  { title: "AI Revolutionizes Healthcare", description: "AI tools are improving diagnosis accuracy and patient outcomes." },
  { title: "Climate Change Action", description: "Global efforts to reduce carbon emissions are accelerating in 2025." },
  { title: "Tech Startups in India", description: "Indian startups are booming with innovations in AI, fintech, and education." },
];

newsContainer.innerHTML = "";
newsData.forEach(article => {
  const div = document.createElement("div");
  div.classList.add("news-item");
  div.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
  newsContainer.appendChild(div);
});
