$(document).ready(function(){

	function Const(youso){
		this.initialize(youso); // ①
	}

	Const.prototype.initialize = function(youso){ // ①'
		this.$youso = youso;
		this.handleEvents(); // ②
	};

	Const.prototype.handleEvents = function(){ // ②'
		this.$youso.on("click", function(){
			console.log(this);
			//this.fadeOut(); ◯
			//this.$youso.fadeOut(); X
			//$('#are').fadeOut(); ◯
		});
	};

	var kore_start = new Const($("#kore")); // ③インスタンス


	// ①で定義したメソッドを①'で中身を書く
	// ②で定義したメソッドを②'でで中身を書く
	// ③で実行

	//var $kore = $('#kore');
	//console.log($kore);
});