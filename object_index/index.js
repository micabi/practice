$(document).ready(function(){
/*
	$('ul.tab').find('li').children('a').on('click', function(e){
		e.preventDefault();
		var $index = $(this).parent('li').index();

		$('div.panel').removeClass('show');
		$('div.panel').eq($index).addClass('show');
	});
*/

function Change(element1, element2){
	this.getDocuments(element1, element2);
}

Change.prototype.getDocuments = function(element1, element2){
	this.$tab = element1;
	this.$panel = element2;
	this.display();
};

Change.prototype.display = function(){
	var tab = this.$tab;
	var panel = this.$panel;
	tab.on('click', function(e){
		var index = $(e.target).parent('li').index();
		panel.removeClass('show');
		panel.eq(index).addClass('show');
	});

};

var tab = new Change($('ul.tab').find('li').children('a'), $('div.panel'));

});