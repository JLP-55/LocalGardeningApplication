var apiKey = "sk-fKLP65a1e36e3cacb3763";
var KeyWordUserItem = JSON.parse(localStorage.getItem("key-word-item-clicked"));
var appendIndividualSearchItems = document.getElementById("append-individual-search-items");
var appendPlantStatistics = document.getElementById("append-plant-statistics");
var appendPlantNeeds = document.getElementById("append-plant-needs");
var appendUserSelectedPlantItems = document.getElementById("append-user-selected-plant-items");
var userSelectedItem = [];
var storedUserSelectedItems = JSON.parse(localStorage.getItem("user-selected-items"));
var saveToPlantingListBtn = document.querySelector("button");

var backBtn = document.createElement("button");
backBtn.setAttribute("id", "back-button");
backBtn.setAttribute("class", "basis-3/4 inline-grid grid-cols-2 list-disc mb-6 border-2 border-emerald-600 rounded-lg bg-green-300 p-2");
backBtn.setAttribute("style", "position:relative; top: 25px; height:auto; width: 90px; margin-bottom: 50px; border: solid; border-radius: 8px; background-color: pink;");
backBtn.textContent = "Back";
document.querySelector("h2").appendChild(backBtn);
backBtn.addEventListener("click", back);

function back () {
    history.back();
}



