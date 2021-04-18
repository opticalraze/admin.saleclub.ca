$(document).ready(function() {

let sidebar = false;
let scrollPosition;

/* open sidebar */
  $("#sidebarCollapse").click(function() {
    //$('#sidebar').toggleClass('active');
    if (sidebar == true) {
      sidebar = false;
      $("#sidebarCollapse").addClass("collapsed");
      $('#sidebar').removeClass('active');
      $('.content').removeClass('darken');

      // enable scrolling

      $("body").css({ 'overflow-y':'scroll', 'position':'', 'top':'', 'width':''});
      $(window).scrollTop(scrollPosition);

    } else {
      sidebar = true;
      $("#sidebarCollapse").removeClass("collapsed");
      $('#sidebar').addClass('active');
      $('.content').addClass('darken');


      // disable scrolling
      scrollPosition = $(window).scrollTop();
      $("body").css({ 'overflow-y':'hidden', 'position':'fixed', 'top':`-${scrollPosition}px`, 'width':'100%'});

    }
    $("#content.darken").click(function(event) {

      if (sidebar == true) {
        sidebar = false;
        $("#sidebarCollapse").addClass("collapsed");
        $('#sidebar').removeClass('active');
        $('.content').removeClass('darken');

        // enable scrolling
        $("body").css({ 'overflow-y':'scroll', 'position':'', 'top':'', 'width':''});
        $(window).scrollTop(scrollPosition);

        // prevent click through
        return false;
      }
    });
  });

});
