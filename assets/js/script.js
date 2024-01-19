var apiKey = "sk-fKLP65a1e36e3cacb3763";
var getApiKey = "https://perenual.com/api/species-list?key=" + apiKey;
var userInput = document.getElementById("user-input");
var searchBtn = document.getElementById("search-button");
var clearSearchedItems = document.getElementById("clear-searched-items");
var appendParameters = document.getElementById("parameters-boolean-values");

var parametersBtnSunlight = document.getElementById("Sunlight");
parametersBtnSunlight.addEventListener("click", parametersArrayContentPlus);
var parametersBtnCycle = document.getElementById("Cycle");
parametersBtnCycle.addEventListener("click", parametersArrayContentPlus);
var parametersBtnWatering = document.getElementById("Watering");
parametersBtnWatering.addEventListener("click", parametersArrayContentPlus);

var keyWord =  "https://perenual.com/api/species-list?key=" + apiKey;
var keyWordUserSearch = "&q=";

// If the variable "keyWord" has not taken any user input this if statement will hide the "clear search items" button.
if (keyWord === "https://perenual.com/api/species-list?key=" + apiKey) {
    clearSearchedItems.setAttribute("style", "visibility:hidden;");
};

// This is the section of code relevant to the parameters buttons with boolean values.
// Sets attribute and adds event listener.
for (let i = 0; i < parametersArray.length; i++) {
    var parametersBtnBoolean = document.body.children[1].children[1].children[i];
    parametersBtnBoolean.setAttribute("id", parametersArray[i].content);
    parametersBtnBoolean.addEventListener("click", userParameters);
};

// Use this function to generate all of the "four values" buttons.
function parametersArrayContentPlus (event) {
    var parametersBtnSunlight = parametersArraySunlight[1].content;
    var parametersBtnCycle = parametersArrayCycle[1].content;
    var parametersBtnWatering = parametersArrayWatering[1].content;
    
    console.log(event.target.textContent);

    // Ensures that the content generated by the four values buttons doesn't keep generating.
    document.getElementById("four-values-append-sunlight").innerHTML = "";
    document.getElementById("four-values-append-cycle").innerHTML = "";
    document.getElementById("four-values-append-watering").innerHTML = "";

    if (parametersBtnSunlight == event.target.textContent) {
        for (let i = 0; i < 4; i++) {
            var parametersBtnSunlightApiAdd = document.createElement("button");
            parametersBtnSunlightApiAdd.textContent = parametersArraySunlight[3].contentPlus[i];
            parametersBtnSunlightApiAdd.setAttribute("class", "all-parameters");
            parametersBtnSunlightApiAdd.setAttribute("id", parametersArraySunlight[3].contentPlus[i]);
            document.getElementById("four-values-append-sunlight").appendChild(parametersBtnSunlightApiAdd);
            parametersBtnSunlightApiAdd.addEventListener("click", sunlightParametersAdd);
            document.getElementById("four-values-append-sunlight").setAttribute("style", "visibility: visible;");
        };
    } else if (parametersBtnCycle == event.target.textContent) {
        for (let i = 0; i < 4; i++) {
            var parametersBtnCycleApiAdd = document.createElement("button");
            parametersBtnCycleApiAdd.textContent = parametersArrayCycle[3].contentPlus[i];
            parametersBtnCycleApiAdd.setAttribute("class", "all-parameters");
            parametersBtnCycleApiAdd.setAttribute("id", parametersArrayCycle[3].contentPlus[i]);
            document.getElementById("four-values-append-cycle").appendChild(parametersBtnCycleApiAdd);
            parametersBtnCycleApiAdd.addEventListener("click", cycleParametersAdd);
            document.getElementById("four-values-append-cycle").setAttribute("style", "visibility: visible;");
        };
    } else if (parametersBtnWatering == event.target.textContent) {
        for (let i = 0; i < 4; i++) {
            var parametersBtnWateringApiAdd = document.createElement("button");
            parametersBtnWateringApiAdd.textContent = parametersArrayWatering[3].contentPlus[i];
            parametersBtnWateringApiAdd.setAttribute("class", "all-parameters");
            parametersBtnWateringApiAdd.setAttribute("id", parametersArrayWatering[3].contentPlus[i]);
            document.getElementById("four-values-append-watering").appendChild(parametersBtnWateringApiAdd);
            parametersBtnWateringApiAdd.addEventListener("click", wateringParametersAdd);
            document.getElementById("four-values-append-watering").setAttribute("style", "visibility: visible;");
        };
    };   
};

