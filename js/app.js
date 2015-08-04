var electricosE = angular.module('electricosEspecializados', ['ngRoute']);

electricosE.config(function ($routeProvider){
    $routeProvider
        .when("/",{
            controller:"home",
            templateUrl:"templates/home.html"
        })
        .when("/imagenes",{
            controller:"images",
            templateUrl:"templates/imagenes.html"
        })
        .when("/nosotros",{
            controller:"nosotros",
            templateUrl:"templates/nosotros.html"
        })
        .when("/productosyservicios",{
            controller:"productosyservicios",
            templateUrl:"templates/productosyservicios.html"
        })
        .when("/contactenos",{
            controller:"contactenos",
            templateUrl:"templates/contactenos.html"
        })
        .when("/admin",{
            controller:"admin",
            templateUrl:"templates/admin.html"
        });
});

electricosE.controller("home", function ($scope) {
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        captions: true,
        speed: 5000
    });
    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
});

electricosE.controller("nosotros", function ($scope) {
    
});

electricosE.controller("productosyservicios", function ($scope) {
    
});

electricosE.controller("images", function ($scope) {
    url = (location.href).replace(/^[a-zA-Z-0-9:\/]*[#\/]*[a-zA-Z-0-9:\/]*[?]*/, '');
    if (url!=''){
        console.log(url);
        
    }
});

electricosE.controller("contactenos", function ($scope) {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});

electricosE.controller("admin", function ($scope, $http) {
    
});