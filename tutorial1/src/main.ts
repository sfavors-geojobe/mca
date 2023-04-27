import './style.css'
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriConfig from "@arcgis/core/config";
import Locate from "@arcgis/core/widgets/Locate.js";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import Graphic from "@arcgis/core/Graphic.js";

esriConfig.apiKey = "AAPK4eed6821b56140caa929f934f8643bceKuzTT_0il01AmWJ19Qx3ZZ6cZ2TtEpv0fXIf3qmK5Wy7ABVp7qnPexkPHCzp0Zd0"

const map = new Map({
    basemap: "arcgis-topographic"
})

const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
});

let locateWidget = new Locate({
  view: view,   // Attaches the Locate button to the view
});

view.ui.add(locateWidget, "top-right");

let ccWidget = new CoordinateConversion({
  view: view
});

// Adds widget in the bottom left corner of the view
view.ui.add(ccWidget, "bottom-left");