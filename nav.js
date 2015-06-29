$(document).ready(function(){
  /*change remove-button color when mouse moving on*/
  $(".remove-btn").mouseenter(function(){
  	$(this).find(".glyphicon").css("color","red");
  });
  $(".remove-btn").mouseleave(function(){
  	$(".glyphicon").css("color","#337ab7");
  });
  /*remove item when click remove-button*/
  $(".remove-btn").click(function(){
  	$(this).parent().remove();
  });
  /*add item when click add-button*/
  $(".add-btn").click(function(){
    
  	var name=$(this).data("whatever");
    if (findShoppingList().indexOf(name)>-1)
    {
      return 0;
    }
    var tem=$(".template").clone(true);
    tem.removeAttr('class');
    
    tem.attr("data-name",name);
    tem.find(".desc").text(name);
    $("#shopping-list").append(tem);  
  });
  /*return items in shoppong list*/
  var findShoppingList=function(){
    var result=new Array();
    $("#shopping-list").children("li").each(function(){
      var name=$(this).attr("data-name");
      
      result.push(name);
    });
    return result;
  };
  /*change dropdown-menu toggle method to mouse on*/
  /********
  $(".dropdown-toggle").mouseenter(function(){
    $(this).dropdown("toggle");
  });
  $(".dropdown").mouseleave(function(){
    $(this).dropdown("toggle");
  });
  **********/
  /*click submit-button to submit the shopping list
  and redirect to the page with detail form input */
  $("#submit-btn").click(function(){
  	var items=findShoppingList();
  	var param=""
  	for(var i=0; i<items.length; i++)
  	{
  		param = param + "+" + items[i];
  	}
  	alert(param);
    window.location="detail-form.html?param=" + param;
  });
});