function renderUserInput () {
    fetch(KeyWordUserItem)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);

            saveToPlantingListBtn.setAttribute("id", data.id);
            saveToPlantingListBtn.addEventListener("click", savePlantItem);
            saveToPlantingListBtn.addEventListener("click", renderSavedPlantItemsUponClick);

            // Generates an image of the clicked plant.
            if (data.default_image != null || data.default_image != undefined) {
                var displayImg = document.createElement("img");
                var targetImg = data.default_image.small_url;
                displayImg.setAttribute("src", targetImg);
                appendIndividualSearchItems.appendChild(displayImg);
            };

            // Generates plant name.
            var appendCommonName = document.createElement("h4");
            appendCommonName.setAttribute("style", "font-weight:bold;")
            var commonName = (data.common_name);
            appendCommonName.textContent = commonName;
            appendIndividualSearchItems.appendChild(appendCommonName);
            
            // Generates plant description.
            if (data.description != null || data.description != undefined) {
                var appendPlantDescription = document.createElement("p");
                var PlantDescription = data.description;
                appendPlantDescription.textContent = PlantDescription;
                appendIndividualSearchItems.appendChild(appendPlantDescription);
            };
            
            // Plant statistics section of code.
            if (data.attracts[0] != null || data.attracts[0] != undefined) {
                var appendAttracts = document.createElement("p");
                // appendAttracts.setAttribute("style", "font-weight:bold;");
                var attracts = data.attracts;
                appendAttracts.textContent = "This plant will attract: " + attracts;
                appendPlantStatistics.appendChild(appendAttracts);
            };

            if (data.care_level != null || data.care_level != undefined) {
                var appendCareLevel = document.createElement("li");
                var careLevel = data.care_level;
                appendCareLevel.textContent = "Care level: " + careLevel;
                appendPlantStatistics.appendChild(appendCareLevel);
            };

            if (data.cycle != null || data.cycle != undefined) {
                var appendCycle = document.createElement("li");
                var cycle = data.cycle;
                appendCycle.textContent = "Cycle: " + cycle;
                appendPlantStatistics.appendChild(appendCycle);
            };

            if (data.dimension != null || data.dimension != undefined) {
                var appendDimension = document.createElement("li");
                var dimension = data.dimension;
                appendDimension.textContent = "Plant dimensions: " + dimension;
                appendPlantStatistics.appendChild(appendDimension);
            };

            if (data.drought_tolerant != null || data.drought_tolerant != undefined) {
                var appendDroughtTolerant = document.createElement("li");
                var droughtTolerant = data.drought_tolerant;
                if (droughtTolerant === 0 || droughtTolerant === false) {
                    appendDroughtTolerant.textContent = "This plant is not drought tolerant"
                } else {
                    appendDroughtTolerant.textContent = "This plant is drought tolerant"
                };
                appendPlantStatistics.appendChild(appendDroughtTolerant);
            };

            if (data.fruits != null || data.fruits != undefined) {
                var appendFruits = document.createElement("li");
                var fruits = data.fruits;
                appendFruits.textContent = "Produce fruits: " + fruits;
                appendPlantStatistics.appendChild(appendFruits);
            };

            if (data.edible_fruit != null || data.edible_fruit != undefined) {
                var appendEdibleFruit = document.createElement("li");
                var edibleFruit = data.edible_fruit;
                if (edibleFruit === 0 || edibleFruit === false) {
                    appendEdibleFruit.textContent = "Fruits are inedible";
                } else {
                    appendEdibleFruit.textContent = "This plant produces edible fruit";
                };
                appendPlantStatistics.appendChild(appendEdibleFruit);
            };

            if (data.flowering_season != null || data.flowering_season != undefined) {
                var appendFloweringSeason = document.createElement("li");
                var floweringSeason = data.flowering_season;
                appendFloweringSeason.textContent = "Flowering season: " + floweringSeason;
                appendPlantStatistics.appendChild(appendFloweringSeason);
            };

            if (data.growth_rate != null || data.growth_rate != undefined) {
                var appendGrowthRate = document.createElement("li");
                var growthRate = data.growth_rate;
                appendGrowthRate.textContent = "Growth rate: " + growthRate;
                appendPlantStatistics.appendChild(appendGrowthRate);
            };

            if (data.harvest_season != null || data.harvest_season != undefined) {
                var appendHarvestSeason = document.createElement("li");
                var harvestSeason = data.harvest_season;
                appendHarvestSeason.textContent = "Harvest season: " + harvestSeason;
                appendPlantStatistics.appendChild(appendHarvestSeason);
            };

            if (data.indoor != null || data.indoor != undefined) {
                var appendIndoor = document.createElement("li");
                var indoor = data.indoor;
                if (indoor === 0 || indoor === false) {
                    appendIndoor.textContent = "This is not an indoor plant";
                } else {
                    appendIndoor.textContent = "This is an indoor plant";
                };
                appendPlantStatistics.appendChild(appendIndoor);
            };

            if (data.maintenance != null || data.maintenance != undefined) {
                var appendMaintenance = document.createElement("li");
                var maintenance = data.maintenance;
                appendMaintenance.textContent = "Maintenance level: " + maintenance;
                appendPlantStatistics.appendChild(appendMaintenance);
            };

            if (data.medicinal != null || data.medicinal != undefined) {
                var appendMedicinal = document.createElement("li");
                var medicinal = data.medicinal;
                if (medicinal === 0 || medicinal === false) {
                    appendMedicinal.textContent = "This plant has no known medicinal purposes";
                } else {
                    appendMedicinal.textContent = "This plant can be used for medicinal purposes";
                }
                appendPlantStatistics.appendChild(appendMedicinal);
            };

            if (data.poisonous_to_humans != null || data.poisonous_to_humans != undefined) {
                var appendPoisonousToHumans = document.createElement("li");
                var poisonousToHumans = data.poisonous_to_humans;
                if (poisonousToHumans == 0 || poisonousToHumans == false) {
                    appendPoisonousToHumans.textContent = "This plant is not poisonous to humans" ;
                } else if (poisonousToHumans == 1 || poisonousToHumans == true) {
                    appendPoisonousToHumans.textContent = "This plant is poisonous to humans" ;
                };
                appendPlantStatistics.appendChild(appendPoisonousToHumans);
            };

            if (data.poisonous_to_pets != null || data.poisonous_to_pets != undefined) {
                var appendPoisonousToPets = document.createElement("li");
                var poisonousToPets = data.poisonous_to_pets;
                if (poisonousToPets == 0 || poisonousToPets == false) {
                    appendPoisonousToPets.textContent = "This plant is not poisonous to pets" ;
                } else if (poisonousToPets == 1 || poisonousToPets == true) {
                    appendPoisonousToPets.textContent = "This plant is poisonous to pets" ;
                };
                appendPlantStatistics.appendChild(appendPoisonousToPets);
            };
            
            // Plant needs section of code.
            // if (data.propagation !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.pruning_count !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };
            
            // if (data.pruning_month !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.salt_tolerant !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.soil !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.sunlight !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.tropical !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.water_requirement !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // if (data.watering_general_benchmark !== null || data.variable !== undefined) {
            //     var appendAttracts = document.createElement("p");
            //     var variable = data
            //     textContent
            //     appendPlantNeeds.appendChild();
            // } else {

            // };

            // This function will save the id of the plant to local storage in an array to be used later by the weather/calendar api.
            function savePlantItem () {
                if (storedUserSelectedItems === null || storedUserSelectedItems === undefined) {

                } else if (storedUserSelectedItems.length > 0) {
                    userSelectedItem = userSelectedItem.concat(storedUserSelectedItems);
                };
                
                userSelectedItem.push(data.id);
                localStorage.setItem("user-selected-items", JSON.stringify(userSelectedItem));
                saveToPlantingListBtn.textContent = "Item saved";
                saveToPlantingListBtn.removeEventListener("click", savePlantItem);
            };

            // "Item saved" text will persist upon revisiting the page of any plant the user has already saved to local storage.
            if (storedUserSelectedItems !== null) {
                for (let i = 0; i < storedUserSelectedItems.length; i++) {
                    // Checks the id of the button against every value in the array in local storage.
                    if (storedUserSelectedItems[i] == saveToPlantingListBtn.getAttribute("id")) {
                        saveToPlantingListBtn.textContent = "Item saved";
                        saveToPlantingListBtn.removeEventListener("click", savePlantItem);
                        saveToPlantingListBtn.removeEventListener("click", renderSavedPlantItemsUponClick);
                    };
                };
            };

            // This function will add the most recent user selected plant item to the page.
            function renderSavedPlantItemsUponClick () {
                var plantItemId = saveToPlantingListBtn.getAttribute("id");
                var plantItemApi = `https://perenual.com/api/species/details/${plantItemId}?key=${apiKey}`;
                
                fetch(plantItemApi)
                .then(function (response) {
                    return response.json();
                })
                .then (function (data) {
                    var displayPlantItem = document.createElement("p");
                    displayPlantItem.setAttribute("class", "display-individual-plant-item");
                    displayPlantItem.textContent = data.common_name;
                    appendUserSelectedPlantItems.appendChild(displayPlantItem);
                    saveToPlantingListBtn.removeEventListener("click", renderSavedPlantItemsUponClick);
                });
            };

            // This function will render all the user saved plant items to the page.
            function renderSavedPlantItemsUponLoad () {
                var storedUserSelectedItems = JSON.parse(localStorage.getItem("user-selected-items"));

                for (let i = 0; i < storedUserSelectedItems.length; i++) {
                    var plantItemId = storedUserSelectedItems[i];
                    var plantItemApi = `https://perenual.com/api/species/details/${plantItemId}?key=${apiKey}`;
                    
                    fetch(plantItemApi)
                    .then(function (response) {
                        return response.json();
                    })
                    .then (function (data) {
                        var displayPlantItem = document.createElement("p");
                        displayPlantItem.setAttribute("class", "display-individual-plant-item");
                        displayPlantItem.textContent = data.common_name;
                        appendUserSelectedPlantItems.appendChild(displayPlantItem);
                    });
                };
            };

            if (storedUserSelectedItems !== null) {
                renderSavedPlantItemsUponLoad();
            };

        });
};

renderUserInput();