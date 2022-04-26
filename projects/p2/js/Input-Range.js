console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

$(document).ready(function(){

    $('input[type=range]').on('input', function(){
        let inputType = $(this).attr('id');
        let inputValue = $(this).val();

        if (inputType == 'height'){
            $('#content').css('--text-height', inputValue);
        }else{
            $('#content').css('--text-wiggle', inputValue);
        }
    });

});