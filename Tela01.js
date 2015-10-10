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
      border: 5,
      //shadow: 10,
      //shadowColor: "rgba(0,0,0,0.5)",
      y: 100,
      x: Q.width/2 
    }));

    // You can create text labels as well, 
    // pass a second argument to stage.insert
    // to insert elements into containers.
    // Elements in containers move relative to
    // container so (0,0) is the center of the container
    stage.insert(new Q.UI.Text({ 
      label: "Onde em Quissamã está",
      color: "white",
      y: 0
    }),container);

    stage.insert(new Q.UI.Text({ 
      label: "João Gambá?",
      color: "orange",
      y: 30
    }),container);

    // Buttons inherit from containers and so can
    // have fills and borders as well
    stage.insert(new Q.UI.Button({
      label: "Iniciar jogo",
      y: 200,
      fill: "#990000",
      border: 5,
      shadow: 10,
      shadowColor: "rgba(0,0,0,0.5)",
    }, function() {
      this.p.label = "#goGamba";
    }),container);

    // Call container.fit to expand a container
    // to fit all the elemnt in it
    container.fit(20,20);

  });


  Q.load("enemy.png", function() {
    // Finally call `stageScene` to start the show
    Q.stageScene("start");
  });

});

