self.addEventListener('message', function (e) {
  // console.log(e)
  var files = e.data;

  // Reading data in utf-8 format 
  // which is a type of character set. 
  // Instead of 'utf-8' it can be  
  // other character set also like 'ascii' 

  var buffers = [];


  // Read each file synchronously as an ArrayBuffer and
  // stash it in a global array to return to the main app.
  [].forEach.call(files, function (file) {
    var markerarray = [];
    var reader = new FileReaderSync();
    var readdata = reader.readAsText(file);
    var datalist = readdata.split('\n');
    var latlon = [],
      passenger = [],
      state = [];

    for (let line_num = 0; line_num < datalist.length; line_num++) {
      var arr = datalist[line_num].split(',');
      latlon[line_num] = [parseFloat(arr[0]), parseFloat(arr[1])];
      passenger.push(parseInt(arr[2]));
      state.push(parseInt(arr[3]));

    }
    markerarray.push(latlon, passenger, state);
    buffers.push(markerarray);
  });
  postMessage(buffers);
}, false);