const params = new URLSearchParams(window.location.search)

const slug = params.get("slug")

fetch("data/soins.json")
  .then(res => res.json())
  .then(articles => {

    const article = articles.find(a => a.slug === slug)

    if (!article) return

    document.getElementById("title").textContent = "Massage " + article.title
    document.getElementById("duree").textContent = "Durée: " + article.duree
    document.getElementById("content").textContent = article.content
    article.benefits.forEach(element => {

      const li = document.createElement("li");
      li.className = "tag";
      li.textContent = element;
      document.getElementById("tag-wrapper").appendChild(li);
    });
  })
