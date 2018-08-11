// Toggle showgrid-16
$(document).ready(function(){

    // Initiate page: check to see if showgrid-16 is set by default
    if ($('div.container-16').hasClass('showgrid-16')) {
        $('input#showgrid').attr('value', 'Hide grid');
        $('.colborder').toggleClass('darkcolborder');
        $('hr').toggleClass('darkhr');
    } else {
        $('input#showgrid').attr('value', 'Show grid')
    }

    // When someone clicks the button toggle grid on and off
    $('input#showgrid').click(
        function($e) {
            // Toggle classes so that lines can be seen with grid showing
            $('div.container-16').toggleClass('showgrid-16');
            $('.colborder').toggleClass('darkcolborder');
            $('hr').toggleClass('darkhr');

            // Toggle button text
            $buttonText = $('input#showgrid').attr('value');
            if ($buttonText == 'Show grid') {
                $('input#showgrid').attr('value', 'Hide grid')
            } else {
                $('input#showgrid').attr('value', 'Show grid')
            }
        }
    );
 });