const projects = [
    { "name": "Calculator", "htmlPath": "Projects/Calculator/index.html" },
    { "name": "Etch-a-Sketch", "htmlPath": "Projects/Etch-a-Sketch/index.html" },
    { "name": "Rock-Paper-Scissors", "htmlPath": "Projects/Rock-Paper-Scissors/index.html" },
    { "name": "Library", "htmlPath": "Projects/Library/index.html" }
];

const container = document.getElementById('projects-list');

projects.forEach(project => {
    const link = document.createElement('a');
    link.href = project.htmlPath;

    const div = document.createElement('div');
    div.className = 'container';

    const p = document.createElement('p');
    p.textContent = project.name;

    div.appendChild(p);
    link.appendChild(div);

    container.appendChild(link);
});
