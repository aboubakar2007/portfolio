const citation = document.getElementById("citation")
citation.textContent = "<<Code is like humor. When you have to explain it, it’s bad.>>"
window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    // let largeurEcran = window.innerWidth;

    if (window.scrollY > 40) {
        header.style.borderBottom = "2px solid gray";
        header.style.backgroundColor = "rgb(21, 20, 20)";
        header.style.position = " sticky"
        header.style.top = "0"




    } else {
        header.style.borderBottom = "none";
        header.style.backgroundColor = "";
        header.style.position = "";
        header.style.top = "";


    }

})

function contact() {
    const clickUser = confirm("cliquez sur ok pour continuer !");
    if (clickUser) {
        const lien = document.getElementById("clic")
        lien.href = "contact.html"
    } else {
        alert("action annulé")
    }

}

function contact2() {
    const clickUser = confirm("cliquez sur ok pour continuer !");
    if (clickUser) {
        const lien = document.getElementById("clic2")
        lien.href = "contact.html"
    } else {
        alert("action annulé")
    }

}