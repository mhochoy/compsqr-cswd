const http = new XMLHttpRequest();

http.open("GET", "http://localhost:8000/takes", false);
http.send();

document.addEventListener("DOMContentLoaded", () => {
    const takesTarget = document.getElementById("takes");

    if (takesTarget) {
        var map = JSON.parse(http.response);
        map["takes"].forEach((take) => {
            takesTarget.innerHTML += 
           `<div class="take">
                <div id="message">
                    <p><em>${take["take"]}</em></p>
                </div>
                <div id="author">
                    <p><small>by ${take["name"]}</small></p>
                </div>
                <div id="date">
                    <p><small>submitted on ${take["date"]}</small></p>
                </div>
            </div>`
        })
    }
})