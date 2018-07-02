    //HEADER SLIDER
    $("#header-slider").owlCarousel({
        loop:true,
        nav:true,
        navText: ['<img src="img/icons/prev.png" alt="Prev">', '<img src="img/icons/next.png" alt="Next">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //SECTION POSTS SLIDER
    $("#post-slider").owlCarousel({
        loop:true,
        margin:30,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });




//Stop video when closing the modal window
 $("#myModal").on('hidden.bs.modal', function (e) {
        $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
    });
