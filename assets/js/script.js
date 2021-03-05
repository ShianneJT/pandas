const displayGifs = () => {
    const giphyKey = "jeNtNzOLOIjvgsW8XsqubMLndTig1AXs";

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=pandas&api_key=" + giphyKey;
    let gifNum = Math.floor(Math.random() * 49);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (res) {
        let results = res.data;
  
        //let gifDiv = $("<div>");
        let charGif = $("<img>");
        charGif.attr("src", results[gifNum].images.original.url);
  
        //gifDiv.prepend(charGif);
        $("#pandaBox").prepend(charGif);
      });
};

// Handle button click
$(".startBtn").click(function() {
    displayGifs();
});
