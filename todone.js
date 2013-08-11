var overview = $(".container").hammer();
var tram = $(".tram").hammer();
var toDo = $(".to-do").hammer();
var toDone = $(".to-done").hammer();
var hideIt = $(".hide").hammer();

tram.on("swipeleft", function(ev) {
	$(".tram p").animate({"padding-left": "-=70px"}, "slow");
	$(".tram").animate({"background-position": "-=70px"}, "slow");
	$(".hide").animate({"right": "+=90px"}, "slow");
});

toDo.on("swiperight", function(ev) {
	$("#list").slideDown();
});

toDo.on("swipeleft", function(ev) {
	$(".add-list-items").show();
	$("#item").focus();
});

hideIt.on("tap", function(ev) {
	$(this).parent().slideUp("slow");
});


// Vanilla JS I can't write in jQuery yet :)

(function() {

	var item = document.querySelector('#item'),
		form = document.querySelector('form'),
		list = document.querySelector('#list');

	form.addEventListener('submit', function(ev) {
		list.innerHTML += '<li>' + item.value + '</li>';
		saveItem()
		ev.preventDefault();

		document.getElementById('item').value="";

	}, false);

	list.addEventListener('click', function(ev) {
		var t = ev.target,
			classList = t.classList;
			
		if (classList.contains('done') && classList.contains('checked')) {
			t.parentNode.removeChild(t);
			saveItem();
		} else {
			if (classList.contains('checked')) {
				classList.add('done');
			} else {
				classList.add('checked');
			}
		}
		ev.preventDefault();
	}, false);

	function saveItem(){
		window.localStorage.myItems = list.innerHTML;
	};

	function getList() {
		var listItems = window.localStorage.myItems;	
		
		if (typeof(listItems) != 'undefined') {
			list.innerHTML = listItems;
		} else {
			list.innerHTML = '<p class="nothing">Add an item below!</p>'
		}

	};

	getList();

})();