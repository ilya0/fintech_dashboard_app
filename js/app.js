 console.log("connected js");

 var testarray = [
  Math.floor(Math.random()*100),
  "test11",
  Math.floor(Math.random()*100),
  "test12",
  Math.floor(Math.random()*100),
  "test13"];



//copied code from the pubnub hello world
function publish() {

    pubnub = new PubNub({
        publishKey : 'demo',
        subscribeKey : 'demo'
    })

    function publishSampleMessage() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        var publishConfig = {
            channel : "hello_world",
            message : "Hello from PubNub Docs!"
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
        })
    }

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['hello_world']
    });
};














 //test array

// var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   noLoop();  // Run once and stop
// }

// function draw() {
//   background(100);
//   pieChart(300, angles);
// }

// function pieChart(diameter, data) {
//   var lastAngle = 0;
//   for (var i = 0; i < data.length; i++) {
//     var gray = map(i, 0, data.length, 0, 255);
//     fill(gray);
//     arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
//     lastAngle += radians(angles[i]);
//   }
// }



function setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}
