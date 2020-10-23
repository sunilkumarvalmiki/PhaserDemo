var demo = {}; // object
demo.state1 = function() {}; // adding prop to obj
demo.state1.prototype = {
    preload: function(){},
    create: function(){}, // adding props to pre-defined functions
    update: function(){}
};