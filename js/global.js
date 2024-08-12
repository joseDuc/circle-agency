var rutaProjects = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'

window.addEventListener('load',()=>{
    insertFormNewsLetter();
    insertFooter();
});
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
    img.alt = project.image;
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

function insertFormNewsLetter() {
    const news = document.querySelector('#newsletter');
    if (news) {
        const f = document.createElement('form');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const i =document.createElement('input');
        const b=document.createElement('button')
        const d =document.createElement('div');
        h3.innerText = 'Do you have any questions?';
        f.appendChild(h3);
        p.innerText = 'Let us help you!'
        f.appendChild(p)
        i.type='email';
        i.placeholder='Enter your email';
       
        b.type='submit';
        b.innerText='Subscribe';
        b.className='btn';
        d.class='suscribe';
        d.appendChild(i);
        d.appendChild(b);
        f.appendChild(d);
        news.appendChild(f);
        f.className='centeredAtNucleo';
        f.action='../html/contact.html'
    }
}

function insertFooter(){
const f =document.querySelector('#footer');

if (f){
    const div=document.createElement('div');
    const divLogo=document.createElement('div');
    const divLinks=document.createElement('div');
    const img=document.createElement('img');
    const p=document.createElement('p');
    let i =document.createElement('a');
    i.innerText='Team';
    divLinks.appendChild(i);
     i =document.createElement('a');
    i.innerText='Services';
    divLinks.appendChild(i);
     i =document.createElement('a');
    i.innerText='About Us';
    divLinks.appendChild(i);
     i =document.createElement('a');
    i.innerText='Press';
    divLinks.appendChild(i);
     i =document.createElement('a');
    i.innerText='Projects';
    divLinks.appendChild(i);
     i =document.createElement('a');
    i.innerText='Privacy Policy';
    divLinks.appendChild(i);
     i =document.createElement('a');
    divLinks.className='footer-links';

    i =document.createElement('a');
    i.href='';
    img.src='../img/logos/circle.svg';
    img.alt='logo';
    i.appendChild(img)
    divLogo.appendChild(i);
    p.innerText='2972 Westheimer Rd. Santa Ana, Illinois 85486 ';
    
    
   

    divLogo.appendChild(p);
    divLogo.className='footer-logo';
    div.className='container centeredAtNucleo';
    div.appendChild(divLogo);
    div.appendChild(divLinks);
    f.appendChild(div);
    
}
}
function getQuerystring(param) {
    //un método que he de aprender para encontrar cualquier parámetro del querystring en cualquier futura URL
    alert('query')
    if (param){
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop)
        });
        switch (param.toLowerCase()){
            case 'id':
                return params.id;
            case 'email':
                return params.email;
            default:
                return null;
        }
    }else{
        return null;
    }
    
    
}