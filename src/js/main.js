$(document).ready( function() {
  $(".field-money").maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});            
});

$(document).on("change", ".mdl-checkbox__input", function() {
  var CheckedTableItens      = $(".mdl-checkbox__input").closest('tbody').find('input:checked');
  var countCheckedTableItens = CheckedTableItens.length;
  
  if(countCheckedTableItens){
      $(".table-control").fadeIn();        
  }

  if(!countCheckedTableItens) {
      $(".table-control").fadeOut();
  }

  $('.select-text').html(countCheckedTableItens);

  $(".button-delete").on("click", function(){
      CheckedTableItens.closest('tr').remove();
  });

});