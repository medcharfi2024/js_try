(function (){

        const convertType = 'miles';
        const heading = document.querySelector('h1');
        const intro = document.querySelector('p');
        const answerDiv = document.getElementById('answer');
        const form = document.getElementById('convert');

		document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (key === 'k' || key === 'K') {
        convertType = 'kilometre';
        heading.innerHTML = 'Kilometer to Miles Converter';
        intro.innerHTML = 'Type in the number of kilometers and click to convert to miles';
    } else if (key === 'm' || key === 'M') {
        convertType = 'miles';
        heading.innerHTML = 'Miles to Kilometer Converter';
        intro.innerHTML = 'Type in the number of miles and click to convert to kilometers';
    }
});


        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const distance = parseFloat(document.getElementById('distance').value);
            if (!isNaN(distance)) {
                if (convertType === 'miles') {
                    const conversion = (distance * 1.609344).toFixed(3);
                    answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
                } else if (convertType === 'kilometre') {
                    const conversion = (distance * 0.621371).toFixed(3);
                    answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;
                }
            } else {
                answerDiv.innerHTML = '<h2>Please provide a valid number</h2>';
            }
        });
})();