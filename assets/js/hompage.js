
var newKey = 'f3dc7f08f8996252233636ace6296336';
var country_code_key = "Qo6BcIalfxm9oIX5dWgWO8VGimAggzBxRL0hjm1G";
var country_code_variable;
var country_str_final;

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

         // Creates a content for all items iterated over in data.list
         for (let i = 0; i < data.list.length; i++) {
            var contentAppend = document.createElement("div");
            
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
}


//$("btn").click(function(){
//    alert("Value: "+$("#city").val());
//});

//$(document).ready(function(){
// $("btn").click(function(
//    alert("Value: "+$("#city").val());
// });
//});
