

document.addEventListener("DOMContentLoaded", () => {
    var dropdownTarget = document.getElementById("category");

    if (dropdownTarget) {
        fetch("/html/takethat/includes/category.html").then(result => result.text())
        .then((data) => {
            dropdownTarget.innerHTML = data;
        })

        .catch((err) => {console.error("Couldn't inject category html!")})
        
    }
});

document.addEventListener("submit", () => {
    get_data();
})

const http = new XMLHttpRequest();

function get_data() {
    let take = new Take();
    var author = document.getElementById("name");
    var message = document.getElementById("message");
    var date = new Date(Date.now());

    var category = document.getElementById("category")
    
    take.author = author;
    take.message = message;
    take.date = date;
    take.category = category;

    http.open("POST", "http://127.0.0.1:8000/submit/", false);
    http.setRequestHeader("Content-Type", "application/json");
    //http.send(JSON.stringify(take));

    console.log("Information sent");
};

class Take {
    author;
    message;
    date;

    category;
    reactions;

    constructor(author, message, date, category = null, reactions = null) {
        this.author = author;
        this.message = message;
        this.date = date;
        this.category = category;
        this.reactions = reactions;
    }

    // GET

    getAuthor() {
        return this.author;
    }

    getMessage() {
        return this.message;
    }

    getDate() {
        return this.date;
    }

    // UPDATE

    updateReactions(reactions) {
        this.reactions = reactions;
    }
}