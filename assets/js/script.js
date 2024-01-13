var apiKey = "sk-fKLP65a1e36e3cacb3763";
var getApiKey = "https://perenual.com/api/species-list?key=" + apiKey;
var userInput = document.getElementById("user-input");
var searchBtn = document.getElementById("search-button");
// var parametersBtn = document.getElementById("parameter-button");
var index = 0;
var appendParameters = document.getElementById("user-selection-div");


// Currently unable to get the var keyWord to take the value from userInput.
// var keyWord =  "https://perenual.com/api/species-list?key=" + apiKey + "&q=" + userInput.value;
// var keyWord =  `https://perenual.com/api/species-list?key=${apiKey}&q=${userInput.value}`;

var keyWord =  "https://perenual.com/api/species-list?key=" + apiKey + "";

// This is the section of code responsible for the generation of the parameters buttons.
for (var i = 0; i < parametersArray.length; i++) {
    // var userChoice = event.target.textContent;
    // var parametersInput = parametersArray[i].content;
    
    var parametersBtn = document.createElement("button");
    parametersBtn.textContent = parametersArray[i].content;
    parametersBtn.setAttribute("class", "all-parameters");
    parametersBtn.setAttribute("id", parametersArray[i].content);
    appendParameters.appendChild(parametersBtn);
    parametersBtn.addEventListener("click", userParameters);
    
    // console.log(userChoice);
    // console.log(parametersInput);
};

// This function handles the logic related to the parameters buttons.
function userParameters (event) {
    var parametersInput = event.target.textContent;

    if (parametersInput === parametersBtn.getAttribute("id")) {
        // console.log("hello");
        console.log(parametersArray[2].content);
    };

    keyWord = keyWord + parametersArray[2].indoor;
    console.log(parametersInput);
    console.log(keyWord);
};

// This function is currently not being used.
function callParameters (event) {
    (this).textContent = "Select parameters";
    // var userChoice = select.getAttribute("id");    

    // btnOne = parseInt(appendParameters.children[1].getAttribute("id"))
    // btnOne = (appendParameters.children[0]);
    // btnTwo = (appendParameters.children[1]);
    // console.log(btnOne);
    // console.log(btnTwo);
    // console.log(parametersBtn);

    function addLocalStorage () {
        // console.log("hello");
    };
    
    // select.addEventListener ("click", addLocalStorage)
    this.addEventListener("click", addLocalStorage());
};

// for (var i = 0; i < parametersArray.length; i++) {
//     console.log(parametersArray[i]);
//     // var getApiKeyPlus = getApiKey + parametersArray[i];
// };

// This function handles the api call.
function searchDatabase () {
    fetch(keyWord)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.data[1]);
            console.log(data);
        });
        console.log(keyWord);
        // console.log(userInput.value);
};
  
// parametersBtn.addEventListener("click", callParameters);
searchBtn.addEventListener("click", searchDatabase);