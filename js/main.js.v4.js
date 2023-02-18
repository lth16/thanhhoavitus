'use strict';
(function($) {
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
        AOS.init();
    });

    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    $(".canvas-open").on('click', function() {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function() {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    $(".hero-slider, .slider-one ").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoPlay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        mouseDrag: true
    });

    $(".news-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        navigation: true,
        navigationText: ['<img src="/img/next-hover.png">', '<img src="/img/prev-hover.png">'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoPlay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2

            },
            960: {
                items: 3

            }
        }
    });

    var tree = $(".collapse.tree");
    var treeheight = 600;
    $(window).on('scroll', function() {
        var stickyMenu = $('.header-section');
        var pos = stickyMenu.position();
        if (stickyMenu.length) {
            var windowpos = stickyMenu.top;
            $(window).on('scroll', function() {
                var windowpos = $(window).scrollTop();
                if (windowpos > pos.top + 100) {
                    stickyMenu.addClass('is-sticky');
                    $(".canvas-open").css("position", "fixed");
                } else {
                    stickyMenu.removeClass('is-sticky');
                    $(".canvas-open").css("position", "absolute");
                }

                if (windowpos > pos.top + 180) {
                    tree.addClass("tree-sticky");
                    var fotop = $("#footer").position().top;
                    if (treeheight > fotop - windowpos - 160) {
                        $(".collapse.tree .card-body").css("height", (fotop - windowpos - 160) + "px");
                    } else {
                        $(".collapse.tree .card-body").css("height", treeheight + "px");
                    }
                } else {
                    tree.removeClass("tree-sticky");
                }
            });
        }
    });
    $.scrollUp({
        scrollText: '<i class="arrow_carrot-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });

    $(".float-button1").click(function() {
        var copyText = document.getElementById("urlLinkShare");
        copyText.style.display = "block";
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        copyText.style.display = "none";
        alert("Đã copy đường link chia sẻ Vitus! \n ");
    });

    $("select").niceSelect();

    $("#fn-form-subcrible").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        if (!$(this).find("input[name='phone']").val()) {
            alert("Bạn cần nhập số điện thoại!");
            return;
        }
        const form = $(this);
        const url = form.attr("action") + "?phone=" + $(this).find("input[name='phone']").val();

        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            success: function(data) {
                console.log(data);
                if (data.ok) {
                    alert("Cảm ơn bạn đã đăng ký. Chúng tôi sẽ sớm liên hệ với bạn!");
                } else {
                    alert("Bạn đã đăng ký rồi. Chúng tôi sẽ sớm liên hệ với bạn!");
                }
            }
        });


    });
})(jQuery);