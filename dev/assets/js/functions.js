(function() {

    $(".plan").on("show.bs.collapse hide.bs.collapse", function(e) {
        if (e.type=='show'){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });  
}).call(this);