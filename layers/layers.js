var wms_layers = [];

var format_albertaboundary_0 = new ol.format.GeoJSON();
var features_albertaboundary_0 = format_albertaboundary_0.readFeatures(json_albertaboundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_albertaboundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_albertaboundary_0.addFeatures(features_albertaboundary_0);
var lyr_albertaboundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_albertaboundary_0, 
                style: style_albertaboundary_0,
                popuplayertitle: "alberta boundary",
                interactive: false,
                title: '<img src="styles/legend/albertaboundary_0.png" /> alberta boundary'
            });
var format_FishStockingPoints_1 = new ol.format.GeoJSON();
var features_FishStockingPoints_1 = format_FishStockingPoints_1.readFeatures(json_FishStockingPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_1.addFeatures(features_FishStockingPoints_1);
var lyr_FishStockingPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_1, 
                style: style_FishStockingPoints_1,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_1_0.png" /> 15 - 2600<br />\
    <img src="styles/legend/FishStockingPoints_1_1.png" /> 2600 - 8120<br />\
    <img src="styles/legend/FishStockingPoints_1_2.png" /> 8120 - 20000<br />\
    <img src="styles/legend/FishStockingPoints_1_3.png" /> 20000 - 60000<br />\
    <img src="styles/legend/FishStockingPoints_1_4.png" /> 60000 - 110000<br />'
        });
var format_WaterBodies_2 = new ol.format.GeoJSON();
var features_WaterBodies_2 = format_WaterBodies_2.readFeatures(json_WaterBodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterBodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBodies_2.addFeatures(features_WaterBodies_2);
var lyr_WaterBodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBodies_2, 
                style: style_WaterBodies_2,
                popuplayertitle: "Water Bodies",
                interactive: false,
                title: '<img src="styles/legend/WaterBodies_2.png" /> Water Bodies'
            });

lyr_albertaboundary_0.setVisible(true);lyr_FishStockingPoints_1.setVisible(true);lyr_WaterBodies_2.setVisible(true);
var layersList = [lyr_albertaboundary_0,lyr_FishStockingPoints_1,lyr_WaterBodies_2];
lyr_albertaboundary_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'numstock': 'numstock', 'Map Author': 'Map Author', 'MapAuthor': 'MapAuthor', });
lyr_WaterBodies_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_albertaboundary_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'numstock': 'Range', 'Map Author': 'TextEdit', 'MapAuthor': '', });
lyr_WaterBodies_2.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_albertaboundary_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_1.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'hidden field', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'numstock': 'inline label - always visible', 'Map Author': 'hidden field', 'MapAuthor': 'header label - always visible', });
lyr_WaterBodies_2.set('fieldLabels', {'HYDROUID': 'hidden field', 'NAME': 'hidden field', 'RANK': 'hidden field', 'PRUID': 'hidden field', });
lyr_WaterBodies_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});