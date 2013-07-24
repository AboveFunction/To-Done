(function() {
	var item = document.querySelector('#item'),
		form = document.querySelector('form'),
		list = document.querySelector('#list');

	form.addEventListener('submit', function(ev) {
		list.innerHTML += '<li>' + item.value + '</li>';
		saveItem()
		ev.preventDefault();
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
		list.innerHTML = window.localStorage.myItems;
	};

	getList();

})();