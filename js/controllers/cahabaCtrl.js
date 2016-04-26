angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("CahabaCtrl", CahabaController);

// Listing the dependencies
CahabaController.$inject = ["$scope", "$http"];

// implementing the dependencies
function CahabaController($scope, $http) {
    // var vm = this;
    // vm.init = init;
    // vm.untappdRating = untappdRating;
    
    // function init() {
    //     untappdRating();
    // }
    
    // var myIndex = 0;
    //     carousel();

    // function carousel() {
    // var i;
    // var x = document.getElementsByClassName("cahabaSlides");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";  
    //     }
    // myIndex++;
    //     if (myIndex > x.length) {myIndex = 1}    
    //          x[myIndex-1].style.display = "block";  
    //          setTimeout(carousel, 2000); // Change image every 2 seconds
    //     }


}