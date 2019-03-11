$(document).on('click', '.card-header span.clickable', function(e) {
  var $this = $(this);
  if (!$this.hasClass('card-collapsed')) {
    $this.parents('.card').find('.card-body').slideUp();
    $this.addClass('card-collapsed');
    $this.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  } else {
    $this.parents('.card').find('.card-body').slideDown();
    $this.removeClass('card-collapsed');
    $this.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  }
})

$(function() { //사진 정렬
  var selectedClass = "";
  $(".filter").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

function controlplay() { //배경음악 컨트롤
  var icon = document.getElementById("ficon");

  if (audio.paused){
   audio.play();
   icon.className = "fas fa-1x fa-pause";
  }
  else{
    icon.className = "fas fa-1x fa-play";
    audio.pause();
  }

}
