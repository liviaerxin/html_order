$(document).ready(function(){
	/*form submit only one form with all items*/
	/*
	$("#commit-btn").click(function(){
      alert("333");
      $("#items").submit();
    });
	*/
    
    /*AJAX to post one form with one item  */
	$("#commit-btn").click(function(){
		/*
    	$.post("http://127.0.0.1:7000/commit",
    		{suggest: "axn"},
    		function(data,status){
    			alert("Data: " + data + "\nStatus: " + status);
    		}
    		);
    	*/
    	var base_url = "http://127.0.0.1:7000/commit/";
    	$(".tab-content form").each(function(){
    		var data=$(this).serialize();
    		var item=$(this).parent().attr("id");
    		alert("Post item: " + item + "\nData: " + data);

    		$.post(
    			base_url + item,
    			data,
    			function(data,status){
    				alert("Data: " + data + "\nStatus: " + status);
    			}
    		);
    	});

    });
	

	$("#items").attr("onsubmit", "return validate_form(this)");

})
var validate_form = function(thisform){
		alert("bbbb");
		return true;
	};
