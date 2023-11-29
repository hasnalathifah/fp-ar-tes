window.onload = () => {
    // let places = staticLoadPlaces();
    renderPlaces();
};

// function staticLoadPlaces() {
//     return [
//         {
//             name: 'Magnemite',
//             location: {
//                 lat: -7.2892116,
//                 lng: 112.7969294,
//             }
//         },
//     ];
//   }
  
  function renderPlaces() {
    let scene = document.querySelector('a-scene');
    let lat = JSON.parse(sessionStorage.getItem('lat'));
    let lon = JSON.parse(sessionStorage.getItem('lon'));
    // console.log(lat);
    // console.log(lon);
  
    for (let i = 0; i < lat.length; i++) {
        let latitude = lat[i];
        let longitude = lon[i];
        console.log(latitude);
        console.log(longitude);
        let model = document.createElement('a-entity');
        model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        // model.setAttribute('material', { color: 'blue' } );
        model.setAttribute('look-at', '[gps-new-camera]')
        model.setAttribute('gltf-model', '#animated-asset');
        model.setAttribute('animation-mixer', 'loop: repeat');
        model.setAttribute('scale', '0.6633601288757837 0.6633601288757837 0.6633601288757837');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
        scene.appendChild(model);
    }
  }
  
