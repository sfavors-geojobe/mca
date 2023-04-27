import "./style.css";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriConfig from "@arcgis/core/config";

esriConfig.apiKey = import.meta.env.VITE_API_KEY;

const map = new Map({
  basemap: "arcgis-topographic",
});

const view = new MapView({
  map: map,
  center: [-118.805, 34.027],
  zoom: 13,
  container: "viewDiv",
});
