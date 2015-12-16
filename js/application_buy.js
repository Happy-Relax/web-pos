



$(document).ready(function(){

$('button').on('click',function(){



 var string=$(this).parent('div').parent('div').find('.item').data('barcode');
 var inputs;

  if(JSON.parse(localStorage.getItem('inputs'))==null){
    inputs=new Array();
  }
  else{
    inputs=JSON.parse(localStorage.getItem('inputs'));
  }

  if(string!=null)
    inputs.push(string);


 localStorage.setItem('inputs',JSON.stringify(inputs));
// $(this).find('p').remove();
// $(this).append($('<p>'+string+'</p>'))

});




});