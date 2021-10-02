$(function () {

    let menuItems = $("#main-menu").find("a").filter(function () {
        return $(this).attr("href").indexOf("#") == 0;
    });
    let scrollItems = menuItems.map(function () {
        return $($(this).attr("href"));
    });
    let topMenuHeight = 80;

    menuItems.on("click", function (e) {
        e.preventDefault();

        let id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(id).offset().top - topMenuHeight
        }, 1000);
    });

    $(window).scroll(function(){
        let fromTop = $(this).scrollTop() + topMenuHeight + 1;

        let curr = scrollItems.filter(function () {
            let offset = $(this).offset();
            if(!offset) return false;
            return offset.top < fromTop;
        }).last().get(0);
        
        if(!curr) return;

        let id = curr.attr("id");

        menuItems
            .parent().removeClass('active')
            .end().filter(`[href='#${id}']`).parent().addClass('active');
    });

});