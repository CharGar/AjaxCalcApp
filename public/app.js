var digits = [];
var operators = [];


$(function(){


//Event Listners listed below

$('#dot').on('click', decimal);
// $('.dig').on('click', digitPress);
$('#delete').on('click', deleted);
$('#equals').on('click', equal);
// $('.operator').on('click', operations)


//click functions listed below
$('.operator').on('click', function(){
  console.log('operations');
  var opp= $(this).text();
  operators.push(opp);
  console.log(operators);
  $('p').append($(this).val());
});

$('.dig').on('click', function(){
  console.log('numbers');
  var digit= $(this).text() + digits.x;
  digits=digit;
  $('p').append($(this).val());
});


function firstButton(){
$('p').hide()
$('#result').append($(this).val());
}




function add(x,y){
  deleted();
  $('#result').append('+')

}

function subtract(){//subtraction function
  deleted();
  $('#result').append('-')
}

function times(){
  deleted();
  $('#result').append('x')
}

function division(){
  deleted();
  $('#result').append('/')
}

function decimal(){
  deleted();
  $('#result').append('.')
}

function deleted(){ //function to empty and or delete the results box/display
  $('p').empty();
  $('#result').text()
}


function equal(){
  console.log($('p').text());
  var equation = ($('p').text())

 $('p').append('')
}

});
