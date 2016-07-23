
// (function(w,d,s,g,js,fjs){
//   g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
//   js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
//   js.src='https://apis.google.com/js/platform.js';
//   fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
// }(window,document,'script'));


//  gapi.analytics.ready(function() {
//
//   var CLIENT_ID = '785100694353-q0bjtiu1aiqjjm4oqremg0gpvjkl3p77.apps.googleusercontent.com';
//
//   gapi.analytics.auth.authorize({
//     container: 'auth-button',
//     clientid: CLIENT_ID,
//     userInfoLabel:""
//   });
//
//   gapi.analytics.auth.on('success', function(response) {
//     //hide the auth-button
//     document.querySelector("#auth-button").style.display='none';
//     console.log("get profiles");
//     getProfiles(function(profs) {
//       window.profiles = profs;
//       processProfiles();
//     });
//
//   });
//
// });
var margin = {top: 20, right: 30, bottom: 40, left: 30},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var showChart = function(){
  d3.selectAll("rect.bar").style('fill', null);
  var isPos = d3.select(this).classed('bar--positive');
  if (isPos){
    d3.select(this).style("fill",d3.rgb("steelblue").darker(1))
  }
  else {
    d3.select(this).style("fill",d3.rgb("darkorange").darker(1))
  }

  d3.selectAll("svg.timelines").remove();

  var selectedRect = d3.select(this).attr("id");

  switch (selectedRect) {
  case "index0":
    var input = "cimp"
    break;
  case "index1":
    var input = "vimp"
    break;
  case "index2":
    var input = "ctr"
    break;
  case "index3":
    var input = "sessions"
    break;
  default:
    break;
  }

  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var formatDate = d3.time.format("%Y-%m-%d");

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d[input]); });

  var svg = d3.select("body").append("svg")
      .attr("class", "timelines")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("source1graph.csv", type, function(error, data) {
    if (error) throw error;

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d[input]; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(input);

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
  });

  function type(d) {
    d.date = formatDate.parse(d.date);
    d[input] = +d[input];
    return d;
  }

}

$('.dropdown-inverse li > a').click(function(e){
    $('.status').text(this.innerHTML);
    var status = $(this).attr("class");

    d3.selectAll("svg").remove();

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], 0.1);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(0)
        .tickPadding(6);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    switch (status) {
    case "s1":
      var input = "data.csv"
      break;
    case "s2":
      var input = "data2.csv"
      break;
    case "s3":
      var input = "data3.csv"
      break;
    default:
      break;
  }


  d3.csv(input, type, function(error, data) {
    x.domain(d3.extent(data, function(d) { return d.value; })).nice();
    y.domain(data.map(function(d) { return d.name; }));

  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .each(function(d, i) { d.index = i; })
      .attr('x', function(d) { return x(0); })
      .attr("id", function(d) { return "index" + (d.index ); })
      .attr("y", function(d) { return y(d.name); })
      .attr("height", y.rangeBand())
      .attr("width",0)
      .on("click", showChart)
      .transition()
        .delay(function(d, i) { return i * 200}).duration(200)
        .attr("x", function(d) { return x(Math.min(0, d.value)); })
        .attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
        .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); });
        // .attr('x', function(d) { return x(d3.max([d.value, 0])); });

  // d3.select("svg").selectAll("rect")
  //             .data(data)
  //             .transition()
  //             .duration(1000)
  //             .attr("width", function(d) {return x(d); });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + x(0) + ",0)")
      .call(yAxis);
  });

  function type(d) {
    d.value = +d.value;
    return d;
  }
});

// append to body
    //
    // $("body").append("<div class='reportContainer'><div class='chartTitleContainer'>"+titleStr+"</div><div class='chartContainer' id='chart-"+curProfile+"-container'></div></div>");
    //
    // new Chart(makeCanvas('chart-'+curProfile+'-container')).Line(data);