// This function handles the logic related to the parameters buttons with boolean values.
function userParameters (event) {
    var parametersInput = event.target.textContent;

    // This for loop will add the user input into the api query for all the parameters buttons with boolean values.
    for (let i = 0; i < parametersArray.length; i++) {
        // The parametersInput variable must have a loose equality to the content variable of whatever index the for loop is currently iterating through in the parameters array.
        if (parametersInput == parametersArray[i].content) {
            keyWord = keyWord + parametersArray[i].addToParameters;
        };
    };

    console.log(parametersInput);
    console.log(keyWord);
};

// Add the "sunlight" search parameters to the variable keyword.
function sunlightParametersAdd (event) {
    var userParameters = event.target.textContent;
    console.log(userParameters);
    for (let i = 0; i < parametersArraySunlight.length; i++) {
        if (userParameters == parametersArraySunlight[3].contentPlus[i]) {
            keyWord = keyWord + parametersArraySunlight[0].addToParameters[i];
            console.log(keyWord);
        };
    };
};

// Add the "cycle" search parameters to the variable keyword.
function cycleParametersAdd (event) {
    var userParameters = event.target.textContent;
    console.log(userParameters);
    for (let i = 0; i < parametersArrayCycle.length; i++) {
        if (userParameters == parametersArrayCycle[3].contentPlus[i]) {
            keyWord = keyWord + parametersArrayCycle[0].addToParameters[i];
            console.log(keyWord);
        };
    };
};

// Add the "watering" search parameters to the variable keyword.
function wateringParametersAdd (event) {
    var userParameters = event.target.textContent;
    console.log(userParameters);
    for (let i = 0; i < parametersArrayWatering.length; i++) {
        if (userParameters == parametersArrayWatering[3].contentPlus[i]) {
            keyWord = keyWord + parametersArrayWatering[0].addToParameters[i];
            console.log(keyWord);
        };
    };
};

