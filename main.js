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
        const viewer = document.getElementById('viewer');
        const btnText = tag.querySelector('p');
        const isUnlocked = viewer.classList.contains('viewer-unlocked');

        if (isUnlocked) {
            // Bloquear viewer
            viewer.style.pointerEvents = 'none';
            viewer.classList.remove('viewer-unlocked');
            btnText.textContent = 'INGRESAR';
        } else {
            // Desbloquear viewer
            viewer.style.pointerEvents = 'auto';
            viewer.classList.add('viewer-unlocked');
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