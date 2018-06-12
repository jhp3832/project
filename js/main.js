function addPlayers(numPlayer) {
	alert(numPlayer.value);
	var body = document.getElementById('scoreBoardBody');

	for (var i = 0; i < numPlayer.value; i++){
		var newRow = body.insertRow(body.rows.length);

		for(var j = 0; j < 10; j++){
			newRow.insertCell(0);
		}
	}

}