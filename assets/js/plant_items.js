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
            var displayImg = document.createElement("img");
            var targetImg = data.default_image.small_url;
            displayImg.setAttribute("src", targetImg);
            appendIndividualSearchItems.appendChild(displayImg);
        });
};

renderUserInput();