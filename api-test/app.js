function getBreederData() {
	$.ajax({
		method: "GET",
		url: "/api/breeders"
	}).then(function(data) {
		console.log(data);
	});
}

function getCompetitionData() {
	$.ajax({
		method: "GET",
		url: "/api/competitions"
	}).then(function(data) {
		console.log(data);
	});
}

getBreederData();
getCompetitionData();