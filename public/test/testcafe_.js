/*
this is automated test using TestCafe
run belove code in cli 
    testcafe chrome --skip-js-errors ./public/test/ testcafe_.js

*/

import { Selector } from 'testcafe';

fixture`Getting Started`
    //load page 
    .page`http://localhost:8080`;

const citySelect = Selector('#basemaps');
const cityOption = citySelect.find('option');

test(`test file upload, button cicks `, async t => {
    await t
        //testing for file uploading
        //testing file location can be changed 
        
        // .click(`#brw-inp`).wait(1000)
        // .click('#brw-inp')
        // .wait(1000)
        .click(`#close_inp`)
        .wait(1000)
        .click(`#upload_file`)
        .wait(1000)
        .click('#brw-inp')
        .wait(1000)
        .setFilesToUpload(`#real-input`, `F:/moving marker/Leaflet.MovingMarker/public/data/taxi-10.txt`)
        .wait(10000)
        //button click event for begin button - redirect to http://localhost:8080/upload
        .click(`#begin`)
        .wait(10000)
       
        .click(`#close_inp`)
        .wait(1000)
        .click(`#legend_btn`)
        .wait(1000)
        .click(`#legend_btn`)
        .wait(1000)
        
    //     .click(`#snap_btn`)
    //     .wait(20000)
       
    //    .click(`#download`)
    //     .wait(5000)
    //     .click(`window`)
    //     .wait(1000)

        // .click('#brw-inp')
        // .wait(1000)
        

        //button click event for begin button - redirect to http://localhost:8080/upload
  
        //button click event for play button - start the visualization
        // .click(`#play-button`)
        // .wait(10000)
        // //button click event for pause button - pause the visualization
        // .click(`#play-button`)
        // .wait(5000)
        // //button click event for play button - start from paused time
        // .click(`#play-button`)
        // .wait(1000)
        //click to select basemap 
        .click(citySelect)
        .wait(1000)
        //select light_all basemap
        .click(cityOption.withText('light_all'))
        .wait(1000)
        //check the value of the option is set correctly
        .expect(citySelect.value).eql('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select light_all basemap
        .click(cityOption.withText('light_nolabels'))
        .wait(1000)
        .expect(citySelect.value).eql('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select dark_nolabels basemap
        .click(cityOption.withText('dark_nolabels'))
        .wait(1000)
        .expect(citySelect.value).eql('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select base-antique basemap
        .click(cityOption.withText('base-antique'))
        .wait(1000)
        .expect(citySelect.value).eql('https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select base-eco basemap
        .click(cityOption.withText('base-eco'))
        .wait(1000)
        .expect(citySelect.value).eql('https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select base-flatblue basemap
        .click(cityOption.withText('base-flatblue'))
        .wait(1000)
        .expect(citySelect.value).eql('https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select base-midnight basemap
        .click(cityOption.withText('base-midnight'))
        .wait(1000)
        .expect(citySelect.value).eql('https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png')
        .wait(1000)
        .click(citySelect)
        .wait(1000)
        //select dark_all basemap
        .click(cityOption.withText('dark_all'))
        .wait(1000)
        .expect(citySelect.value).eql('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png')
        .wait(1000)
        //test for zoom in 
        .click('a.leaflet-control-zoom-in')
        .wait(2000)
        //test for zoom out
        .click('a.leaflet-control-zoom-out')
        .wait(2000)
        //test for legend open
        // .click('.domcontainer')
        // .wait(2000)
        // //test for legend close
        // .click('.domcontainer')
        // .wait(2000)

        ;
});


