

//

//
// var currentWitdth =100;
// var currentheidth =100;
//
// $(".thebuttons").on("click", function(){
//   currentWitdth -= 10;
//   currentheidth -= 10;
//
//   $(".square").css ("width", currentWitdth +"px");
//   $(".square").css ("height", currentheidth +"px");
// });
//
//
// $(".thebuttonb").on("click", function(){
//   currentWitdth += 10;
//   currentheidth += 10;
//
//
//  $(".square").css("width", currentWitdth + "px");
//  $(".square").css("height", currentheidth + "px");
//
// $(".thebuttonb").on("click",function(){
//   if("this"  === true);
//
//
//
//
//
//
//
//
//
// });
// });

// var height = $(".square").css("height");
// height = height.slice(0,-2);

// var width = $(".square").css("width");
// width= width.slice(0,-2);

// var numberHieiht = $("height").pareseint()
// $(".the-buttonb").on("click", function(){
// $(".square").css("height", "200px").css("width", "200px");
// });

 // $(".the-buttons").on("click", function(){
// $(".square").css("height", "50px" ).css("width", "50px");
// });

// $('.the-buttonb').click(function(){
    // $('.square').css({height: '*=2'}, 200);
  // });




// });

// evry time  i click the- buttonb the value of squarehave to increment by 2

  // var getBig = (".the-buttonb *=2 ")



// var result =();
// var firstNunber;
// var secondNunber;


// var firstNunber = document.getElementById("value");
//
// var secondNunber = document. getElementById("secondNunber");
// console.log (firstNunber);

$(document).ready(function() {

// var number = $(".firstNunber").val(" ");
// var number2 = $(".secondNunber").val(" ");

// $(".sum").on( "click", function(){
 // $(".result").addClass("number","number2")

// )};


// });

$(document).ready(function() {

$(".sum").on('click', function(){
  var one = ($(".first-num").val());
  console.log(one);
  var two = ($(".second-num").val());
   console.log(two);
  var tot = parseFloat(one) + parseFloat(two);
   console.log(tot);
  $(".result").text(tot);
 });



$(".sub").on('click', function(){
  var one = ($(".first-num").val());
  // console.log(one);
  var two = ($(".second-num").val());
  // console.log(two);
  var tot = parseFloat(one) - parseFloat(two);
  // console.log(tot);
  $(".result").text(tot);
});



$(".mult").on('click', function(){
  var one = ($(".first-num").val());
  console.log(one);
  var two = ($(".second-num").val());
  console.log(two);
  var tot = parseFloat(one) * parseFloat(two);
  console.log(tot);
  $(".result").text(tot);
});



$(".divi").on('click', function(){
  var one = ($(".first-num").val());
  console.log(one);
  var two = ($(".second-num").val());
  console.log(two);
  var tot = parseFloat(one) / parseFloat(two);
  console.log(tot);
  $(".result").text(tot);
});

});






// .sum
// .sub
// .mult
// .divd
// .result
});
