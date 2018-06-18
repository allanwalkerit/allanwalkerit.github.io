var a = function tableau(){
     a = function tableau(){};
};




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function segy() {
$("#tableauViz2").show();
$("#tableauViz1").hide();
}

function las() {
$("#tableauViz1").show();
$("#tableauViz2").hide();
}

function openthemap() {
$("#tableauViz2").hide();
$('#hamburgerhell').show();

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsYW53YWxrZXIiLCJhIjoiY2phbHVlOHQ4MnZscDMycGJoaTdiaHRxOCJ9.OYLAoMVg6e3Ih4r65WJuvA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/allanwalker/cjgwes4dj000x2rmn1efrmdi2?fresh=true',
    center: [-92.056416,30.019793],
    zoom: 7,
    pitch: 0,
    bearing: 0
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['wells'] });
    if (!features.length) {
        return;
    }
var Data = JSON.stringify(features);
var jsonData = JSON.parse(Data);
var WELLNAME = features[0].properties.WELL_NAME;
var DEPOSITS = features[0].properties.TOTAL_DEPT;
var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML('Well Name: '+WELLNAME+'<br><br>'+'Total Deposits: '+DEPOSITS+'<br><br>'+'<button type="button" class="btn btn-info" onclick="las()">LAS</button>'+'&nbsp;'+'<button type="button" class="btn btn-info" onclick="segy()">SEG-Y</button>'+'<div id="tableauViz1"></div>'+'<div id="tableauViz2"></div>')
        .addTo(map);
        tableau();

function tableau() {
        var onePh = document.getElementById("tableauViz1");
        var twoPh = document.getElementById("tableauViz2");
        var oneUrl = "https://public.tableau.com/views/BID4ONG/Dashboard1?";
        var twoUrl = "https://public.tableau.com/views/BID4ONG/Dashboard2?";
var params="&:showVizHome=no&:display_spinner=n&:jsdebug=n&:embed=y&:display_overlay=no&:display_static_image=no&:animate_transition=yes";
  var vizOptions = {
  width: "100%",
  height: "100%",
            hideTabs: false,
            onFirstInteractive: function() {
$("#tableauViz2").hide();
}
        };
viz1 = new tableauSoftware.Viz(onePh, oneUrl + params, vizOptions);
viz2 = new tableauSoftware.Viz(twoPh, twoUrl + params, vizOptions);
}
});
};