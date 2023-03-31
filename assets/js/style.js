$(document).ready(function () {
    if ($(window).width() > 991){
        $('.ms-header-main .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }
});

$(document).ready(function () {
    $('.img-stat-dot').click(function(){
        // alert($(this).attr('id'));
        var mcid='.' + $(this).attr('id');
        $('.img-stat-dot').removeClass('mapactive');
        $('.map-list-name').removeClass('mapactive');
        $(this).addClass('mapactive');
        $('.map-list-grid').find(mcid).addClass('mapactive');
    });
    $('.map-list-name').click(function(){
        // alert($(this).attr('class').split(' ')[1]);
        var mcid='#' + $(this).attr('class').split(' ')[1];
        $('.img-stat-dot').removeClass('mapactive');
        $('.map-list-name').removeClass('mapactive');
        $(this).addClass('mapactive');
        $('.map-org-box').find(mcid).addClass('mapactive');
    });
});