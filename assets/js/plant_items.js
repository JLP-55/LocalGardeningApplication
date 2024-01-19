var KeyWordUserItem = JSON.parse(localStorage.getItem("key-word-item-clicked"));
var appendIndividualSearchItems = document.getElementById("append-individual-search-items");

function renderUserInput () {
    fetch(KeyWordUserItem)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data);

            // Generates an image of the clicked plant.
            if (data.default_image !== null) {
                var displayImg = document.createElement("img");
                var targetImg = data.default_image.small_url;
                displayImg.setAttribute("src", targetImg);
                appendIndividualSearchItems.appendChild(displayImg);
            };

            // Generates plant name.
            var appendCommonName = document.createElement("h5");
            var commonName = (data.common_name);
            appendCommonName.textContent = commonName;
            appendIndividualSearchItems.appendChild(appendCommonName);

            // Generates plant description.
            var appendPlantDescription = document.createElement("p");
            var PlantDescription = data.description;
            appendPlantDescription.textContent = PlantDescription;
            appendIndividualSearchItems.appendChild(appendPlantDescription);
        });
};

renderUserInput();