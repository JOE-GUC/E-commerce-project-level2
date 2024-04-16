
        async function fetchArticles() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const articles = await response.json();
                // Display articles
                const articlesList = document.getElementById('articles-list');
                articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.innerHTML = `<h2>${article.title.slice(0,22)}</h2>
                    <img src="${article.image}"/>
                    <p>${article.description.slice(0,42)}</p><p>Price: $${article.price}</p>`;
                    articlesList.appendChild(articleElement);
                });
            } catch (error) {
                console.error('There was a problem fetching articles:', error);
            }
        }

        fetchArticles();
    