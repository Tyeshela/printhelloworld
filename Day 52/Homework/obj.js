var objectData = {
    name: "GOA",
    status: "standing",
    location: "beach"
  };
  
  var objectMethods = {
    walk: function() {
      objectData.status = "walking";
      console.log(objectData.name + " is " + objectData.status);
    },
    stop: function() {
      objectData.status = "standing";
      console.log(objectData.name + " is " + objectData.status);
    },
    moveTo: function(newLocation) {
      objectData.location = newLocation;
      console.log(objectData.name + " moved to " + objectData.location);
    }
  };
  
  objectMethods.walk();
  objectMethods.stop();
  objectMethods.moveTo("park");
  