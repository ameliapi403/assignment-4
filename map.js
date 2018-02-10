function initMap() {
    var jap = {lat: 36.544927, lng: 138.347990}; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: jap
    });
    var marker = new google.maps.Marker({
        position: jap,
        map: map
    });
}