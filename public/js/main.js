$(document).foundation();

$('.team-pic').hover(function(){
    $(this).children(".overlay").css("background-color","rgba(0,0,0,0.6)");
    $(this).children("h5").show("easeIn").slideDown;
},
    function() {
         $(this).children(".overlay").css("background-color","rgba(0,0,0,0)");
        $(this).children("h5").hide("easOut");
    }
);
$('.work-prof').hover(function(){
    $(this).children(".workhover").css("background-color","rgba(13,48,107,1)");
    $(this).children("h5").show("easeIn").slideDown;
     $(this).children("p").show("easeIn").slideDown;
},
    function() {
         $(this).children(".workhover").css("background-color","rgba(0,0,0,0)");
        $(this).children("h5").hide("easOut");
        $(this).children("p").hide("easOut");
    
    }
);
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(23.755408, 90.366498),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        	var image = '../images/map-pin.png';
  			var myLatLng = new google.maps.LatLng(23.755408, 90.366498);
  			var beachMarker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		icon: image
 		 });

  			map.set('styles', [
{
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
]);
              }
      google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(
    function() { 
    $("html").niceScroll({
        scrollspeed: "80",
        mousescrollstep: "80",
        cursorcolor: "#0D306b",
        cursorwidth: "8",
        cursorborderradius: "0",
        zindex:"10"
    });
  }
);

$(".capability-item").hover(function() {
    $(this).children(".capabilities-text").children().fadeTo("slow",0);
    $(this).children(".capability-svg").show();
    $(this).children(".capability-details").show();
}, function() {
    $(this).children(".capability-svg").hide();
    $(this).children(".capabilities-text").children().fadeTo("slow",1);
    $(this).children(".capability-details").hide();
});
 
 
 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay2').toggleClass('open');
  });

    var $items = $(".work-prof");
    $items.hide();
    $items.slice(0, Math.floor($items.length/2)).show();
 
$( "#show_more" ).click(function() {
  
     var $items = $(".work-prof");
    $items.show();
    $('#show_more').addClass('hidden');
});

    var $items = $(".ins");
    $items.hide();
    $items.slice(0, Math.ceil($items.length/3)).show();

    
$( "#show_more" ).click(function() {
  
     var $items = $(".ins");
    $items.show();
    $('#show_more').addClass('hidden');
});





/* $(function(){
     $(".cs").click(function(){$("html,body").animate({scrollTop:$("#case-studies").offset().top},"500");return true})})
  $(function(){
      $(".cp").click(function(){$("html,body").animate({scrollTop:$("#cap").offset().top},"500");return true})})
   $(function(){
      $(".cl").click(function(){$("html,body").animate({scrollTop:$("#client").offset().top},"500");return true})});*/