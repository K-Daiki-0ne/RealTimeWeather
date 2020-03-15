export const geoLocation = async () => {
  if (navigator.geolocation) {
    try {
      function (position) {
        location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        console.log(location);
        return location;
      }
    } catch(err) {
      switch (err.cord) {
        case 1:
          alert('This terminal can not allow geolocation');
          break;
        case 2:
          alert('Sorry, failed to get position');
          break;
        case 3:
          alert('Sorry, timeout');
          break;
        default:
          break;
      }
    }
  } else {
    alert('Sorry, this terminal do not using geolocation')
  }
}