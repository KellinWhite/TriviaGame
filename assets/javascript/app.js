//When start button is clicked, questions are revealed and the timer starts counting down, start button goes away-->
//After submit button is clicked, score is tallied under correct, incorrect, and unanswered categories -->

//Create a timer counting back from 30 seconds -->
var counter = 30;
$('span.timer').text(counter);

$("button.start").on('click', function () {
    $('#beginning').toggle();
    $('#questions').toggle();
    $('#timeLeft').toggle();

    var timer = setInterval(goDown, 1 * 1000);

    function goDown() {
        counter--;
        $('span.timer').text(counter);

        if (counter == 0) {
            $("input[type='submit']").attr('disabled', true);
            clearInterval(timer);
        };
    }
});
//Simultaneously when submit button is clicked, quiz questions will disappear and new boxes show the score categories-->        
//setting variables for each input/answer selected, then tallying up those results into the score categories
$("input[type='submit']").on('click', function () {
    var ans1 = $("input[name='egg']:checked").val();
    var ans2 = $("input[name='nose']:checked").val();
    var ans3 = $("input[name='vision']:checked").val();
    var ans4 = $("input[name='heart']:checked").val();
    var correctA = 0;
    var incorrectA = 0;
    var unansweredA = 0;

    $('#finished').toggle();
    $('#questions').toggle();
    $('#timeLeft').toggle();

    if (ans1 == 'platypus') {
        $('#ans1').text('correct');
        correctA++;
        $('.correct').text(correctA);
    } else if (ans1 == undefined) {
        $('#ans1').text('unanswered');
        unansweredA++;
        $('.unanswered').text(unansweredA);
    } else {
        $('#ans1').text('incorrect');
        incorrectA++;
        $('.incorrect').text(incorrectA);
    }

    if (ans2 == 'slug') {
        $('#ans2').text('correct');
        correctA++;
        $('.correct').text(correctA);
    } else if (ans2 == undefined) {
        $('#ans2').text('unanswered');
        unansweredA++;
        $('.unanswered').text(unansweredA);
    } else {
        $('#ans2').text('incorrect');
        incorrectA++;
        $('.incorrect').text(incorrectA);
    }
    if (ans3 == 'gorilla') {
        $('#ans3').text('correct');
        correctA++;
        $('.correct').text(correctA);
    } else if (ans3 == undefined) {
        $('#ans3').text('unanswered');
        unansweredA++;
        $('.unanswered').text(unansweredA);
    } else {
        $('#ans3').text('incorrect');
        incorrectA++;
        $('.incorrect').text(incorrectA);
    }

    if (ans4 == 'shrimp') {
        $('#ans4').text('correct');
        correctA++;
        $('.correct').text(correctA);
    } else if (ans4 == undefined) {
        $('#ans4').text('unanswered');
        unansweredA++;
        $('.unanswered').text(unansweredA);
    } else {
        $('#ans4').text('incorrect');
        incorrectA++;
        $('.incorrect').text(incorrectA);
    }

    event.preventDefault(); //prevent the page from refreshing
})