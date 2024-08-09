var rutaProjects = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'

function appendJsonToProjectArticles(data) {
    const container = document.querySelector('#projects .container');
    if (container) {
        container.innerHTML = "";
        if (data) {
            data.forEach((element) => {
                container.appendChild(convertToProjectArticle(element));

            });
        }
    }
}

function convertToProjectArticle(project) {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.appendChild(convertToProyectAnchor(project));
    return article;
}

function convertToProyectAnchor(project) {
    const anchor = document.createElement('a');
    const img = document.createElement('img');
    anchor.className = 'project-anchor';
    anchor.href = `./html/projects.html?id=${project.uuid}`;
    img.className = 'project-img';
    img.src = project.image;
    img.alt=project.image;
    anchor.appendChild(img);
    anchor.appendChild(convertToProjectText(project));
    return anchor;
}

function convertToProjectText(project) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const a = document.createElement('a');
    div.className = 'project-text';
    h3.className = 'project-title';
    h3.innerText = project.name;
    div.appendChild(h3);
    p.className = 'project-description';
    p.innerText = project.description;
    div.appendChild(p);
    a.className = 'project-learnMore';
    a.innerText = 'Learn more';
    a.href = `./html/projects.html?id=${project.uuid}`;
    div.appendChild(a);
    return div;
}