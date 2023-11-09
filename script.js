function calculateBmi() {
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	
	if(weight > 0 && height > 0){	
		var bmi = weight/(height/100*height/100)
		document.getElementById('bmi').value = bmi;
		
		if(bmi < 18.5){
			document.getElementById('result').value = "Anda terlalu kurus.";
		}
		if(bmi > 18.5 && bmi < 24.9){
			document.getElementById('result').value = "Anda normal dan sehat.";
		}
		if(bmi > 25){
			document.getElementById('result').value = "Anda kelebihan berat badan.";
		}
	}
	else{
		alert("Masukan informasi berat dan tinggi badan!")
	}
}
