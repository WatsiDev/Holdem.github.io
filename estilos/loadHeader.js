function loadHTML(element, file) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status == 200) {
            element.innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML(document.querySelector("header"), "header.html");
    loadHTML(document.querySelector("footer"), "footer.html");
});
