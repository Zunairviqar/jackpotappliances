$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
// Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});
// var cat1=document.getElementById('cat1');
// var cat2=document.getElementById('cat2');
// var cat3=document.getElementById('cat3');
// var sub1=document.getElementById('sub1');
// var sub2=document.getElementById('sub2');
// var sub3=document.getElementById('sub3');
// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.dropdown-menu a').click(function(e){
    e.preventDefault();
      if($(this).next('.submenu').length){
        $(this).next('.submenu').toggle();
      }
      $('.dropdown').on('hide.bs.dropdown', function () {
     $(this).find('.submenu').hide();
  })
  });
  // cat1.addEventListener("click",function(){
  //   console.log("clicked");
  //   if (sub1.style.display!=="block"){
  //     sub1.style.display="block";
  //   }else{sub1.style.display="none";}
  // });
  // cat2.addEventListener("click",function(){
  //   if (sub2.style.display!=="block"){
  //     sub2.style.display="block";
  //   }else{sub2.style.display="none";}
  // });
  // cat3.addEventListener("click",function(){
  //   if (sub3.style.display!=="block"){
  //     sub3.style.display="block";
  //   }else{sub3.style.display="none";}
  // });
}
