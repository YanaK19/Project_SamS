let wrap = document.querySelector('.wrap');
let fix = document.querySelector('.right-fix')
let block_pos = fix.offsetTop; 
let wrap_pos = wrap.offsetTop;
let block_height = fix.offsetHeight;
let wrap_height = wrap.offsetHeight;
let blockwidth = fix.offsetWidth;

let pos_absolute = wrap_pos + wrap_height - block_height;

window.addEventListener('scroll',function () {
    if (window.pageYOffset > pos_absolute) {
        fix.css({
            'position': 'absolute',
            'top': wrap_height - block_height,
            'width': block_width
        });
    }
    else if (window.pageYOffset > block_pos) {
        fix.css({
            'position': 'fixed',
            'top': '0px',
            'width': block_width
        });
    } else {
        fix.css({
            'position': 'static'
        });
    }
})