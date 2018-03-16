$(document).ready(function(){

var building = $('.floorplan-config-selecton').data('building-ac');

var one = [
    {display: "Fall", value: "fall" },
    {display: "Spring", value: "spring" }];

var two = [
    {display: "Fall", value: "fall" },
    {display: "Spring", value: "spring" }];

var osone = [
    {display: "Fall", value: "fallos" },
    {display: "Spring", value: "springos" }];

var ostwo = [
    {display: "Fall", value: "fallos" },
    {display: "Spring", value: "springos" }];

var cione = [
    {display: "Fall", value: "fallci" },
    {display: "Spring", value: "spring" }];

var citwo = [
    {display: "Fall", value: "fallci" },
    {display: "Spring", value: "spring" }];

var faone = [
    {display: "Fall", value: "fallfa" },
    {display: "Spring", value: "springfa" }];

$("#floor").change(function() {
    var selectS = $("#floor option:selected").val();
    switch(selectS){
        case '1':
            sem(one);
            break;
        case '2':
            sem(two);
            break;
        case '-1':
            sem(osone);
            break;
        case '-2':
            sem(ostwo);
            break;
        case '1.0':
            sem(cione);
            break;
        case '2.0':
            sem(citwo);
            break;
        case '1.00':
            sem(faone);
            break;
        default:  //maybe need to change this... maybe this is what lammers talk about?
          $("#semester").empty();
          $("#semester").append("<option>--Select Semester--</option>");
          break;
           }

});

function sem(arr)
{
    $("#semester").empty(); //reset child options
    $("#semester").append("<option>--Select Semester--</option>");
    $("#year").empty();
    $("#year").append("<option>--Select Year--</option>");
    $(arr).each(function (i) { //populate child options
      $("#semester").append("<option value=\""+arr[i].value+"\">" +arr[i].display+"</option>")
    });
}

var fall = [
    {display: "2006", value: "200610" },
    {display: "2007", value: "200710" },
    {display: "2008", value: "200810" },
    {display: "2009", value: "200910" },
    {display: "2010", value: "201010" },
    {display: "2011", value: "201110" },
    {display: "2012", value: "201210" },
    {display: "2013", value: "201310" },
    {display: "2014", value: "201410" },
    {display: "2015", value: "201510" },
    {display: "2016", value: "201610" }];

 var spring = [
    {display: "2007", value: "200620" },
    {display: "2008", value: "200720" },
    {display: "2009", value: "200820" },
    {display: "2010", value: "200920" },
    {display: "2011", value: "201020" },
    {display: "2012", value: "201120" },
    {display: "2013", value: "201220" },
    {display: "2014", value: "201320" },
    {display: "2015", value: "201420" },
    {display: "2016", value: "201520" },
    {display: "2017", value: "201620" }];

 var fallos = [
    {display: "2015", value: "201510" },
    {display: "2016", value: "201610" }];

  var springos = [
    {display: "2016", value: "201520" },
    {display: "2017", value: "201620" }];

  var fallci = [
    {display: "2007", value: "200710" },
    {display: "2008", value: "200810" },
    {display: "2009", value: "200910" },
    {display: "2010", value: "201010" },
    {display: "2011", value: "201110" },
    {display: "2012", value: "201210" },
    {display: "2013", value: "201310" },
    {display: "2014", value: "201410" },
    {display: "2015", value: "201510" },
    {display: "2016", value: "201610" }];

  var fallfa = [
    {display: "2010", value: "201010" },
    {display: "2011", value: "201110" },
    {display: "2012", value: "201210" },
    {display: "2013", value: "201310" },
    {display: "2014", value: "201410" },
    {display: "2015", value: "201510" },
    {display: "2016", value: "201610" }];

  var springfa = [
    {display: "2011", value: "201020" },
    {display: "2012", value: "201120" },
    {display: "2013", value: "201220" },
    {display: "2014", value: "201320" },
    {display: "2015", value: "201420" },
    {display: "2016", value: "201520" },
    {display: "2017", value: "201620" }];

$("#semester").change(function() {
    var selectY = $("#semester option:selected").val();
    switch(selectY){
        case 'fall':
             yr(fall);
            break;
        case 'spring':
             yr(spring);
            break;
        case 'fallos':
             yr(fallos);
             break;
        case 'springos':
             yr(springos);
            break;
        case 'fallci':
            yr(fallci);
            break;
        case 'fallfa':
            yr(fallfa);
            break;
        case 'springfa':
            yr(springfa);
            break;
        default:
        $("#year").empty();
        $("#year").append("<option>--Select Year--</option>");
        break;
        //maybe need to change this... maybe this is what lammers talk about?
           }
});

function yr(arr)
{
  $("#year").empty();
  $("#year").append("<option>--Select Year--</option>");
    $(arr).each(function (i) { //populate child options
        $("#year").append("<option value=\""+arr[i].value+"\">" +arr[i].display+"</option>")
    });
}

$("#year").change(function() {
    var yearterm = $("#year option:selected").val();

    //var floor = $("#floor option:selected").val();
    var floor = Math.abs($("#floor option:selected").val());

    var floorplanURL = 'floorplans/' + building + '_Floor_' + floor + yearterm + '.html';

    $('.floorplan').attr('src', floorplanURL);

});


});
