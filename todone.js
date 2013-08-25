var options = $(".module li div").hammer();
var item = $(".module li").hammer();

// Get the list from local storage
$("#list").append(window.localStorage.toDone);

// List options
item.on("tap", function(ev) {
	$(this).children("div").animateAuto("width", 500);
});

item.on("swipeleft", function(ev) {
	$(this).children("div").animate({"width": "30px"}, 500);
});

// Add something to the list
function addThis() {
	var addThis = prompt("What would you like to add?");

	$("#list").append("<li><div><a href='#'>edit</a> <a href='#'>delete</a></div> <span id='item-to-do'>" + addThis + "</span></li>");
 	
	window.localStorage.toDone = $('#list').html();
}

// Marking things as done
$("#item-to-do").click(function() {
	console.log("clicked");
});

// jQuery AnimateAuto - for automatic widths in the list options
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