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
	
    var modaltotal = new Object();
    //save-modal button to add new address
    $(document).on("click","#save-modal",function(){
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
        //if result['address'] not existed ,add it
        var add=result['address'];
        if (typeof(modaltotal[add]) == "undefined"){

            $("#modal-list").append('<li><a href="#" style="float:left;width:95%" data-address="'+result['address']+'">'+ result['address'] + '</a>'+
                '<span href="#" class="glyphicon glyphicon-remove remove-btn btn" aria-hidden="true"></span>'+
                '<a style="display:none">'+s_result+'</a></li>'
            );
            //add new form value to modal-total and modaltotal Array
            modaltotal[add] = s_result;
            var new_val=$("#modal-total").val()+"+"+s_result;
            $("#modal-total").val(new_val);
        }else{
            alert(result['address'] + "is existed!");
        }
        
    });

    //modify-modal button to modify current address
    $(document).on("click","#modify-modal",function(event) {
        /* Act on the event */
        //previous address
        var address = $("#modify-modal").attr('data-address');

        //modified address and info
        var result={};
        var array=$("#myModal").find("form").serializeArray();
        $.each(array,function(i, field){
            //alert(field.name + ":" + field.value);
            result[field.name] = field.value;
        });
        var s_result = JSON.stringify(result);  //JSON.stringify({"a":1,"b":2})
        var modified_address = result['address'];



        //replace previous address with modified address
        var li = $('a[data-address="' + address + '"]').parent();
        alert("Notice:!! "+li.find('a[href]').attr('data-address') + " will be modified!");
        li.find('a[style="display:none"]').text(s_result);
        li.find('a[href]').text(modified_address);
        li.find('a[href]').attr('data-address', modified_address);

        

        //reset modify button to save model
        $("#modify-modal").attr('data-address', '');
        $("#modify-modal").attr('id', 'save-modal');
        
    });

    //click modal list address item to show it's detail modal form
    //!!!!Important:
    //Use $(document).on('click','selector',function(){}) method to replace click(function(){}) to make 
    //click event still be able on the added element
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

        $("#save-modal").attr('data-address', result['address']);
        $("#save-modal").attr('id', 'modify-modal');
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


    //html5 localStorage
    // Check browser support
    if (typeof(window.Storage) != "undefined"){
        // Code for localStorage/sessionStorage.
    }else{
        // Sorry! No Web Storage support..
    }
    localStorage = window.localStorage





    //validate the form
    $("#items").attr("onsubmit", "return validate_form(this)");
});
var validate_form = function(thisform){
		alert("bbbb");
		return true;
};
