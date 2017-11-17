angular.module('ward', [])
.controller('mainCtrl', [
  '$scope',
  function($scope){
    $scope.floors = [
      {value: "1", label: "1st Floor"},
      {value: "2", label: "2nd Floor"},
      {value: "3", label: "3rd Floor"}
    ];
    $scope.curFloor = $scope.floors[0];
    
    $scope.movedIn = [
      { lastName: "Smith", members: [ 
          { name: "David", phone: "801-123-4567", email: "davidsmith@email.com" },
          { name: "Emily", phone: "801-321-7654", email: "emilysmith@email.com" }
        ], building: "union2", apt: "100" },
      { lastName: "Johnson", members: [
          { name: "John", phone: "801-123-4567", email: "jj@email.com" },
          { name: "Jane", phone: "801-321-7654", email: "jj2@email.com" },
          { name: "Jamie", phone: "", email: "" }
        ], building: "union2", apt: "110" },
      { lastName: "Adams", members: [
          { name: "Adam", phone: "801-123-4567", email: "firstman@email.com" },
          { name: "Eve", phone: "801-321-7654", email: "firstwoman@email.com" }
        ], building: "union2", apt: "127" }
    ];
  }
]);

function initMap() {
  var ward = {lat: 40.239543, lng: -111.652089};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 21,
    center: ward,
    mapTypeId: 'satellite',
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  });
}

