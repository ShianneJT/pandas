const displayGifs = () => {
	const giphyKey = "jeNtNzOLOIjvgsW8XsqubMLndTig1AXs";

	let queryURL = "https://api.giphy.com/v1/gifs/search?q=panda&api_key=" + giphyKey;
	let gifNum = Math.floor(Math.random() * 49);

	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (res) {
		let results = res.data;

		let charGif = $("<img>");
		charGif.attr("src", results[gifNum].images.original.url);

		$("#pandaBox").prepend(charGif);
	});
};

$("#givePandas").click(function () {
	displayGifs();
});
