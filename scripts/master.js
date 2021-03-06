$(document).ready(function(){

var building = $('.floorplan-config-selecton').data('building-ac');

$("#floor").change(function() {
    var floor = $('#floor').val();
    //var floor = $("#floor option:selected").val();

    var yearterm = $("#year option:selected").val();

    var floorplanURL = 'FloorPlans/' + building + '_Floor_' + floor + yearterm + '.html';

    $('.floorplan').attr('src', floorplanURL);

});

var fall = [
    {display: "2016", value: "201610" },
    {display: "2015", value: "201510" },
    {display: "2014", value: "201410" },
    {display: "2013", value: "201310" },
    {display: "2012", value: "201210" },
    {display: "2011", value: "201110" },
    {display: "2010", value: "201010" },
    {display: "2009", value: "200910" },
    {display: "2008", value: "200810" },
    {display: "2007", value: "200710" },
    {display: "2006", value: "200610" }];

 var spring = [
    {display: "2017", value: "201620" },
    {display: "2016", value: "201520" },
    {display: "2015", value: "201420" },
    {display: "2014", value: "201320" },
    {display: "2013", value: "201220" },
    {display: "2012", value: "201120" },
    {display: "2011", value: "201020" },
    {display: "2010", value: "200920" },
    {display: "2009", value: "200820" },
    {display: "2008", value: "200720" },
    {display: "2007", value: "200620" }];

 var fallos = [
    {display: "2016", value: "201610" },
    {display: "2015", value: "201510" }];

  var springos = [
    {display: "2017", value: "201620" },
    {display: "2016", value: "201520" }];

  var fallci = [
    {display: "2016", value: "201610" },
    {display: "2015", value: "201510" },
    {display: "2014", value: "201410" },
    {display: "2013", value: "201310" },
    {display: "2012", value: "201210" },
    {display: "2011", value: "201110" },
    {display: "2010", value: "201010" },
    {display: "2009", value: "200910" },
    {display: "2008", value: "200810" },
    {display: "2007", value: "200710" }];

  var fallfa = [
    {display: "2016", value: "201610" },
    {display: "2015", value: "201510" },
    {display: "2014", value: "201410" },
    {display: "2013", value: "201310" },
    {display: "2012", value: "201210" },
    {display: "2011", value: "201110" },
    {display: "2010", value: "201010" }];

  var springfa = [
    {display: "2017", value: "201620" },
    {display: "2016", value: "201520" },
    {display: "2015", value: "201420" },
    {display: "2014", value: "201320" },
    {display: "2013", value: "201220" },
    {display: "2012", value: "201120" },
    {display: "2011", value: "201020" }];


$("#semester").change(function() {
    var selectY = $("#semester").val();
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

    var floor = $("#floor").val();

    var floorplanURL = 'FloorPlans/' + building + '_Floor_' + floor + yearterm + '.html';

    $('.floorplan').attr('src', floorplanURL);

});


});
