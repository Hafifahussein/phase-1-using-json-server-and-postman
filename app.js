const articleList = document.getElementById("article-list");
const form = document.getElementById("article-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const BASE_URL = "http://localhost:3000/articles";

// GET articles
fetch(BASE_URL)
  .then((res) => res.json())
  .then((articles) => {
    articles.forEach(renderArticle);
  });

function renderArticle(article) {
  const li = document.createElement("li");
  li.textContent = `${article.title} — ${article.content}`;
  articleList.appendChild(li);
}

// POST article
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newArticle = {
    title: titleInput.value,
    content: contentInput.value,
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  })
    .then((res) => res.json())
    .then((article) => {
      renderArticle(article);
      form.reset(); 
    });
});
