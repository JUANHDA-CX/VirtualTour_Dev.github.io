//fitty

document.fonts.ready.then(() => {

    fitty('.tittle01', {
        minSize: 8,
        maxSize: 512,
    });

    fitty('.tittle02', {
        minSize: 2,
        maxSize: 512,
        multiLine: false,
    });

    fitty('.tittle03', {
        minSize: 8,
        maxSize: 512,
    });

    fitty('.tittle04', {
        minSize: 2,
        maxSize: 512,
        multiLine: true,
    });

});

// viewer 360 cover

document.querySelectorAll('.play-tag').forEach(tag => {
    tag.addEventListener('click', function () {
        const viewerCover = document.querySelector('.cover-v');
        const viewer = document.getElementById('viewer');
        const btnText = document.querySelector('.play-txt');
        const isCoverHidden = viewerCover.style.display === 'none';

        if (isCoverHidden) {
            // lock viewer
            viewerCover.style.display = 'block';
            viewerCover.style.pointerEvents = 'auto';
            viewer.style.pointerEvents = 'none';
            btnText.textContent = 'INGRESAR';
        } else {
            // unlock viewer
            viewerCover.style.display = 'none';
            viewerCover.style.pointerEvents = 'none';
            viewer.style.pointerEvents = 'auto';
            btnText.textContent = 'SALIR';
        }
    });
});


// Vibration action
const exploreTag = document.querySelector(".explore-tag");
const playTag = document.querySelector(".play-tag");

exploreTag.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate(50); // duration
    }
});


playTag.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50, 100, 50]); // pattern duration
    }
});


// explore-play scroll to down
document.querySelector(".explore-tag").addEventListener("click", () => {
    const offset = window.innerHeight * 0.75;
    window.scrollBy({
        top: offset,
        behavior: "smooth"
    });
});
