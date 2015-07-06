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
        var data='name=[{"a":1},{"b":2,"c":3}]';
    	$.post("http://127.0.0.1:7000/commit/item1",
    		data,
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
        
        //window.location = "success.html";

    });
	
    //save-modal button
    $("#save-modal").click(function(){
        var result={};
        var array=$("#myModal").find("form").serializeArray();
        $.each(array,function(i, field){
            //alert(field.name + ":" + field.value);
            result[field.name] = field.value;
        });
        var s_result = JSON.stringify(result);  //JSON.stringify({"a":1,"b":2})
        //alert(s_result);
        
        //show new address to modal-list to show
        //result['address']

        $("#modal-list").append('<li><a href="#" style="float:left;width:95%">'+ result['address'] + '</a>'+
            '<span href="#" class="glyphicon glyphicon-remove remove-btn btn" aria-hidden="true"></span>'+
            '<a style="display:none">'+s_result+'</a></li>'
           );
        //add new form value to modal-total
        var new_val=$("#modal-total").val()+"+"+s_result;
        $("#modal-total").val(new_val);
    });


    //click modal list address item to show it's detail modal form
    //!!!!Important:
    //Use $(document).on('click','selector',function(){}) method to replace click(function(){}) to make click event still be able on the added element
    $(document).on('click', "#modal-list a", function(event) {
        event.preventDefault();
        /* Act on the event */
        //JSON String
        var s_result=$(this).parent().find('a[style="display:none"]').text();
        //alert(s_result);
        //JSON Object
        var result=$.parseJSON(s_result);

        var form=$("#myModal").find("form");

        form.find("input[name]").each(function(index, el) {
            $(el).val(result[$(el).attr('name')]);
        });

        $("#myModal").modal("show");
    });

    /*remove item when click remove-button*/
    $(document).on('click', '.remove-btn', function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
    /*change remove-button color when mouse moving on*/
    $(document).on('mouseenter', '.remove-btn', function() {
        
        $(this).css("color","red");
    });
    $(document).on('mouseleave', '.remove-btn', function() {

        $(this).css("color","#333");
    });

	$("#items").attr("onsubmit", "return validate_form(this)");

});
var validate_form = function(thisform){
		alert("bbbb");
		return true;
};
