window.onload = function(){

// 多次元配列
	var family = { Wataru: {"height": 164, "weight": 62}, Mizuki: {"height": 164, "weight": 68}, Mikan: {"height": 203, "weight": 12}, Karubi: {"height": 93, "weight": 11} };

	document.getElementById('result').innerHTML = "";

	var name = [];
	var height = [];
	var weight = [];
	for (var key in family) {
		name.push(key);
		height.push(family[key].height);
		weight.push(family[key].weight);
	}

	for (var i = 0; i < name.length; i++) {
		console.log(name[i] + "の身長は" + height[i] + "cm" + "体重は" + weight[i] + "kg");
	}

// 連想配列
	var myFamily = {"Wataru": "Adachi", "Mizuki": "Adachi", "Mikan": "Adachi", "Karubi": "Adachi"};

	for(var key in myFamily){
		console.log("名前は" + key + "苗字は" + myFamily[key] + "です");
	}
};