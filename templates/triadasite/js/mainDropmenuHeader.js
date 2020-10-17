jQuery(document).ready(function ($) {
    
    $(".nav-link.pos-rel.link-dropdown").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $('.nav_blockItems').toggleClass("active");

    });
    
     
    



});