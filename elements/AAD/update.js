function(instance, properties, context) {
 
  var method = properties.method;
  
  Bounceback.init({
    aggressive: true,
    method: method.toLowerCase(),
    maxDisplays: 0,
    distance: properties.distance,
    onBounce: function() {
      instance.triggerEvent('user_is_about_to_exit', function(err) {});
  }
})

}