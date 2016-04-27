(function(){
angular.module('beerApp',[])
.controller('beerController', beerCtrl);

    beerCtrl.$inject=['$http']
    function beerCtrl($http){
        var bCtrl = this
    bCtrl.searchGiphy = function() {
      $http.get('https://api.giphy.com/v1/gifs/search?q=' + bCtrl.giphySearch + '&api_key=dc6zaTOxFJmzC')
          .then(function(response){
              console.log(response.data.data)
              bCtrl.results=response.data.data
      })  
    }






    }
}());
