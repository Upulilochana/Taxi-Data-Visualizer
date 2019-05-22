//brower input 
const uploadButton = document.querySelector('.browse-btn');
const fileInfo = document.querySelector('.file-info');
const realInput = document.getElementById('real-input');

uploadButton.addEventListener('click', (e) => {
  realInput.click();
});

realInput.addEventListener('change', () => {
  const name = realInput.value.split(/\\|\//).pop();
  const truncated = name.length > 20
    ? name.substr(name.length - 20)
    : name;

  fileInfo.innerHTML = truncated;
});

//load file input when loading page
// function loadinp() {
//   $('#upload_file').click()
// }

//allow to upload after loading files
function upload(e) {
  if (markerarray.length == load_promises.length && markerarray.length != 0) {
    Promise.all(load_promises).then(function (result) {
      console.log(result)
      e.target.parentNode.classList.toggle('active');
    })
  }
}


// initialize the map on the "map" div with a given center and zoom
var map;
map = new L.Map('map', {
  zoom: 13,
  minZoom: 12,
}).on({
  'resize': setZoomPosition,
  'ready': setZoomPosition
});;


// create a new tile layer
var tileUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  layer = new L.TileLayer(tileUrl,
    {
      attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> ',
      maxZoom: 18
    });

// add the layer to the map
map.addLayer(layer);

//set map bounds
map.fitBounds([
  [40.875, -74.04166666],
  [40.66666666, -73.875]
]);

function setZoomPosition () {
  var mapHalfHeight = map.getSize().y / 2,
      container = map.zoomControl.getContainer(),
      containerHalfHeight = parseInt(container.offsetHeight / 2),
      containerTop = mapHalfHeight - containerHalfHeight + 'px';
  
  container.style.position = 'absolute';
  container.style.top = '60px';
  container.style.left = '1400px';

}

setZoomPosition();

var markerarray = [];

// change the base map
function setBasemap(basemap) {
  if (layer) {
    map.removeLayer(layer);
  }
  layer = new L.TileLayer(basemap,
    {
      attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
      maxZoom: 18
    });
  // add the layer to the map
  map.addLayer(layer);
}

//function for change base map 
function changeBasemap(basemaps) {
  var basemap = basemaps.value;
  setBasemap(basemap);
}

//change icon size when the zoom triggers
map.on('zoomend', changeIconSize);

function changeIconSize(e) {

  // this is the default size (of the default icon); it should be known beforehand;
  var defaultIconSize = new L.Point(5, 5);
  var defaultShadowSize = new L.Point(20, 20);

  // use leaflet's internal methods to scale the size (a bit overkill for this case...)
  var transformation = new L.Transformation(1, 0, 1, 0);

  var currentZoom = map.getZoom();
  var newIconSize = transformation.transform(defaultIconSize, sizeFactor(currentZoom));
  var newShadowSize = transformation.transform(defaultShadowSize, sizeFactor(currentZoom));

  // adjust the icon anchor to the new size
  var newIconAnchor = new L.Point(newIconSize.x, newIconSize.y);
  console.log(markerarray.length)
  for (let index = 0; index < markerarray.length; index++) {

    var newIcon = markerarray[index].options.icon;//select the icon
    // change icon options
    newIcon.options.iconSize = newIconSize;
    newIcon.options.iconAnchor = newIconAnchor;
    newIcon.options.shadowSize = newShadowSize;
    markerarray[index].setIcon(newIcon); //set marker with new icon

  }

}

function sizeFactor(zoom) {
  if (zoom <= 8) return 0.3;
  else if (zoom == 9) return 0.4;
  else if (zoom == 10) return 0.5;
  else if (zoom == 11) return 0.7;
  else if (zoom == 12) return 0.85;
  else if (zoom == 13) return 1.0;
  else if (zoom == 14) return 1.3;
  else if (zoom == 15) return 1.6;
  else if (zoom == 16) return 2.5;
  else // zoom >= 17
    return 3.5;
}


// $(function () {

//   L.control.custom({
//     position: 'topleft',
//     content:
//       '<button type="button" id = "legend_btn" class="btn btn-default btn_camera" data-toggle="tooltip" data-placement="right" title ="Legend" ><i "img/taxii.jpg"></i>' +
//       '</button>'
//     ,
//     classes: 'btn-group-vertical btn-group-sm ',
//     // title: 'show legend',
//     name: 'click',
//     style:
//     {

//       margin: '100px 100',
//       padding: '0px 0 0 0',
//       cursor: 'pointer',
//       width: '35px',
//       top:'140px',
//     },
//     events:
//     {
//       click: function () {

//         console.log(this.name)
//         if (this.name == 'click') {
//           this.title = 'close legend'
//           this.name = 'clicked'
//         } else {
//           this.title = 'show legend'
//         }
//         $('#testlegend').slideToggle();

//       }
//     }
//   }).addTo(map)

//   L.control.custom({
//     position: 'topleft',
//     content:
//       '<button type="button" id = "upload_file"  class="btn btn-default btn_camera" data-toggle="tooltip" data-placement="right" title ="File_Upload"><i class=" fa-lg fa fa-upload" ></i>' +
//       '</button>'
//     ,
//     classes: 'btn-group-vertical btn-group-sm ',
//     title: 'File Upload',
//     style:
//     {

//       margin: '10px 100',
//       padding: '0px 0 0 0',
//       cursor: 'pointer',
//       width: '35px',
//       top:'140px',
//     },
//     events:
//     {
//       click: function () {
//         $("#inputfile").fadeToggle()
//         var span = document.getElementsByClassName("close")[1];
//         var modal_input = document.getElementById("inputfile");

//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function () {
//           modal_input.style.display = "none";
         
//         }
//         window.onclick = function (event) {
//           if (event.target == modal_input) {
//             modal_input.style.display = "none";
        
//           }
//         }


//       }
//     }
//   }).addTo(map)

//   L.control.custom({
//     position: 'topleft',
//     content: '<button type="button" id = "snap_btn" class="btn btn-default btn_camera" data-toggle="tooltip" data-placement="right" title ="Screenshot">' +
//       '    <a id ="take_screenshot" ><i class="fa-lg fa fa-camera"></i></a>' +
//       '</button>'
//     ,
//     classes: 'btn-group-vertical btn-group-sm ',
//     title: 'screendhot',
//     style:
//     {

//       margin: '10px 100',
//       padding: '0px 0 0 0',
//       cursor: 'pointer',
//       width: '35px',
//       top:'140px',
//     },
//     events:
//     {
//       click: function () {
//         // Get the modal
//         var node = document.body;
//         var promise = new Promise(function (resolve, reeject) {
//           setTimeout(() => {
//             var playButton = $("#play-button");
//             console.log(playButton.text())
//             if (playButton.text() == 'Pause') {
//               playButton.click();
//             }
//             resolve(true)
//           }, 1000);
//         }).then(function (val) {
//           if (val) {
//             domtoimage.toPng(node)
//               .then(function (dataUrl) {

//                 var img = new Image();
//                 img.style.width = '100%';
//                 img.style.height = '80%';
//                 img.id = 'scnimg';

//                 img.className = 'screenshot';
//                 img.src = dataUrl;

//                 $('#screenshot_div>span:eq(0)').after(img);
//                 var modal = document.getElementById("myModal");
//                 var span = document.getElementsByClassName("close")[0];
//                 var dwnbtn = document.getElementById('download');

//                 $("#myModal").fadeToggle()
//                 // modal.style.display = "block";


//                 // When the user clicks on <span> (x), close the modal
//                 span.onclick = function () {
//                   modal.style.display = "none";
//                   img.remove();
//                 }
//                 dwnbtn.onclick = function () {
//                   var download = document.createElement('a');
//                   download.href = img.src;
//                   download.download = 'taxi_visualizer.png';
//                   download.click();
//                 }

//                 // When the user clicks anywhere outside of the modal, close it
//                 window.onclick = function (event) {
//                   if (event.target == modal) {
//                     modal.style.display = "none";
//                     img.remove();
//                   }
//                 }

//               })
//               .catch(function (error) {
//                 console.error('oops, something went wrong!', error);
//               });
//           }
//         })


//         console.log('wrapper div element clicked');

//       },

//     },

//   })
//     .addTo(map);

//   L.control.custom({
//     position: 'topleft',
//     content:
//       '<button type="button" id = "reload_btn" class="btn btn-default btn_camera" data-toggle="tooltip" data-placement="right" title ="Reload"> <i class="fa fa-lg fa-refresh" aria-hidden="true"></i>' +
//       '</button>'
//     ,
//     classes: 'btn-group-vertical btn-group-sm ',
//     title: 'restart',
//     style:
//     {

//       margin: '10px 100',
//       padding: '0px 0 0 0',
//       cursor: 'pointer',
//       width: '35px',
//       top:'140px',
//     },
//     events:
//     {
//       click: function () {
//         location.reload();
//       }
//     }
//   }).addTo(map)

// })

$('#about').click(function(){
  $('.aboutPopup').fadeIn();
});

$('.aboutPopup .panel-heading>.glyphicon').click(function(){
  $('.aboutPopup').fadeOut();
});
