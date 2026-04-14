const http = new XMLHttpRequest();

http.open("GET", "http://localhost:8000/daily/", false);
http.send();

document.addEventListener("DOMContentLoaded", () => {
    const dailyTarget = document.getElementById("daily");

    if (dailyTarget) {
        var map = JSON.parse(http.response)["daily"];

        dailyTarget.innerHTML = 
        `
        <div id="message">
            <p><em>${map["take"]}</em></p>
        </div>
        <div id="author">
            <p><small>by ${map["name"]}</small></p>
        </div>
        <div id="date">
            <p><small>submitted on ${map["date"]}</small></p>
        </div>
        `
    }
})