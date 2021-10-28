 $(document).ready(function(){
    var submitIcon = $('.searchbar-mobile-icon');
    var inputBox = $('.searchbar-mobile-input');
    var searchbar = $('.searchbar-mobile');
    var isOpen = false;
    inputBox.hide();


    submitIcon.click(function(){
        if(isOpen == false){
            inputBox.show();
            searchbar.addClass('searchbar-mobile-open');
            inputBox.focus();
            isOpen = true;
        } else {
            inputBox.hide();
            searchbar.removeClass('searchbar-mobile-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchbar.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbar-mobile-icon').css('display','block');
            submitIcon.click();
        }
    });
});

function buttonUp(){
    var inputVal = $('.searchbar-mobile-input').val();
    inputVal = $.trim(inputVal).length;

    if( inputVal !== 0){
        $('.searchbar-mobile-icon').css('display','none');
    } else {
        $('.searchbar-mobile-input').val('');
        $('.searchbar-mobile-icon').css('display','block');
    }
 }