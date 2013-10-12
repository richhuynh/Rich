var day = 1;
var fame = 0;
var gold = 0;


var hunterID = 0;
var hunterList = new Array();
var recruitAmount = Math.floor(3 + (fame * 0.1));
var recruitList = new Array();

var operationID = 0;
var operationList = new Array();

$(document).ready(function () {
    updateRecruitList();
});

var hunter = function (id, name, gender, role, str, fit, rct) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.role = role;
    this.str = str;
    this.fit = fit;
    this.rct = rct;
    //this.status = status; 
    //this.down = down;
};
var operation = function (id, target, power, timeLeft, gold, fame, exp, hero) {
    this.id = id;
    this.target = target;
    this.power = power;
    this.timeLeft = timeLeft;
    this.gold = gold;
    this.fame = fame;
    this.exp = exp;
    this.hero = hero;
};



function endDay() {
    /*End Day
    Compute Dispatch
        Success or Fail
        Determine rewards*/

    updateRecruitList();

       /* Return to Town
        Call Town
            Display updates
*/
}

function updateGameInfo() {
    $('#info-gold').text('Gold = ' + gold);
    $('#info-fame').text('Fame = ' + fame);
}




function createOperation() {
    //This requires randomization
    var id = operationID;
    var target = "Lich";
    var power = 10; //power later defined by target
    var timeLeft = 5;
    var gold = 20;
    var fame = 20;
    var exp = 50;
    var hero = new Array();
    var newOperation = new operation(id, target, power, timeLeft, gold, fame, exp, hero);
    operationID++;
    return newOperation;
}
function updateOperationList() {
    $("#room-operations").empty();
    operationList = [];
    for (var i = 0; i < 1; i++) {
        operationList[i] = createOperation();
    }
}














    function createRecruit() {
        //This requires randomization
        var id = hunterID;
        var name = "test";
        var gender = "male";
        var role = "templar";
        var str = "14";
        var fit = "14";
        var rct = "8";
        var recruit = new hunter(id, name, gender, role, str, fit, rct);
        hunterID++;
        return recruit;
    }
    function updateRecruitList() {
        $("#room-recruits").empty();
        recruitList = [];
        for (var i = 0; i < recruitAmount; i++) {
            recruitList[i] = createRecruit();
        }
    }
    function recruitHunter(choice) {
        var newHunter = recruitList[choice];
        hunterList.push(newHunter);
        recruitList.splice(choice, 1);
        showRecruitList();
    }




//Switch Screens and Rooms********************************
function enterScreen(scrNew, scrCurrent) {
    var gameinfoScreen = scrNew.charAt(0).toUpperCase() + scrNew.slice(1);
    var scrCurrent = "#screen-" + scrCurrent;
    var scrNew = "#screen-" + scrNew;
    $(scrCurrent).hide();
    $(scrNew).show();
    $('#info-bar > h1').text(gameinfoScreen);

}
        function enterRoom(room) {
            var room = "#room-" + room;
            $(".room").hide();
                //Hunters' Quarters
            if (room == "#room-operations") showOperations("#operations", "active"), showHunters("#op-hunters", "all");
            else if (room == "#room-hunters") showHunters("#room-hunters", "all");
            else if (room == "#room-recruits") showRecruitList();
                //Market
            else if (room == "#room-buy");
            else if (room == "#room-sell");
                //Academy
            else if (room == "#room-hunters");
            $(room).show();

        }

        //Hunters' Quarters - Show Screens ******************************
        function showOperations(container, request) {
            //Clear Screen
            $(container).empty();
            //Populate Screen
            var type = "Hunt";
            var target = "Lich";
            var rating = "2";
            var reward = "200G";
            $(container).append(
            '<div class="info-operation">' +
                '<h1>' + type + ' ' + target + '</h1>' +
                '<ul>' +
                    '<li>Rating: ' + rating + '</li>' +
                    '<li>Reward: ' + reward + '</li>' +
                '</ul>' +
            '</div>'
            );
        }
        function showHunters(container, request) {

            //Clear Screen
            $(container).empty();

            //Populate Screen
            for (var i = 0; i < hunterList.length; i++) {
                $(container).append(
                '<div class="info-hunter cf">' +
                    '<h1>' + hunterList[i].name + '</h1>' +
                    '<div class="portrait"></div>' +
                    '<ul class="stats">' +
                        '<li>' + hunterList[i].role + '</li>' +
                        '<li>Level 15</li>' +
                        '<li>Exp: 300</li>' +
                    '</ul>' +
                    '<h2> On Mission (4 Days Left) </h2>' +
                '</div>'
                );
            }
        }
        function showRecruitList() {
            $("#room-recruits").empty();     
            for (var i = 0; i < recruitList.length; i++) {
                $("#room-recruits").append(
                    '<div class="info-recruit cf">' +
                        '<h1>' + recruitList[i].name + '</h1>' +
                        '<h2> Gold:10 Fame:10 </h2>' +
                        '<div class="portrait"></div>' +
                        '<ul class="stats">' +
                            '<li>' + recruitList[i].role + '</li>' +
                            '<li>Level 15</li>' +
                            '<li>Exp: 300</li>' +
                        '</ul>' +
                        '<ul class="stats">' +
                            '<li>STR: ' + recruitList[i].str + '</li>' +
                            '<li>FIT: ' + recruitList[i].fit + '</li>' +
                            '<li>SEN: ' + recruitList[i].rct + '</li>' +
                        '</ul>' +
                        '<a href="Javascript:recruitHunter(' + i + ');">' + "Recruit" + '</a>' +
                    '</div>'
                );
            }
        }







        //<div class="info-hunter cf">
        //    <h1>Goober</h1>
        //    <div class="portrait"></div>
        //    <ul class="stats"> 
        //        <li>Longest Class</li>
        //        <li>Level 15</li>
        //        <li>Exp: 300</li>
        //    </ul>
        //    <h2> On Mission (4 Days Left) </h2>
        //</div>




        //<div class="info-recruit cf">
        //    <h1>Goober</h1>
        //    <h2> Gold:10 Fame:10 </h2>
        //    <div class="portrait"></div>
        //    <ul class="stats"> 
        //        <li>Longest Class</li>
        //        <li>Level 15</li>
        //        <li>Exp: 300</li>
        //    </ul>
        //    <ul class="stats"> 
        //        <li>Longest Class</li>
        //        <li>Level 15</li>
        //        <li>Exp: 300</li>
        //    </ul>
        //</div>