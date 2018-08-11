// Toggle showgrid-24
$(document).ready(function(){

    // Initiate page: check to see if showgrid-24 is set by default
    if ($('div.container-24').hasClass('showgrid-24')) {
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
            $('div.container-24').toggleClass('showgrid-24');
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