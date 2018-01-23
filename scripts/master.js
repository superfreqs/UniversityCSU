$(document).ready(function(){
  $('.floorplan-config-selecton button').click(function() {

    //get building acroynym
    var building = $('.floorplan-config-selecton').data('building-ac');

    // get value of floor
    var floor = $('#floor').val();

    // get value of year   maybe use Number()
    var year = $('#year').val();

    // get value of Semester
    var semester = $('#semester').val();

    // get value of yearterm MAYBE
    var yearterm = eval(Number(year) + Number(semester));

    // example url DO_Floor_ 1_200610.html

    var floorplanURL = building + '_Floor_' + floor + yearterm + '.html';

    console.log(floorplanURL, 'building: ', building, 'floor', floor, 'semester: ', semester , 'year: ', year);

    $('.floorplan').attr('src', floorplanURL);

  });
});
