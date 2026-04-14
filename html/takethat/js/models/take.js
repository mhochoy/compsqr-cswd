export default class Take {
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