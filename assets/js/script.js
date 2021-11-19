setInterval(function() {
    const words = document.getElementsByClassName("word");
    let currentId = 1;

    for (const word of words) {
        if (word.classList.contains("active")) {
            currentId = parseInt(word.attributes.getNamedItem("data-id").value);
        }
    }

    const nextId = currentId === words.length ? 1 : currentId + 1

    for (const word of words) {
        word.classList.remove("active");
        if (parseInt(word.attributes.getNamedItem("data-id").value) === nextId) {
            word.classList.add("active");
        }
    }
}, 3000);