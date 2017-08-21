$(document).ready( function() {
    $(".field-money").maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});     

    $(".button-transaction").on("click", function(){
        var modal  = $(this).attr("data-transaction"); 

        $(".button-transaction").removeClass("active");
        $(this).addClass("active");
        
        $(".bank-transaction").hide();
        $("."+ modal).fadeIn();

        return false;
    });

    $(".button-close").on("click", function(){            
        $(".bank-transaction").fadeOut();

        return false;
    });

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