// This function handles the api call.
function searchDatabase () {

    // Puts the variable "keyWord" into local storage.
    localStorage.setItem("key-word", JSON.stringify(keyWord));
    
    // Clears all previously rendered html elements from the screen.
    document.getElementById("append-search-items").innerHTML = "";
    document.getElementById("append-search-items-button").innerHTML = "";
    document.getElementById("append-search-items-button-more").innerHTML = "";
    document.getElementById("four-values-append-sunlight").innerHTML = "";
    document.getElementById("four-values-append-cycle").innerHTML = "";
    document.getElementById("four-values-append-watering").innerHTML = "";
    
    // Checks to see if the textbox is empty or not so as to add the user imput to the api query.
    if (userInput.value !== "") {
        keyWord = keyWord.concat(keyWordUserSearch).concat(userInput.value.trim().toLowerCase().replaceAll(" ","_"));
        // Puts the variable "keyWord" into local storage with userInput.value attached.
        localStorage.setItem("key-word", JSON.stringify(keyWord));
        console.log(keyWord);
        userInput.value = "";
    };

    // This if statement will show the button to clear search items as well as hide all other search related content, only if the api key has taken user input.
    if (keyWord !== "https://perenual.com/api/species-list?key=" + apiKey) {
        clearSearchedItems.setAttribute("style", "visibility:visible;");
        searchBtn.setAttribute("style", "display:none;");
        clearSearchedItems.addEventListener("click", clearSearchedItemsFunction);
        document.getElementById("user-selection").setAttribute("style", "display:none;");
    } else {
        clearSearchedItems.setAttribute("style", "visibility:visible;");
        clearSearchedItems.addEventListener("click", clearSearchedItemsFunction);
    };

    fetch(keyWord)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Variables relevant to content generated by the api response.
            var renderList = data.data;
            var allPages = data.last_page;
            var appendSearchItems = document.getElementById("append-search-items");
            var appendSearchItemsBtn = document.getElementById("append-search-items-button");
            var appendSearchItemsBtnMore = document.getElementById("append-search-items-button-more");

            // User will get this message if they input too many search parameters.
            if (data.data == "") {
                appendSearchItems.textContent = "Nothing met your search requirements";
            };

            // Renders searched items to the page
            for (let i = 0; i < renderList.length; i++) {
                var listItem = data.data[i].common_name;
                var appendData = document.createElement("a");
                appendData.setAttribute("href", "./plant_items.html");
                appendData.addEventListener("click", localStoragePlus);
                appendData.textContent = listItem;
                appendSearchItems.appendChild(appendData);
            };

            // Creates a button for every page available to scroll through.
            if (allPages <= 1) {
                return;
            } else  if (allPages <= 10) {
                for (let i = 1; i <= allPages; i++) {
                    var pageBtn = document.createElement("button");
                    pageBtn.textContent = [i];
                    pageBtn.setAttribute("id", "page-button");
                    appendSearchItemsBtn.appendChild(pageBtn);
                    pageBtn.addEventListener("click", changePage);
                };
            } else if (allPages > 10) {
                var pageBtnMinus = document.createElement("button");
                pageBtnMinus.textContent = "-";
                pageBtnMinus.setAttribute("id", "page-button-minus");
                appendSearchItemsBtn.appendChild(pageBtnMinus);
                pageBtnMinus.addEventListener("click", pageDown);

                for (let i = 1; i <= 10; i++) {
                    var pageBtn = document.createElement("button");
                    pageBtn.textContent = [i];
                    pageBtn.setAttribute("id", "page-button");
                    appendSearchItemsBtn.appendChild(pageBtn);
                    pageBtn.addEventListener("click", changePage);    
                };

                for (let i = 11; i <= 20; i++) {
                    var pageBtn = document.createElement("button");
                    pageBtn.textContent = [i];
                    pageBtn.setAttribute("id", "page-button");
                    appendSearchItemsBtnMore.appendChild(pageBtn);
                    pageBtn.addEventListener("click", changePage);    
                };

                var pageBtnPlus = document.createElement("button");
                pageBtnPlus.textContent = "+";
                pageBtnPlus.setAttribute("id", "page-button-plus");
                appendSearchItemsBtn.appendChild(pageBtnPlus);
                pageBtnPlus.addEventListener("click", pageUp);

            };

            // Function to change the page.
            function changePage (event) {
                console.log(event.target.textContent);
                var pageNum = event.target.textContent;
                keyWord = keyWord + "&page=" + pageNum;
                appendSearchItems.innerHTML = "";
                appendSearchItemsBtn.innerHTML = "";
                console.log(keyWord);
                searchDatabase();
            };

            // Function to increase page buttons shown by 10.
            function pageUp () {
                
            };

            // Function to decrease page buttons shown by 10.
            function pageDown () {

            };

            // Saves the plant item the user clicked on to local storage.
            function localStoragePlus (event) {
                var plantItemAdd = event.target.textContent;
                for (let i = 0; i < renderList.length; i++) {
                    if ( plantItemAdd == data.data[i].common_name) {
                        var plantItemClicked = data.data[i].id;
                        var keyWordPlantItem = `https://perenual.com/api/species/details/${plantItemClicked}?key=${apiKey}`;
                        localStorage.setItem("key-word-item-clicked", JSON.stringify(keyWordPlantItem));
                    };
                };
            };  
        });

        // Clears the previously searched items from the page.
        function clearSearchedItemsFunction () {
            window.location.reload();
            localStorage.removeItem("key-word");
        };
};

// Displays previously searched items so long as there is a value in local storage.
if (JSON.parse(localStorage.getItem("key-word")) !== null) {
    var displaySearchedItems = JSON.parse(localStorage.getItem("key-word"));
    keyWord = displaySearchedItems;

    searchDatabase();
};
  
searchBtn.addEventListener("click", searchDatabase);