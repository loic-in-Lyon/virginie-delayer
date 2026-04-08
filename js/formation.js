const params = new URLSearchParams(window.location.search);

const slug = params.get("slug");

fetch("data/formations.json")
  .then((res) => res.json())
  .then((articles) => {
    console.log(articles);

    const article = articles.find((a) => a.slug === slug);

    const head = document.querySelector("head");
    // créer le title
    const title = document.createElement("title");
    // injecter le contenu
    title.textContent = article.resume;
    // ajouter dans le head
    head.appendChild(title);

    if (!article) return;

    document.getElementById("title").textContent =
      "Formation Massage " + article.title;
    document.getElementById("duree").textContent = "Durée: " + article.duree;
    document.getElementById("content").textContent = article.content;
    article.benefits.forEach((element) => {
      const li = document.createElement("li");
      li.className = "tag";
      li.textContent = element;
      document.getElementById("tag-wrapper").appendChild(li);
    });
  });
