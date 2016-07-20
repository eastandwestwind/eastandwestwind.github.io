
(function(w,d,s,g,js,fjs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
  js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
}(window,document,'script'));
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

$('.dropdown-inverse li > a').click(function(e){
    $('.status').text(this.innerHTML);
    var status = $(this).attr("class");
    switch (status) {
  case "s1":
    var input = "data.csv"
    break;
  case "s2":
    var input = "data2.csv"
    break;
  case "s3":
    //Statements executed when the result of expression matches valueN
    break;
  default:
    //Statements executed when none of the values match the value of the expression
    break;
}


  d3.csv(input, type, function(error, data) {
    x.domain(d3.extent(data, function(d) { return d.value; })).nice();
    y.domain(data.map(function(d) { return d.name; }));

  svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("height", y.rangeBand())
      .transition()
        .delay(function(d, i) { return i * 200}).duration(200)
        .style('width', function(d) { return (d * 150) + 'px'; })
        .attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
        .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); });

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
