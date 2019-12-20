

let mainContent = document.querySelector('#content');
let modelContent = `
<!-- User not signed in -->
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Uh oh, </h4>
        <p>You haven't signed in yet! Please sign in to enter MRKT.</p>
    </div>
    <div class="modal-footer">
        <a href="index.html" class="modal-close waves-effect waves-green btn-flat">GO BACK</a>
    </div>
</div>
`

//git test push
$('.sidenav').sidenav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true // Choose whether you can drag to open on touch screens,
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});



//Chartist code.
var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 10, 9, 13, 10]
  ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data);
console.log('yeet');



var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-pie', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});


var chart = new Chartist.Line('.ct-chart-line', {
  series: [
    {
      name: 'series-1',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 40},
        {x: new Date(143340052600), y: 45},
        {x: new Date(143366652600), y: 40},
        {x: new Date(143410652600), y: 20},
        {x: new Date(143508652600), y: 32},
        {x: new Date(143569652600), y: 18},
        {x: new Date(143579652600), y: 11}
      ]
    },
    {
      name: 'series-2',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 35},
        {x: new Date(143334652600), y: 53},
        {x: new Date(143384652600), y: 39},
        {x: new Date(143568652600), y: 10}
      ]
    },
    {
      name: 'series-3',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 35},
        {x: new Date(143334652600), y: 30},
        {x: new Date(143384652600), y: 30},
        {x: new Date(143568652600), y: 10}
      ]
    },
    {
      name: 'series-4',
      data: [
        {x: new Date(143134652600), y: 23},
        {x: new Date(143234652600), y: 42},
        {x: new Date(143334652600), y: 54},
        {x: new Date(143384652600), y: 53},
        {x: new Date(143568652600), y: 90}
      ]
    }
  ]
}, {
  axisX: {
    type: Chartist.FixedScaleAxis,
    divisor: 5,
    labelInterpolationFnc: function(value) {
      return moment(value).format('MMM D');
    }
  }
});


var chart = new Chartist.Line('.ct-chart-line2', {
  series: [
    {
      name: 'series-1',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 40},
        {x: new Date(143340052600), y: 45},
        {x: new Date(143366652600), y: 40},
        {x: new Date(143410652600), y: 20},
        {x: new Date(143508652600), y: 32},
        {x: new Date(143569652600), y: 18},
        {x: new Date(143579652600), y: 11}
      ]
    },
    {
      name: 'series-2',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 35},
        {x: new Date(143334652600), y: 30},
        {x: new Date(143384652600), y: 30},
        {x: new Date(143568652600), y: 10}
      ]
    },
    {
      name: 'series-3',
      data: [
        {x: new Date(143134652600), y: 53},
        {x: new Date(143234652600), y: 35},
        {x: new Date(143334652600), y: 30},
        {x: new Date(143384652600), y: 30},
        {x: new Date(143568652600), y: 10}
      ]
    },
    {
      name: 'series-4',
      data: [
        {x: new Date(143134652600), y: 20},
        {x: new Date(143234652600), y: 11},
        {x: new Date(143334652600), y: 42},
        {x: new Date(143384652600), y: 22},
        {x: new Date(143568652600), y: 40}
      ]
    }
  ]
}, {
  axisX: {
    type: Chartist.FixedScaleAxis,
    divisor: 5,
    labelInterpolationFnc: function(value) {
      return moment(value).format('MMM D');
    }
  }
});