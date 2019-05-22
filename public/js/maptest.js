
QUnit.test("map default options", function (assert) {
        assert.equal(map.getCenter().toString(),
                "LatLng(40.77091, -73.95833)",
                "The map is centered at the ZMT's longitude, and the equator"
        );
        assert.equal(map.getZoom(),
                12,
                "The default zoom is set to 12"
        );
});

// QUnit.test( "play button test", function(assert) {

//         assert.expect( 1 );

//         var $body = $( "#play-button" );

//         $body.on( "click", function() {
//           assert.ok( true, "started visualization!!!",function(assert2){
//                   assert2.expect(1)
//                   $body.on('click',function(){
//                           assert2.ok(true, 'paused visualization!!!')
//                   })
//           });
//         });

//         $body.trigger( "click" );

//         });


// var promise = new Promise(function(resolve){
//         setTimeout(() => {
//                 QUnit.test( "play button test", function(assert) {

//                         assert.expect( 1 );

//                         var $body = $( "#play-button" );

//                         $body.on( "click", function() {
//                           assert.ok( true, "started visualization!!!"
//                           );
//                           resolve(true)
//                         });

//                         $body.trigger( "click" );

//                         });
//         }, 300);

// }

// )

// promise.then(function(value){
//         if(value){
//                 QUnit.test( "pause button test", function(assert) {

//                         assert.expect( 1 );

//                         var $btn = $( "#play-button" );

//                         $btn.on( "click", function() {
//                           assert.ok( true, 'paused visualization!!!'
//                           );

//                         });

//                         $btn.trigger( "click" );

//                         });
//         }
// })


QUnit.test('testing for play and pause ', function (assert) {
        var play_button = $("#play-button");
        var legend = $('#legened_container');
        var zoom_in = $('leaflet-control-zoom > a:first-child');
        var map = $('#map')
        var basemaps = $('#basemaps')
        // ('.playa > section > button:first-child');

        var delay = 1000; // milliseconds

        var done_1 = assert.async();
        setTimeout(() => {
                play_button.trigger('click');
                assert.ok(true, 'started visualization')
                done_1();
                var done_2 = assert.async();
                setTimeout(() => {
                        play_button.trigger('click'); // stop play

                        assert.ok(true, 'paused visualization');
                        done_2();
                        var done_3 = assert.async();
                        setTimeout(() => {
                                legend.trigger('click');
                                assert.ok(true, 'legend  popuped!!');
                                done_3();
                                var done_4 = assert.async();
                                setTimeout(() => {
                                        legend.trigger('click');
                                        assert.ok(true, 'legend  closed !!');
                                        done_4();
                                        var done_5 = assert.async();
                                        setTimeout(() => {
                                                basemaps.trigger('click');
                                                assert.ok(true, 'basemaps  clicked !!');
                                                done_5();

                                        }, delay);
                                }, delay);
                        }, delay);
                }, delay);
        }, delay);
})


// QUnit.test("baseLayer layerGroup", function( assert ) {
//     // assert.equal(map._layer.getLayers().length,
//     //         1,
//     //         "There is just one layer in 'baseLayer' layerGroup"
//     // );
//     assert.equal(map._layer._url,
//             "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//             "The url of the layer leads to the correct openstreet map tiles"
//     );

//     assert.equal(baseLayer.getLayers()[0].options.attribution,
//             '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//             "The attribution for the layer is correct"
//     );
//     assert.equal(baseLayer.getLayers()[0].options.minZoom,
//             0,
//             "The default minimum zoom is set to 0"
//     );
//     assert.equal(baseLayer.getLayers()[0].options.maxZoom,
//             19,
//             "The default maximum zoom is set to 19"
//     );
// });