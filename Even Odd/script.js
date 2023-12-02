function helper() {
    var a = document.getElementById("input").value;
    if (a % 2 == 0) {
        document.getElementById("even").style.display = "block";
        document.getElementById("odd").style.display = "none";
    } else {
        document.getElementById("odd").style.display = "block";
        document.getElementById("even").style.display = "none";
    }
}