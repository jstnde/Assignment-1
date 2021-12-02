// find current page
const pages = ["index", "about-me", "project", "contact"];
const currentPage = window.location.href;
let pageNo = 0;

for (const pagesKey in pages) {
    if (currentPage.includes(pages[pagesKey])) {
        pageNo = parseInt(pagesKey);
    }
}

switch (pageNo) {
    case 0:
        wordWrap();
        break;
    case 1:
        email();
        pageWrap();
        break;
    case 2:
        pageWrap();
        break;
    case 3:
        email();
        break;
    default:
        break;
}

// 3 second word wrap
function wordWrap() {
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
}

// page "carousel"
function pageWrap() {
    const arrowBtn = document.getElementsByClassName("arrow")

    for (const btn of arrowBtn) {
        const pageName = btn.parentElement.children[1].classList[0];
        const page = document.getElementsByClassName(pageName)[0];
        const pageChildren = page.children;

        if (pageChildren.length < 2) {
            btn.setAttribute("style", "visibility: hidden;");
        }

        btn.addEventListener("click", function() {
            let currentId = 1;
            let nextId;

            for (const children of pageChildren) {
                if (children.classList.contains("active")) {
                    currentId = parseInt(children.attributes.getNamedItem("data-id").value);
                }
            }

            if (this.classList.contains("prev")) {
                nextId = currentId === 1 ? pageChildren.length : currentId - 1;
            }
            else {
                nextId = currentId === pageChildren.length ? 1 : currentId + 1;
            }

            for (const children of pageChildren) {
                children.classList.remove("active");
                if (parseInt(children.attributes.getNamedItem("data-id").value) === nextId) {
                    children.classList.add("active");
                }
            }
        });
    }
}

// email alert
function email() {
    const emailBtns = document.getElementsByClassName("email");
    for (const emailBtn of emailBtns) {
        emailBtn.addEventListener("click", function() {
            alert("Thank you for contacting me! :))");
        });
    }
}

// display project description (mobile)
function displayDescription(e) {
    const holder = e.parentElement.parentElement;

    for (const child of holder.children) {
        const classes = child.classList;
        if (classes.contains("box")) {
            if (classes.contains("active")) {
                classes.remove("active");
            }
            else {
                classes.add("active");
            }
        }
    }
}