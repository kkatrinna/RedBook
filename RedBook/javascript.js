function navigateTo(url) {
  window.location.href = url;
}

function navigateTo(url) {
  window.location.href = url;
}

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.757197, 37.427884], 
        zoom: 20
    });

    var placemark1 = new ymaps.Placemark([55.774602, 37.374917], {
        balloonContent: 'Ёж, гадюка, уж, кутора, зелёная лягушка, травянка толстоголовая, скакун полевой, жужелица гладкая'
    });

    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
});

const toggleDescriptionButtons = document.querySelectorAll('.toggle-description');

toggleDescriptionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const longDescription = button.previousElementSibling;
        longDescription.style.display = longDescription.style.display === 'none' ? 'block' : 'none';
    });
});