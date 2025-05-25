var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_samarindaseberang_1 = new ol.format.GeoJSON();
var features_samarindaseberang_1 = format_samarindaseberang_1.readFeatures(json_samarindaseberang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samarindaseberang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samarindaseberang_1.addFeatures(features_samarindaseberang_1);
var lyr_samarindaseberang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_samarindaseberang_1, 
                style: style_samarindaseberang_1,
                popuplayertitle: 'samarinda seberang',
                interactive: true,
                title: '<img src="styles/legend/samarindaseberang_1.png" /> samarinda seberang'
            });
var format_Jembatan_2 = new ol.format.GeoJSON();
var features_Jembatan_2 = format_Jembatan_2.readFeatures(json_Jembatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jembatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jembatan_2.addFeatures(features_Jembatan_2);
var lyr_Jembatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jembatan_2, 
                style: style_Jembatan_2,
                popuplayertitle: 'Jembatan',
                interactive: true,
                title: '<img src="styles/legend/Jembatan_2.png" /> Jembatan'
            });
var format_Administrasi_3 = new ol.format.GeoJSON();
var features_Administrasi_3 = format_Administrasi_3.readFeatures(json_Administrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_3.addFeatures(features_Administrasi_3);
var lyr_Administrasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_3, 
                style: style_Administrasi_3,
                popuplayertitle: 'Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_3.png" /> Administrasi'
            });
var format_SLB_4 = new ol.format.GeoJSON();
var features_SLB_4 = format_SLB_4.readFeatures(json_SLB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLB_4.addFeatures(features_SLB_4);
var lyr_SLB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLB_4, 
                style: style_SLB_4,
                popuplayertitle: 'SLB',
                interactive: true,
                title: '<img src="styles/legend/SLB_4.png" /> SLB'
            });
var format_SMA_5 = new ol.format.GeoJSON();
var features_SMA_5 = format_SMA_5.readFeatures(json_SMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_5.addFeatures(features_SMA_5);
var lyr_SMA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMA_5, 
                style: style_SMA_5,
                popuplayertitle: 'SMA',
                interactive: true,
    title: 'SMA<br />\
    <img src="styles/legend/SMA_5_0.png" /> Negeri<br />\
    <img src="styles/legend/SMA_5_1.png" /> Swasta<br />' });
var format_SMP_6 = new ol.format.GeoJSON();
var features_SMP_6 = format_SMP_6.readFeatures(json_SMP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMP_6.addFeatures(features_SMP_6);
var lyr_SMP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMP_6, 
                style: style_SMP_6,
                popuplayertitle: 'SMP',
                interactive: true,
    title: 'SMP<br />\
    <img src="styles/legend/SMP_6_0.png" /> Negeri<br />\
    <img src="styles/legend/SMP_6_1.png" /> Swasta<br />' });
var format_SD_7 = new ol.format.GeoJSON();
var features_SD_7 = format_SD_7.readFeatures(json_SD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_7.addFeatures(features_SD_7);
var lyr_SD_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_7, 
                style: style_SD_7,
                popuplayertitle: 'SD',
                interactive: true,
    title: 'SD<br />\
    <img src="styles/legend/SD_7_0.png" /> Negeri<br />\
    <img src="styles/legend/SD_7_1.png" /> Swasta<br />' });
var format_TK_8 = new ol.format.GeoJSON();
var features_TK_8 = format_TK_8.readFeatures(json_TK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TK_8.addFeatures(features_TK_8);
var lyr_TK_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TK_8, 
                style: style_TK_8,
                popuplayertitle: 'TK',
                interactive: true,
    title: 'TK<br />\
    <img src="styles/legend/TK_8_0.png" /> Negeri<br />\
    <img src="styles/legend/TK_8_1.png" /> Swasta<br />' });

lyr_ESRI_0.setVisible(true);lyr_samarindaseberang_1.setVisible(true);lyr_Jembatan_2.setVisible(true);lyr_Administrasi_3.setVisible(true);lyr_SLB_4.setVisible(true);lyr_SMA_5.setVisible(true);lyr_SMP_6.setVisible(true);lyr_SD_7.setVisible(true);lyr_TK_8.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_samarindaseberang_1,lyr_Jembatan_2,lyr_Administrasi_3,lyr_SLB_4,lyr_SMA_5,lyr_SMP_6,lyr_SD_7,lyr_TK_8];
lyr_samarindaseberang_1.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Jembatan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Administrasi_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SLB_4.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SMA_5.set('fieldAliases', {'Sekolah': 'Sekolah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'jenissekolah': 'jenissekolah', });
lyr_SMP_6.set('fieldAliases', {'Sekolah': 'Sekolah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'jenissekolah': 'jenissekolah', });
lyr_SD_7.set('fieldAliases', {'Nama Sekolah': 'Nama Sekolah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'jenissekolah': 'jenissekolah', });
lyr_TK_8.set('fieldAliases', {'Nama Sekolah': 'Nama Sekolah', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'status': 'status', 'jenissekolah': 'jenissekolah', });
lyr_samarindaseberang_1.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Jembatan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'Range', 'TGGJMB': 'Range', 'JBTJMB': 'Range', 'LBRJMB': 'Range', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'Range', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Administrasi_3.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SLB_4.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SMA_5.set('fieldImages', {'Sekolah': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'jenissekolah': 'TextEdit', });
lyr_SMP_6.set('fieldImages', {'Sekolah': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'jenissekolah': 'TextEdit', });
lyr_SD_7.set('fieldImages', {'Nama Sekolah': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'jenissekolah': 'TextEdit', });
lyr_TK_8.set('fieldImages', {'Nama Sekolah': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'status': 'Range', 'jenissekolah': 'TextEdit', });
lyr_samarindaseberang_1.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'GID_4': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Jembatan_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Administrasi_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SLB_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_SMA_5.set('fieldLabels', {'Sekolah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'jenissekolah': 'inline label - visible with data', });
lyr_SMP_6.set('fieldLabels', {'Sekolah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'jenissekolah': 'inline label - visible with data', });
lyr_SD_7.set('fieldLabels', {'Nama Sekolah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'jenissekolah': 'inline label - visible with data', });
lyr_TK_8.set('fieldLabels', {'Nama Sekolah': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'status': 'no label', 'jenissekolah': 'inline label - visible with data', });
lyr_TK_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});