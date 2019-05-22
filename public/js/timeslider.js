//set date formats
var formatDateIntoYear = d3.timeFormat("%H:%M");
var formatDate         = d3.timeFormat("%H:%M:%S");

var startDate = new Date("2019-04-21 00:00:00"),
    endDate   = new Date("2019-04-21 24:00:00");

var margin = { top: 50, right: 50, bottom: 0, left: 50 },
    width  = 960 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

var svg = d3.select("#vis")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height - 100);

////////// slider //////////

var moving       = false;
var currentValue = 0;
var targetValue  = width;
var speed = 1;

var playButton = d3.select("#play-button");
var playButton_ = $("#play-button");
var backwardButton_ = $("#backward-button")
var forwardButton =  d3.select('#forward-button');
var backwardButton =  d3.select('#backward-button');
var speedtxt =  d3.select('#speed_txt');

var x = d3.scaleTime()
  .domain([startDate, endDate])
  .range([0, targetValue])
  .clamp(true);

var slider = svg.append("g")
  .attr("class", "slider")
  .attr("transform", "translate(" + margin.left + "," + height / 5 + ")");

slider.append("line")
  .attr("class", "track")
  .attr("x1", x.range()[0])
  .attr("x2", x.range()[1])
  .select(function () { return this.parentNode.appendChild(this.cloneNode(true)); })
  .attr("class", "track-inset")

  .select(function () { return this.parentNode.appendChild(this.cloneNode(true)); })
  .attr("class", "track-overlay")

  // .call(d3.drag()
  //   .on("start.interrupt", function () { slider.interrupt(); })
  //   .on("start drag", function () {
  //     currentValue = d3.event.x;
  //     update(x.invert(currentValue));
  //   })
  // )
  ;

slider.insert("g", ".track-overlay")
  .attr("class", "ticks")
  .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
  .data(x.ticks(23))
  .enter()
  .append("text")
  .attr("x", x)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .text(function (d) { return formatDateIntoYear(d); });

var handle = slider.insert("circle", ".track-overlay")
  .attr("class", "handle")
  .attr("r", 9)
  .style('fill', '#00CCCC');

var label = slider.append("text")
  .style('color', 'blue')
  .attr("class", "label")
  .attr("text-anchor", "middle")
  .text(formatDate(startDate))
  .attr("transform", "translate(0," + (-25) + ")")



////////// plot //////////

forwardButton.on('click',function(){
  speed *= 2;
  // if(speed >= 2){
  //   backwardButton_.attr("disabled", false)
  // }else{
  //   backwardButton_.attr("disabled", true)
  // }
  speedtxt.text('X'+speed)
  console.log(speed)
  if(playButton.text() == 'Play'){
    playButton_.click()
  }else{
    clearInterval(timer);
  // moving = true;
  console.log(speed,' at forwardButton')
  timer  = setInterval(step, 10);
  }
  for (let index = 0; index < markerarray.length; index++) {
    markerarray[index].speedup(speed)

  }

});
backwardButton.on('click',function(){
  speed /= 2;
  speedtxt.text('X'+speed)
  console.log(speed)
  if(playButton.text() == 'Play'){
    playButton_.click()
  }else{
    clearInterval(timer);
  // moving = true;
  console.log(speed,' at forwardButton')
  timer  = setInterval(step, 10);
  }
  for (let index = 0; index < markerarray.length; index++) {
    markerarray[index].speeddown(speed)
  }

});


playButton
  .on("click", function () {
    if(markerarray && markerarray.length){

    
    var button = d3.select(this);
    if (button.text() == "Pause") {
      for (let index = 0; index < markerarray.length; index++) {
        markerarray[index].pause()

      }
      moving = false;
      clearInterval(timer);
      // timer = 0;
      button.text("Play");
    } else {
      moving = true;
      for (let index = 0; index < markerarray.length; index++) {
        markerarray[index].start()

      }
      console.log(speed,' at playbutton')
      timer = setInterval(step, 10);

      button.text("Pause");
    }
    console.log("Slider moving: " + moving);
  }else{
    loadinp()
  }
  })

function step(){
  update(x.invert(currentValue));
    console.log(speed , ' at step')
    currentValue = currentValue + (targetValue / 30001)*speed;

  if (currentValue > targetValue) {
    moving       = false;
    currentValue = 0;
    // speed = 1;
    clearInterval(timer);
   
    // timer = 0;
    playButton.text("Play");
    for (let index = 0; index < markerarray.length; index++) {
      markerarray[index].setInitialDurations()

    }
    console.log("Slider moving: " + moving);
  }
}

function update(h) {
  // update position and text of label according to slider scale
  handle.attr("cx", x(h));
  label
    .attr("x", x(h))
    .text(formatDate(h));
}
d3.selectAll("text").style("fill", "black");