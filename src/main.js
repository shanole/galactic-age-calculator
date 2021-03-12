import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/person.js';

$("form#calculator").submit(function(event) {
  event.preventDefault();
  const user = new Person(parseInt($("#age").val()), $("#sex").val());
  const userName = $("#name").val();
  const selectedPlanet = $("#planet").val();
  let userHabits =[];

  $("input:checkbox:checked").each(function (){
    userHabits.push($(this).val);
  });
  user.setAdjustedLifeExpectancy(userHabits);
  const timeLeft = user.getTimeLeft(selectedPlanet);
  console.log(timeLeft);

  $("#user-name").text(userName);
  $(".your-planet").text(selectedPlanet);
  $("#planet-age").text(user.getPlanetAge(selectedPlanet));
  $("#age-results").show();

  if (timeLeft > 0){
    $(".time-left").text(timeLeft);
    $("#life-expectancy-results-young").show();
  } else {
    $(".time-left").text(timeLeft*-1);
    $("#life-expectancy-results-old").show();
  }
  
  $("form#calculator").hide();
});