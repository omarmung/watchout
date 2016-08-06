// start slingin' some d3 here.

// var test = d3.select('.highscore');

// var items = [{ name: 'harry', val: 'smith' }, { name: 'sally', val: 'johnson' }];


// render svg

// render elements inside svg
// render circles
// give them random starting coordinates
// // render svg through d3


// make a palyer circle
// bind that to mouse
// collision detection
// 


var player1Data = [{
  posX: 100,
  posY: 100,
  height: 30,
  width: 30,
  fill: 'black'
}];

var updatePlayer1 = function(data) {
  console.log('running player1');
  var selection = d3.select('svg')
    .selectAll('circle')
    .data(data);

  selection
    // .selectAll('circle')
    .transition().duration(3000)
    .attr('width', function(d) { return d.width; })
    .attr('height', function(d) { return d.height; })
    .attr('fill', function(d) { return d.fill; });

  selection
    .enter()
    .append('rect')
    .attr('width', function(d) { return d.width; })
    .attr('height', function(d) { return d.height; })
    .attr('fill', function(d) { return d.fill; });

  selection
    .exit().remove();
};

var started = function () {
  var rectangle = d3.select(this).classed("dragging", true);

  d3.event.on("drag", dragged).on("end", ended);

  var dragged = function (d) {
    rectangle.raise().attr('width', d.height = d3.event.x).attr("height", d.width = d3.event.y);
  };

  var ended = function() {
    rectangle.classed("dragging", false);
  };
};

var makeRandomAsteroids = function(num) {

  var asteroids = [];
  for (var i = 0; i < num; i++) {
    console.log('making new set of asteroids!');
    asteroids.push({});
    asteroids[i].name = 'ast' + i;
    asteroids[i].height = (Math.floor(Math.random() * (349) + 50));
    asteroids[i].width = (Math.floor(Math.random() * (599) + 50));
    asteroids[i].radius = (Math.floor(Math.random() * 50))// 30;
    asteroids[i].fill = 'red';
  }
  return asteroids;
};

var updateAsteroids = function(data) {
  console.log('running create!');
  var selection = d3.select('svg')
    .selectAll('circle')
    .data(data);

  selection
    // .selectAll('circle')
    .transition().duration(3000)
    .attr('cx', function(d) { return d.width; })
    .attr('cy', function(d) { return d.height; })
    .attr('r', function(d) { return d.radius; })
    .attr('fill', function(d) { return d.fill; });

  selection
    .enter()
    .append('circle')
    .attr('cx', function(d) { return d.width; })
    .attr('cy', function(d) { return d.height; })
    .attr('r', function(d) { return d.radius; })
    .attr('fill', function(d) { return d.fill; });

  selection
    .exit().remove();
};

var asteroidsNum = 20;

updatePlayer1(player1Data);

updateAsteroids(makeRandomAsteroids(asteroidsNum));
updateAsteroids(makeRandomAsteroids(asteroidsNum));
setInterval(function() { updateAsteroids(makeRandomAsteroids(asteroidsNum)); }, 4000);
d3.selectAll("rect").call(d3.drag().on("start", started));








var generateCollection = function(productName, number, attributes) {
  // create('asteroid', 5, 'svg', 'width: 50 px', 'height: 60 px', 'whatever I want: cool')

  var collection = [];

  for (var i = 0; i < number; i++) {
    var item = { name: productName + i };
    // for all attribute properties
    for (var key in attributes) {
      item[key] = attributes[key];
    }
    collection.push(item);
  }
  return collection;
};

// <circle cx="150" cy="100" r="80" fill="Orange" />


// var testMake = function(items) {
//   var selection = d3.select('body')
//     .selectAll('div')
//     .data([10, 20, 30])
//     .text(function(d) {
//       return d;
//     });

//   selection
//     .enter()
//     .append('div')
//     .text(function(d) {
//       return d.name + 'HI';
//     });

// };

// var testUpdate = function(items) {
//   var selection = d3.select('body')
//     .selectAll('div')
//     .data([100, 200, 300])
//     .text(function(d) {
//       return d;
//     });
// };


var create = function(items) {
  // console.log(items);
  // console.log('update is running.');
  var selection = d3.select('svg')
    .selectAll('circle')
    .data(items);

  selection
    .enter()
    .append('circle')
    .attr('cx', function() {
      return Math.floor(Math.random() * (599) + 50);
    })
    .attr('cy', function() {
      return Math.floor(Math.random() * (349) + 50);
    })
    .attr('r', '30')
    .attr('fill', 'red');

  selection
    .exit().remove();
};

var update = function(items) {
  // console.log('update is running.');
  var selection = d3.select('svg')
    .selectAll('circle')
    .data(items);

  selection
    .transition().attr('cx', function() {
      return Math.floor(Math.random() * (599) + 50);
    })
    .attr('cy', function() {
      return Math.floor(Math.random() * (349) + 50);
    }).duration(1000);
};

// console.log(asteroids);
// update(asteroids);
// create(generateCollection('asteroid', 3));


// update(generateCollection('asteroid', 3, { fill: 'green' }));
// update(generateCollection('asteroid', 10, { fill: 'green' }));
// update(generateCollection('asteroid', 10, { fill: 'green' }));
// update(generateCollection('asteroid', 10, { fill: 'green' }));

// cx: 100, cy: 100, r: 30,
// int random number between max and min: Math.floor(Math.random() * (max - min + 1) + min)
// testMake();
// testMake();
// testUpdate();


// Welcome to the library! Shhh!
// Math.random(max -(2 * min) + 1 - min)