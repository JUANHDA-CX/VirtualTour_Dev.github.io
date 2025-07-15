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

document.querySelectorAll('.play-tag').forEach(tag => {
    tag.addEventListener('click', function () {
        const viewerCover = document.querySelector('.cover-v');
        const viewer = document.getElementById('viewer');
        const btnText = document.querySelector('.play-txt');
        const isCoverHidden = viewerCover.style.display === 'none';

        if (isCoverHidden) {
            // bloquear visor
            viewerCover.style.display = 'block';
            viewerCover.style.pointerEvents = 'auto';
            viewer.style.pointerEvents = 'none';
            btnText.textContent = 'INGRESAR';
        } else {
            // desbloquear visor
            viewerCover.style.display = 'none';
            viewerCover.style.pointerEvents = 'none';
            viewer.style.pointerEvents = 'auto';
            btnText.textContent = 'SALIR';
        }
    });
});
/*
window.addEventListener('orientationchange', () => {
    // 0 o 180 es vertical (portrait)
    if (window.orientation === 0 || window.orientation === 180) {
        location.reload();
    }
});*/

const scrollBtn = document.getElementById("scrollBtn");
const playTag = document.querySelector(".play-tag"); // o ".tag-play" si ese es el nombre real

// Vibración al hacer clic en scrollBtn
scrollBtn.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate(50); // vibra por 100ms
    }
});

// Vibración al tocar playTag
playTag.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50, 100, 50]); // patrón: vibra 50ms, pausa 100ms, vibra 50ms
    }
});

