window.addEventListener('load', () => {
    loadRecentProjects();
});

async function loadRecentProjects() {
    try {
        const response = await fetch(rutaProjects);
        const data = await response.json();
        appendJsonToProjectArticles(data);
    } catch (e) {
        console.log(e);
    } finally {

    }
}