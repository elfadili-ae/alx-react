import $ from 'jquery';

function addParagraph(paragraph) {
    const body = document.body;
    let bodyContent = body.innerHTML;
    bodyContent += `<p>${paragraph}</p>`
    body.innerHTML = bodyContent
}

document.addEventListener("DOMContentLoaded", () => {
    addParagraph("Holberton Dashboard");
    addParagraph("Dashboard data for the students");
    addParagraph("Copyright - Holberton School");
});

