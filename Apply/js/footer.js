document.addEventListener("DOMContentLoaded", function() {
    fetch('../01/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

    console.log("Common scripts loaded");
});