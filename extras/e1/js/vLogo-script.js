console.log("https://www.youtube.com/watch?v=NuAKnbIr6TE");

$(document).ready(function(){

    $('input[type=range]').on('input', function(){
        let inputType = $(this).attr('id');
        let inputValue = $(this).val();

        if (inputType == 'cross-offset'){
            $('#show-case').css('--cross-offset', inputValue);
        }else{}

        if (inputType == 'curvature'){
            $('#show-case').css('--curvature', inputValue);
        }else{}

        if (inputType == 'rspine'){
            $('#show-case').css('--rspine', inputValue);
        }else{}

        if (inputType == 'lspine'){
            $('#show-case').css('--lspine', inputValue);
        }else{}

        if (inputType == 'thickness'){
            $('#show-case').css('--thickness', inputValue);
        }else{}
    });

});