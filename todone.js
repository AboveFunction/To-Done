var options = $(".module li div").hammer();
var item = $(".module li").hammer();


item.on("swiperight", function(ev) {
	$(this).children("div").animateAuto("width", 500);
});

item.on("tap", function(ev) {
	$(this).children("div").animateAuto({"width": "+=50px"}, 500);
});




// jQuery AnimateAuto - for automatic widths
jQuery.fn.animateAuto = function(prop, speed, callback){
    var elem, width;
    return this.each(function(i, el){
        el = jQuery(el), elem = el.clone().css({"width":"auto"}).appendTo("li div");
        width = elem.css("width"),
        elem.remove();
        
        if(prop === "width")
            el.animate({"width":width}, speed, callback);  
    });  
}


// Remove Click Delay
function NoClickDelay(el) {
	this.element = el;
	if( window.Touch ) this.element.addEventListener('touchstart', this, false);
}

NoClickDelay.prototype = {
	handleEvent: function(e) {
		switch(e.type) {
			case 'touchstart': this.onTouchStart(e); break;
			case 'touchmove': this.onTouchMove(e); break;
			case 'touchend': this.onTouchEnd(e); break;
		}
	},

	onTouchStart: function(e) {
		e.preventDefault();
		this.moved = false;

		this.element.addEventListener('touchmove', this, false);
		this.element.addEventListener('touchend', this, false);
	},

	onTouchMove: function(e) {
		this.moved = true;
	},

	onTouchEnd: function(e) {
		this.element.removeEventListener('touchmove', this, false);
		this.element.removeEventListener('touchend', this, false);

		if( !this.moved ) {
			// Place your code here or use the click simulation below
			var theTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;

			var theEvent = document.createEvent('MouseEvents');
			theEvent.initEvent('click', true, true);
			theTarget.dispatchEvent(theEvent);
		}
	}
};

// (function() {

// 	var item = document.querySelector('#item'),
// 		form = document.querySelector('form'),
// 		list = document.querySelector('#list');

// 	form.addEventListener('submit', function(ev) {
// 		list.innerHTML += '<li><div><a href="#">edit</a> <a href="#">delete</a></div> ' + item.value + '</li>';
// 		saveItem()
// 		ev.preventDefault();

// 		document.getElementById('item').value="";

// 	}, false);

// 	list.addEventListener('click', function(ev) {
// 		var t = ev.target,
// 			classList = t.classList;
			
// 		if (classList.contains('done') && classList.contains('checked')) {
// 			t.parentNode.removeChild(t);
// 			saveItem();
// 		} else {
// 			if (classList.contains('checked')) {
// 				classList.add('done');
// 			} else {
// 				classList.add('checked');
// 			}
// 		}
// 		ev.preventDefault();
// 	}, false);

// 	function saveItem(){
// 		window.localStorage.myItems = list.innerHTML;
// 	};

// 	function getList() {
// 		var listItems = window.localStorage.myItems;	
		
// 		if (typeof(listItems) != 'undefined') {
// 			list.innerHTML = listItems;
// 		} else {
// 			list.innerHTML = '<p class="nothing">Add an item below!</p>'
// 		}

// 	};

// 	getList();

// })();