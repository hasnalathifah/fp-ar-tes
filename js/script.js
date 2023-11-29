window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: -7.2892116,
                lng: 112.7969294,
            }
        },
    ];
  }
  
  function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
  
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
  
        let model = document.createElement('a-box');
        model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('material', { color: 'blue' } );
        model.setAttribute('scale', '0.5 0.5 0.5');
  
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
  
        scene.appendChild(model);
    });
  }
  