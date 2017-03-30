$(document).ready(function(){

	function Remove(elem1, elem2){
		this.getDocument(elem1, elem2);
	}

	Remove.prototype.getDocument = function(elem1, elem2){
		this.$elem1 = elem1;
		this.$elem2 = elem2;
		this.handleEvents();
	};

	Remove.prototype.handleEvents = function(){
		var btn = this.$elem1;
		var elem2 = this.$elem2;
		btn.hover(function(){
			elem2.stop().animate({
				'font-size': '24px'
			});
		},function(){
			elem2.stop().animate({
				'font-size': '16px'
			});
		});
	};

	var rm_kore = new Remove($('input[type=button]'), $('.kore'));
	var rm_are = new Remove($('input[type=button]'), $('.are'));
	var rm_sore = new Remove($('input[type=button]'), $('.sore'));

});