document.addEventListener('scroll', function () {
    progress();
    hideSidebar();
});

function progress() {
    const sections = document.getElementsByTagName("section");
    const nodes = document.getElementsByTagName("nodes");

    if (nodes[0]) {
        for (var i = 0; i < sections.length; i++) {
            if (isInViewport(sections[i])) {
                nodes[i].style.width = "20px";
                nodes[i].style.height = "20px";
            }
            else {
                nodes[i].style.width = "10px";
                nodes[i].style.height = "10px";
            }
        }
    }
}

function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    const progressContainer = document.getElementById("progressContainer");
    const sections = document.getElementsByTagName("section");

    if (screen.width <= 600) {
        if (window.scrollY >= 100) {
            sidebar.style.left = "-80px";

            for (var i = 0; i < sections.length; i++) {
                sections[i].style.marginLeft = 0;
            }

            if (progressContainer) {
                progressContainer.style.left = "-11px";
            }
        }
        else {
            sidebar.style.left = "0";

            for (var i = 0; i < sections.length; i++) {
                sections[i].style.marginLeft = "70px";
            }

            if (progressContainer) {
                progressContainer.style.left = "61px";
            }
        }
    }
    else {
        sidebar.style.left = "0";
        progressContainer.style.left = "61px";
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
    const elementHeight = rect.height;
    const elementWidth = rect.width;
    const halfElementHeight = elementHeight / 2;
    const halfElementWidth = elementWidth / 2;

    return (
        visibleHeight >= halfElementHeight &&
        visibleWidth >= halfElementWidth
    );
}


