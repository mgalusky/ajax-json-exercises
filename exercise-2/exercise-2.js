$(document).ready(function(){

  var groceryTemplate = $('template#grocery').html();

  $.get('http://portal.batchacademy.com/api/wdfne/test-data/items', funtion(responseData){
    // declare template variable
    var newItem = $(groceryTemplate);

    // 
    $('.title span', newItem).text(products[i].name);
    $('.price span', newItem).text(products[i].name);
  });
});
