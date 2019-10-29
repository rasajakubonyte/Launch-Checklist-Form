// Write your JavaScript code here!
window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){
        const div = document.getElementById("missionTarget");
        div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[0].name}</li>
           <li>Diameter: ${json[0].diameter}</li>
           <li>Star: ${json[0].star}</li>
           <li>Distance from Earth: ${json[0].distance}</li>
           <li>Number of Moons: ${json[0].moons}</li>
        </ol>
        <img src="${json[0].image}">`
  });
})
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")
      if (pilotName.value ==="" || copilotName.value==="" || fuelLevel.value===""||cargoMass.value===""){
         alert("All fields are required");
         event.preventDefault()
   } if(isNaN(fuelLevel.value)|| isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information");
         event.preventDefault()
   } if (fuelLevel.value<10000){
         const div = document.getElementById("faultyItems");
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName} is ready`
         document.getElementById("fuelStatus").innerHTML = `Fuel level is not high enough for launch`
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style.color = "red";
   }else{
      document.getElementById("fuelStatus").innerHTML = `Fuel level is high enough for launch`
   }if (cargoMass.value<10000){
      const div = document.getElementById("faultyItems");
      document.getElementById("faultyItems").style.visibility="visible"
      document.getElementById("cargoStatus").innerHTML = `Cargo mass not high enough for launch`
      document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
      document.getElementById("launchStatus").style.color = "red";
   }else{
      document.getElementById("cargoStatus").innerHTML = `Cargo mass is too high for launch`
   }if (cargoMass.value>10000 && fuelLevel.value>10000){
      document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      document.getElementById("launchStatus").style.color = "green";
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
