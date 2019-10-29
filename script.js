// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value ==="" || copilotName.value==="" || fuelLevel.value===""||cargoMass.value===""){
         alert("All fields are required");
         event.preventDefault()
   } if(isNaN(fuelLevel.value)|| isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information");
         event.preventDefault()
   } if (fuelLevel.value<10000){
         const div = document.getElementById("faultyItems");
         document.getElementById("faultyItems").visability = "visible";
         div.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName} is ready</li>
         <li id="copilotStatus">Co-pilot ${pilotName} is ready</li>
         <li id="fuelStatus">Fuel level is not high enough for launch</li>
         <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>
         `;
         h2.document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         h2.document.getElementById("launchStatus").color = "red";
   } if(cargoMass.value<10000){
      const div = document.getElementById("faultyItems");
      document.getElementById("faultyItems").visability="visible"
      div.innerHTML = `
         <ol>
         <li id="pilotStatus">Pilot ${pilotName} is ready</li>
         <li id="copilotStatus">Co-pilot ${pilotName} is ready</li>
         <li id="fuelStatus">Fuel level is high enough for launch</li>
         <li id="cargoStatus">Cargo mass too high for launch</li>
         </ol>
         `;
         h2.document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         h2.document.getElementById("launchStatus").color = "red";
   } else {
      h2.document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      h2.document.getElementById("launchStatus").color = "green";
      }
   })
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
