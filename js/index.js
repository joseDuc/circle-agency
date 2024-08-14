window.addEventListener('load', () => {
    loadRecentProjects();
});

async function loadRecentProjects() {
    try {
        const response = await fetch(urlProjects);
        const data = await response.json();
        appendJsonToProjectArticles(data);
    } catch (e) {
        console.log(e);
    } finally {

    }
}