window.addEventListener('load', () => {
    loadRecentProjects();
});

async function loadRecentProjects() {
    try {
        const response = await fetch(rutaProjects);
        const data = await response.json();
        const projectID = getQuerystring('id');
        if (projectID) {
            const mainIdx = data.findIndex(
                (project) => project.uuid == projectID
            );
            if (mainIdx>-1){
                const project = data[mainIdx];
                appendJsonToMainProject(project);
                data.splice(mainIdx,1);
            }
        }
        appendJsonToProjectArticles(data);
    } catch (e) {
        console.log(e);
    } finally {

    }
}