
block_pos = querySelector(".sidebar").offset().top;
// определяем первоначальное положение блока
wrap_pos = $('.add-ingredients').offset().top;
// позиция контейнера
block_height = $('.sidebar').outerHeight();
// высота блока
wrap_height = $('.wrap').outerHeight();
// высота контейнера
block_width = $('.sidebar').outerWidth();
pos_absolute = wrap_pos + wrap_height - block_height;
// ширина блока

window.scroll(function (){ 
    if (window.scrollTop() > pos_absolute) {
        querySelector(".sidebar").css({
            'position': 'absolute',
            'top': wrap_height - block_height,
            'width': block_width
        });

    querySelector(".sidebar").css({
            'position': 'absolute',
            'top': wrap_height - block_height,
            'width': block_width
        });
    }
     else if (window.scrollTop() > block_pos) {
// Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
        querySelector(".sidebar").css({
            'position': 'fixed',
            'top': '0px',
            'width': block_width
        });
    } else {
// Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
    querySelector(".sidebar").css({
            'position': 'static'
        });
    }
});