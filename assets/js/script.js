setInterval(function() {
    const words = document.getElementsByClassName("word");
    let currentId = 1;

    for (const word of words) {
        if (word.classList.contains("active")) {
            currentId = parseInt(word.attributes.getNamedItem("data-id").value);
        }
    }

    const nextId = currentId === words.length ? 1 : currentId + 1;

    for (const word of words) {
        word.classList.remove("active");
        if (parseInt(word.attributes.getNamedItem("data-id").value) === nextId) {
            word.classList.add("active");
        }
    }
}, 3000);

const arrowBtn = document.getElementsByClassName("arrow")

for (const btn of arrowBtn) {
    btn.addEventListener("click", function() {
        const about = document.getElementsByClassName("about")[0];
        const aboutPages = about.children;
        let currentId = 1;
        let nextId;

        for (const aboutPage of aboutPages) {
            if (aboutPage.classList.contains("active")) {
                currentId = parseInt(aboutPage.attributes.getNamedItem("data-id").value);
            }
        }

        if (this.classList.contains("prev")) {
            nextId = currentId === 1 ? aboutPages.length : currentId - 1;
        }
        else {
            nextId = currentId === aboutPages.length ? 1 : currentId + 1;
        }

        for (const aboutPage of aboutPages) {
            aboutPage.classList.remove("active");
            if (parseInt(aboutPage.attributes.getNamedItem("data-id").value) === nextId) {
                aboutPage.classList.add("active");
            }
        }
    });
}