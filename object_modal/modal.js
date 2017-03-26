$(document).ready(function(){

function Modal(element){ // コンストラクタ
	this.initialize(element);
}

 // 要素の取得
Modal.prototype.initialize = function(element){
	this.$element = element;
	this.$container = $('#modal');
	this.$contents = $('#modal-contents');
	this.$close = $('#modal-close');
	this.$next = $('#modal-next');
	this.$prev = $('#modal-prev');
	this.$overlay = $('#modal-overlay');
	this.$window = $(window);
	this.index = 0;
	this.handleEvents();
};

 // クリックイベント
Modal.prototype.handleEvents = function(){
	var self = this;
	this.$element.on("click", function(e){
		self.show(e);
		return false;
	});

	this.$close.on("click", function(e){
		self.hide(e);
		return false;
	});

	this.$overlay.on("click", function(e){
		self.hide(e);
		return false;
	});
};

// showメソッド
Modal.prototype.show = function(e){
	var $target = $(e.currentTarget);
	var src = $target.attr("href");
	this.$contents.html("<img src=\"" + src + "\"/>");
	this.$container.fadeIn();
	this.$overlay.fadeIn();
	this.index = $target.data('index');
	return false;
};

// hideメソッド
Modal.prototype.hide = function(e){
	this.$container.fadeOut();
	this.$overlay.fadeOut();
};

var modal = new Modal($('#modal-thumb a')); // インスタンス

}); // end jQuery