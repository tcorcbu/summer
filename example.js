angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  
  
  $scope.dateIdeas = [
      {
          id: 0,
          title: "Rent a sailboat on the Charles",
          description: "Rent a sailboat in the late afternoon / evening and sail around during sunset on the river",
          link: "https://www.community-boating.org/rentals/sailboat-rentals/",
          imageUrl: "https://s3.amazonaws.com/boatbound_production/city_template_photos/city_photos/000/000/053/scaled_down_1440/charles_river_2.jpg",
          date: "",
          status: ""
      }, 
      {
          id: 1,
          title: "Boston Harbor Sunset Cruise",
          description: "Take a tour of Boston Harbor during sunset",
          link: "https://www.bostonharborcruises.com/harbor-cruises/sunset-cruise/",
          imageUrl: "https://www.bostonharborcruises.com/media/5574/istock-611215172.jpg",
          date: "",
          status: ""
      },
      {
          id: 2,
          title: "Boston Harbor Islands Cruise",
          description: "Take a ferry over and explore one of the islands in Boston Harbor",
          link: "https://www.bostonharborcruises.com/harbor-islands/",
          imageUrl: "https://www.bostonharborcruises.com/media/1073/spectacleisland_header.jpg",
          date: "",
          status: ""
      },
      {
          id: 3,
          title: "Revere Hotel Rooftop Pool",
          description: "Take a ferry over and explore one of the islands in Boston Harbor",
          link: "https://www.reverehotel.com/eat-drink/rooftop-revere",
          imageUrl: "https://cdn10.bostonmagazine.com/wp-content/uploads/2013/05/RTP.jpg",
          date: "",
          status: ""
      },
      {
          id: 4,
          title: "Walk Through Boston Public Garden",
          description: "Take a ferry over and explore one of the islands in Boston Harbor",
          link: "https://www.boston.gov/parks/public-garden",
          imageUrl: "https://cdn10.bostonmagazine.com/wp-content/uploads/2015/04/boston-public-garden.jpg",
          date: "",
          status: ""
      },
      {
          id: 5,
          title: "SoWa Public Market",
          description: "Visit shops and events at SoWa",
          link: "http://www.sowaboston.com/",
          imageUrl: "https://static1.squarespace.com/static/569033a240667a56fc7f0f89/57dcbae92994ca976a6ac236/58750816d482e98528715aa3/1484064867229/Food+Trucks+%281%29.jpg?format=500w",
          date: "",
          status: ""
      },
      {
          id: 6,
          title: "BU Star Observatory",
          description: "Visit shops and events at SoWa",
          link: "https://www.bu.edu/astronomy/events/public-open-night-at-the-observatory/",
          imageUrl: "http://www.bu.edu/today/files/2016/03/h_butoday_16-9777-OBSERVATORY-060.jpg",
          date: "",
          status: ""
      }
    ];
  
  
  $scope.myInterval = 7000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  

});
