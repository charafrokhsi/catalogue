let count = 0;

function ajouter(nom) {
    count++;
    document.getElementById("count").textContent = count;
    alert(nom + " ajouté au panier !");
}