let selectedTiles = [];

document.addEventListener('click', (event) => {

    if (!event.target.classList.contains('tile')) return;
    event.target.classList.add('selected');
    selectedTiles.push(event.target);

    if (selectedTiles.length >= 9) {
        const interval = setInterval(() => {
            const tile = selectedTiles.shift();
            tile.classList.remove('selected')

            if (selectedTiles.length === 0) {
                clearInterval(interval);
            }
        }, 100)
    }
})