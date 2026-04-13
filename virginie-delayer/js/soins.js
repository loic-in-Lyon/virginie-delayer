fetch("data/soins.json")
  .then(res => res.json())
  .then(articles => {

    const container = document.getElementById("soins")

    articles.forEach(article => {

      const div = document.createElement("a")
      div.className = "article";
      div.setAttribute("href", "massage-soin.html?slug=" + article.slug);
      div.innerHTML = `

        <div class="row spb">
          <h3>– ${article.title} –</h3>
          <p>Prix: ${article.prix}€</p>
        </div>
        <p>Durée:${article.duree}</p>
        <p>${article.resume}</p>
        <a>
        Voir détails
        </a>
      `


      container.appendChild(div)

    })

  })
