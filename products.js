$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 variableWidth: true,
 arrows: false,
 initialSlide: 1,
 mobileFirst: true,
 // fade: true,
 asNavFor: '.slider-nav',


});

$('.slider-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: true,
 initialSlide: 1,
 mobileFirst: true,
 centerMode: true,
 focusOnSelect: true,

});

var detailButtons=[];
document.querySelectorAll('.detailButton').forEach((btn,i)=> {
  btn.addEventListener('click', function() {
    var idString=btn.id;
    idString=idString.substring(0,idString.length-7);
    var selectString="#"+idString+ " .slick-dots button";
    // console.log(selectString);
    var myDot=document.querySelectorAll(selectString)[0];
    myDot.click();
  });
});


// detailButtons.forEach(btn => {
//   // item.addEventListener('click', function() {
//   //   var idString=btn.id;
//   //   idString=idString.substring(0,idString.length-7);
//   //   var selectString=idString+ " slick-dots button";
//   //   var myDot=document.querySelectorAll(selectString)[0];
//   //   myDot.click();
//   // });
//   console.log(btn);
// });
// let Click1 = () => {
// var JP9000_AC= document.querySelectorAll('#JP-9000AC .slick-dots button')[0];
//   JP9000_AC.click();
// }
//
// let viewdetails = document.getElementById('viewdetails1');
// viewdetails.addEventListener('click', Click1)
