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

  $("#user-name").text(userName);
  $("#your-planet").text(selectedPlanet);
  $("#planet-age").text(user.getPlanetAge(selectedPlanet));
  $("#time-left").text(timeLeft);

  $("#age-results").show();

});