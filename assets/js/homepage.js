
var newKey = 'f3dc7f08f8996252233636ace6296336';
var country_code_key = "Qo6BcIalfxm9oIX5dWgWO8VGimAggzBxRL0hjm1G";
var country_code_variable;
var country_str_final;

// Variables relevant to the renderSavedItemsUponLoad function.
var storedUserSelectedItems = JSON.parse(localStorage.getItem("user-selected-items"));
var plantApiKey = "sk-fKLP65a1e36e3cacb3763";
// Append plant items here.
var weatherContent = document.getElementById("weather-content");
weatherContent.setAttribute("style", "position: relative; top: 600px; display: flex; flex-direction: column; line-height: 10px;")


var city = document.getElementById("city");
document.getElementById('btn').onclick = function() {
   //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${newKey}`;
   var city_str = city.value.toUpperCase();
   var state_str = state.value.toUpperCase();
   var country_str = country.value.toUpperCase();
   let weather_url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_str},${state_str},${country_str_final}&appid=${newKey}`;
   //var country_str = "AUSTRALIA"
   let country_url = `https://countryapi.io/api/name/${country_str}?apikey=${country_code_key}`;
// get_country_code_api();
get_weather_api();

function get_weather_api() {
  fetch(weather_url)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
         console.log(data);

         document.getElementById("weather-forecast").innerHTML = "";

         var cityName = document.createElement("h3");
         cityName.textContent = "Showing forecast for: " + data.city.name;
         document.getElementById("weather-forecast").appendChild(cityName);


         // Creates a content for all items iterated over in data.list
         for (let i = 7; i < data.list.length; i+=8) {
            var weatherTxt = data.list[i].dt_txt;
            var rain = data.list[i].weather[0].description;

            var contentAppend = document.getElementById("weather-forecast");
            var foreCastDiv = document.createElement("div");
            foreCastDiv.setAttribute("style", "display:flex; flex-direction: column; align-items: center; line-height:8px; border: solid; border-radius: 12px; margin: 10px;")
            var weatherTxtContent = document.createElement("p");
            var rainTxtContent = document.createElement("p");

            weatherTxtContent.textContent = weatherTxt;
            rainTxtContent.textContent = rain;

            foreCastDiv.appendChild(weatherTxtContent);
            foreCastDiv.appendChild(rainTxtContent);

            contentAppend.appendChild(foreCastDiv);
         };

         console.log(document.body.children[1].children[0].children[1].children)
         for (let i = 0; i < 5; i++) {
            // var allForecastDivs = document.body.children[1].children[0].children[1].children.children;
            contentAppend.addEventListener("dragover", function (event) {
               event.preventDefault();
            });
            contentAppend.addEventListener("drop", function () {
               contentAppend.prepend(storedUserSelectedItems);
            })
         };


         });
      
      } else {
         if (response.status === 404) {
            console.log(city.value + " not found !") 
         } else {
            console.log("error occurred !")
         }}})
         
      .catch(function (error)  {
         alert('Unable to connect to Weather Forecast Database'+error);
      })};

};

function renderSavedPlantItemsUponLoad () {
   var storedUserSelectedItems = JSON.parse(localStorage.getItem("user-selected-items"));
   // Clears the previously rendered plant names from local storage.
   localStorage.removeItem("plant-names");

   for (let i = 0; i < storedUserSelectedItems.length; i++) {
       var plantItemId = storedUserSelectedItems[i];
       var plantItemApi = `https://perenual.com/api/species/details/${plantItemId}?key=${plantApiKey}`;
       
       fetch(plantItemApi)
       .then(function (response) {
           return response.json();
       })
       .then (function (data) {

           console.log(data);

           // Create array.
           var plantNamesArray = [];
           // Variable is the common name of each plant.
           var plantName = data.common_name;
           console.log(plantName);
           // Push the variable plantName to the array.
           plantNamesArray.push(plantName);

           var weatherContent = document.getElementById("weather-content");

           // Get key/value from local storage.
           var storedPlantNames = JSON.parse(localStorage.getItem("plant-names"));

           var displayPlantItem = document.createElement("p");
           displayPlantItem.textContent = plantNamesArray;
           displayPlantItem.setAttribute("style", "display:flex; justify-content: center; align-items: center; height:25px; width: auto; border: solid; border-radius: 8px;")
           displayPlantItem.setAttribute("id", "display-individual-plant-item");
           // console.log(plantNamesArray);
           weatherContent.appendChild(displayPlantItem);

           // If there is no value in local storage set a value, 
           // else concatenate the previously pushed variable in the array to the varible storedPlantNames, and then re-store it in local storage.
           if (storedPlantNames === null || storedPlantNames === undefined) {
               localStorage.setItem("plant-names", JSON.stringify(plantNamesArray));
           } else if (storedPlantNames.length > 0) {
               plantNamesArray = plantNamesArray.concat(storedPlantNames);
               storeLocal();
           };

           function storeLocal () {
               localStorage.setItem("plant-names", JSON.stringify(plantNamesArray));
           };

           // var displayPlantItem = document.createElement("p");
           // displayPlantItem.setAttribute("id", "display-individual-plant-item");
           // displayPlantItem.textContent = data.common_name;
           // appendUserSelectedPlantItems.appendChild(displayPlantItem);
           
           // Draggable code for plant items.
           displayPlantItem.setAttribute("draggable", draggable = true);
           displayPlantItem.addEventListener("dragstart", function (event) {
               console.log(event);
           });

           // function dragAndDrop (event) {

           // };
           // dragAndDrop();

           // console.log(document.body.children[6].children[i]);

       });
       
   };
};

// Checks to see if there are any stored values in local storage, and will then call the function.
if (storedUserSelectedItems !== null) {
   renderSavedPlantItemsUponLoad();
};

//   function get_country_code_api() { 
//     country_str_final = ""; 
//     fetch(country_url)
//       .then(function (response) {
//         if (response.ok) {
//            response.json().then(function (data) {
//            //"au": {..} //"de":{..}
//            for(var key in data) {
//              //console.log("A point is "+data[key].alpha2Code);
//              //country_code_variable = data[key].alpha2Code;
//              country_str_final = data[key].name;
//          }
//          for (var i=0; i < data.length; i++ ) {
//             console.log("B point is "+data[i]);
//          } 
//          console.log(data);
//          console.log("country_str_final is "+country_str_final);

      
//           // call weather webpage by passing data.coord.lat, data.coord.lon
//         })
     
//      } else {
//         if (response.status === 404) {
//            console.log(country.value + " not found ! Please re-enter the country name.") 
//         }
//         else {
//            console.log("error occurred !")
//         }   
//      }
//    })
//    .catch(function (error)  {
//        alert('Unable to connect to Country Code Database'+error);
//    })



//$("btn").click(function(){
//    alert("Value: "+$("#city").val());
//});

//$(document).ready(function(){
// $("btn").click(function(
//    alert("Value: "+$("#city").val());
// });
//});
