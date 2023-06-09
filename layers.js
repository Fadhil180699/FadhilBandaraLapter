var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1 = new ol.format.GeoJSON();
var features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1 = format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.readFeatures(json_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.addFeatures(features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1);
var lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1, 
                style: style_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1,
                interactive: true,
                title: '<img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.png" /> BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL_2 — BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL/BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL.shp'
            });
var format_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2 = new ol.format.GeoJSON();
var features_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2 = format_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.readFeatures(json_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.addFeatures(features_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2);
var lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2, 
                style: style_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2,
                interactive: true,
                title: '<img src="styles/legend/DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.png" /> DATA BANDAR UDARA DAN LAPANGAN TERBANG WILAYAH X - PAPUA - DATA BANDARA KOBU X  (9)'
            });
var format_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3 = new ol.format.GeoJSON();
var features_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3 = format_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.readFeatures(json_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.addFeatures(features_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3);
var lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3, 
                style: style_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3,
                interactive: true,
                title: '<img src="styles/legend/DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.png" /> DATA BANDAR UDARA DAN LAPANGAN TERBANG WILAYAH X - PAPUA - DATA LAPANGAN TERBANG KOBU X (13)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.setVisible(true);lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.setVisible(true);lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1,lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2,lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3];
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.set('fieldAliases', {'IATA Code': 'IATA Code', 'ICAO Code': 'ICAO Code', 'Reference Code': 'Reference Code', 'Nama Bandara': 'Nama Bandara', 'Lokasi Bandara': 'Lokasi Bandara', 'Status Pengguna': 'Status Pengguna', 'Kelas Bandara': 'Kelas Bandara', 'Pengelola Bandara': 'Pengelola Bandara', 'Critical Aircraft': 'Critical Aircraft', 'Koordinat Lintang Desimal': 'Koordinat Lintang Desimal', 'Koordinat Lintang': 'Koordinat Lintang', 'Koordinat ARP': 'Koordinat ARP', 'Koordinat Bujur': 'Koordinat Bujur', 'Koordinat Bujur Desimal': 'Koordinat Bujur Desimal', 'Jarak ke kota': 'Jarak ke kota', 'Elevasi': 'Elevasi', 'Nomor R/W': 'Nomor R/W', 'Panjang R/W (m)': 'Panjang R/W (m)', 'Lebar R/W (m)': 'Lebar R/W (m)', 'R/W Surface': 'R/W Surface', 'Kategori PKP-PK': 'Kategori PKP-PK', 'Sertifikat 172': 'Sertifikat 172', 'Sertifikat 171': 'Sertifikat 171', 'Jam Operasional': 'Jam Operasional', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.set('fieldAliases', {'NAMA LAPANGAN TERBANG': 'NAMA LAPANGAN TERBANG', 'LOKASI': 'LOKASI', 'ICAO CODE': 'ICAO CODE', 'KOORDINAT LINTANG DESIMAL': 'KOORDINAT LINTANG DESIMAL', 'KOORDINAT BUJUR DESIMAL': 'KOORDINAT BUJUR DESIMAL', 'KOORDINAT LINTANG': 'KOORDINAT LINTANG', 'KOORDINAT BUJUR': 'KOORDINAT BUJUR', 'PENYELENGGARA': 'PENYELENGGARA', 'PESAWAT TERKRITIS': 'PESAWAT TERKRITIS', 'STATUS': 'STATUS', 'ELAVASI': 'ELAVASI', 'PANJANG R/W STRIP (m)': 'PANJANG R/W STRIP (m)', 'LEBAR R/W STRIP (m)': 'LEBAR R/W STRIP (m)', 'DESIGNATION NUMBER': 'DESIGNATION NUMBER', 'LEBAR APRON (m)': 'LEBAR APRON (m)', 'WAKTU VERIFIKASI': 'WAKTU VERIFIKASI', 'R/W SURFACE': 'R/W SURFACE', 'field_18': 'field_18', 'field_19': 'field_19', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.set('fieldImages', {'KAB_KOTA': 'TextEdit', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.set('fieldImages', {'IATA Code': '', 'ICAO Code': '', 'Reference Code': '', 'Nama Bandara': '', 'Lokasi Bandara': '', 'Status Pengguna': '', 'Kelas Bandara': '', 'Pengelola Bandara': '', 'Critical Aircraft': '', 'Koordinat Lintang Desimal': '', 'Koordinat Lintang': '', 'Koordinat ARP': '', 'Koordinat Bujur': '', 'Koordinat Bujur Desimal': '', 'Jarak ke kota': '', 'Elevasi': '', 'Nomor R/W': '', 'Panjang R/W (m)': '', 'Lebar R/W (m)': '', 'R/W Surface': '', 'Kategori PKP-PK': '', 'Sertifikat 172': '', 'Sertifikat 171': '', 'Jam Operasional': '', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.set('fieldImages', {'NAMA LAPANGAN TERBANG': '', 'LOKASI': '', 'ICAO CODE': '', 'KOORDINAT LINTANG DESIMAL': '', 'KOORDINAT BUJUR DESIMAL': '', 'KOORDINAT LINTANG': '', 'KOORDINAT BUJUR': '', 'PENYELENGGARA': '', 'PESAWAT TERKRITIS': '', 'STATUS': '', 'ELAVASI': '', 'PANJANG R/W STRIP (m)': '', 'LEBAR R/W STRIP (m)': '', 'DESIGNATION NUMBER': '', 'LEBAR APRON (m)': '', 'WAKTU VERIFIKASI': '', 'R/W SURFACE': '', 'field_18': '', 'field_19': '', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_2BATASKABUPATENKOTADESEMBER2019DUKCAPILBATASKABUPATENKOTADESEMBER2019DUKCAPILshp_1.set('fieldLabels', {'KAB_KOTA': 'inline label', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATABANDARAKOBUX9_2.set('fieldLabels', {'IATA Code': 'inline label', 'ICAO Code': 'inline label', 'Reference Code': 'inline label', 'Nama Bandara': 'inline label', 'Lokasi Bandara': 'inline label', 'Status Pengguna': 'inline label', 'Kelas Bandara': 'inline label', 'Pengelola Bandara': 'inline label', 'Critical Aircraft': 'inline label', 'Koordinat Lintang Desimal': 'inline label', 'Koordinat Lintang': 'inline label', 'Koordinat ARP': 'inline label', 'Koordinat Bujur': 'inline label', 'Koordinat Bujur Desimal': 'inline label', 'Jarak ke kota': 'inline label', 'Elevasi': 'inline label', 'Nomor R/W': 'inline label', 'Panjang R/W (m)': 'inline label', 'Lebar R/W (m)': 'inline label', 'R/W Surface': 'inline label', 'Kategori PKP-PK': 'inline label', 'Sertifikat 172': 'inline label', 'Sertifikat 171': 'inline label', 'Jam Operasional': 'inline label', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.set('fieldLabels', {'NAMA LAPANGAN TERBANG': 'inline label', 'LOKASI': 'inline label', 'ICAO CODE': 'inline label', 'KOORDINAT LINTANG DESIMAL': 'inline label', 'KOORDINAT BUJUR DESIMAL': 'inline label', 'KOORDINAT LINTANG': 'inline label', 'KOORDINAT BUJUR': 'inline label', 'PENYELENGGARA': 'inline label', 'PESAWAT TERKRITIS': 'inline label', 'STATUS': 'inline label', 'ELAVASI': 'inline label', 'PANJANG R/W STRIP (m)': 'inline label', 'LEBAR R/W STRIP (m)': 'inline label', 'DESIGNATION NUMBER': 'inline label', 'LEBAR APRON (m)': 'inline label', 'WAKTU VERIFIKASI': 'inline label', 'R/W SURFACE': 'inline label', 'field_18': 'inline label', 'field_19': 'inline label', });
lyr_DATABANDARUDARADANLAPANGANTERBANGWILAYAHXPAPUADATALAPANGANTERBANGKOBUX13_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});