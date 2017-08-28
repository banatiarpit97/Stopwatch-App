/**
 * Created by arpit on 28/8/17.
 */

var mainSeconds = 0;
var mainMilliseconds = 0;
var mainMinutes = 0;
var lapSeconds = 0;
var lapMilliseconds = 0;
var lapMinutes = 0;
var lapNumber = 1;
var lapTime;
var mainTime;
var mode = false;

$(".start").click(function(){
    if(!mode) {
        mode = true;
        $(".start").html("Stop");
        timer();
    }
    else{
        mode = false;
        $(".start").html("Start");
        clearInterval(lapTime);
        clearInterval(mainTime);
    }
});
$(".stop").click(function(){
    mode = false;
    $(".stop").html("Start");
    clearInterval(lapTime);
    clearInterval(mainTime);
    $(".start").removeClass("Stop");
});

$(".reset").click(function(){
    mode = false;
    clearInterval(lapTime);
    clearInterval(mainTime);
    mainSeconds = 00;
    $(".mainSeconds").html("00");
    mainMilliseconds = 00;
    $(".mainMilliseconds").html("00");
    mainMinutes = 00;
    $(".mainMintues").html("00");
    lapSeconds = 00;
    $(".lapSeconds").html("00");
    lapMilliseconds = 00;
    $(".lapMilliseconds").html("00");
    lapMinutes = 00;
    $(".lapMintues").html("00");
    lapNumber = 00;
    $(".start").html("Start");
    $(".addlaps").html("");

});


$(".lap").click(function(){
    var particluarLapMilliseconds = $(".lapMilliseconds").html();
    var particluarLapSeconds = $(".lapSeconds").html();
    var particluarLapMinutes = $(".lapMintues").html();
    appendMaterial = '<span class="laps_number">lap ' + lapNumber+'</span><span class="laps_time">'+(particluarLapMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2})+':'+(particluarLapSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2})+':'+(particluarLapMilliseconds).toLocaleString('en-US', {minimumIntegerDigits: 3})+'</span><hr>'
    $(".addlaps").append(appendMaterial);
    lapNumber++;
    lapSeconds = 00;
    $(".lapSeconds").html("00");
    lapMilliseconds = 00;
    $(".lapMilliseconds").html("00");
    lapMinutes = 00;
    $(".lapMintues").html("00");

});

timer = function(){
    lapTime = setInterval(function(){
       lapMilliseconds +=1;
       $(".lapMilliseconds").html((lapMilliseconds).toLocaleString('en-US', {minimumIntegerDigits: 3}));
       if(lapMilliseconds == 100){
           lapSeconds +=1;
           lapMilliseconds = 00;
           $(".lapSeconds").html((lapSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2}));
       }
       if(lapSeconds == 60){
           lapMinutes +=1;
           lapSeconds = 00;
           $(".lapMintues").html((lapMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2}));
       }
    },10);
    mainTime = setInterval(function(){
        mainMilliseconds +=1;
        $(".mainMilliseconds").html((mainMilliseconds).toLocaleString('en-US', {minimumIntegerDigits: 3}));

        if(mainMilliseconds == 100){
            mainSeconds +=1;
            mainMilliseconds = 00;
            $(".mainSeconds").html((mainSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2}));

        }
        if(mainSeconds == 60){
            mainMinutes +=1;
            mainSeconds = 00;
            $(".mainMintues").html((mainMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2}));
        }
    },10);
}