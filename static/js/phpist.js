jQuery(document).ready(function(){
    jQuery('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
});