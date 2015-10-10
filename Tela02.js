// # Quintus UI Elements example
//
// [Run the example](../quintus/examples/ui/index.html)
//
// This example creates a couple of UI elements
window.addEventListener('load',function(e) {

  // Set up a standard Quintus instance with the 
  // Sprites, Scene, Touch and UI 
  var Q = window.Q = Quintus().include("Sprites, Scenes, Touch, UI")
                              .setup().touch();

  Q.scene("start",function(stage) {

    // Create a container, which can be used to 
    // contain other UI elements 
    // (containers are transparent by default, but 
    // seeting a fill and/or a border give them an appearance)
    var container = stage.insert(new Q.UI.Container({
      fill: "gray",
      //shadow: 10,
      //shadowColor: "rgba(0,0,0,0.5)",
      y: 30,
      x: Q.width/2 
    }));

    // You can create text labels as well, 
    // pass a second argument to stage.insert
    // to insert elements into containers.
    // Elements in containers move relative to
    // container so (0,0) is the center of the container
    stage.insert(new Q.UI.Text({ 
      label: "Você está em:",
      color: "white",
      y: 0,
      x: -55
    }),container);

    stage.insert(new Q.UI.Text({ 
      label: "<local>",
      color: "orange",
      y: 0,
      x: 70
    }),container);


    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Investigação",
      y: 60,
      x: -60,
      fill: "#990000",
      border: 5,
    }, function() {
      this.p.label = "#goGamba";
    }),container);

    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Vilões",
      y: 60,
      x: 95,
      fill: "#990000",
      border: 5,
    }, function() {
      this.p.label = "#gogo";
    }),container);


    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Informações sobre local",
      y: 120,
      x: 0,
      fill: "green",
      border: 5,
    }),container);


    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Pistas",
      y: 350,
      x: -95,
      fill: "#990000",
      border: 5,
    }, function() {
      this.p.label = "#gogo";
    }),container);


    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Mudar de lugar",
      y: 350,
      x: 50,
      fill: "#990000",
      border: 5,
    }, function() {
      this.p.label = "#goGamba";
    }),container);

    // Call container.fit to expand a container
    // to fit all the elemnt in it
    container.fit(20,20);


    // Call container.fit to expand a container
    // to fit all the elemnt in it
    container.fit(20,20);


  });


  Q.load("enemy.png", function() {
    // Finally call `stageScene` to start the show
    Q.stageScene("start");
  });

});

