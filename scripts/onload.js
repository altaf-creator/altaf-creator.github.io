function addNodes() {
    const collection = document.getElementsByTagName("section");
    const container = document.getElementById("progressContainer");

    for (var i = 0; i < collection.length; i++) {
        container.innerHTML += "<nodes class=\"sidebar-progress-node\"></nodes>\n";
    }
}