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
  const userAge = user.getPlanetAge(selectedPlanet);

  user.setLifeExpectancy();

  let userHabits =[];
  $("input:checkbox:checked").each(function (){
    userHabits.push($(this).val());
  });
  user.setAdjustedLifeExpectancy(userHabits);

  let timeLeft = user.getTimeLeft(selectedPlanet);
  let timeLeftMessage;

  if (timeLeft > 0){  
    timeLeftMessage = `<p>You can expect to live for another ${timeLeft} ${selectedPlanet} years.</p>`;
  } else {
    timeLeft = timeLeft * -1;
    timeLeftMessage = `<p>You have exceeded your life expectancy by ${timeLeft} ${selectedPlanet} years! Wow, hope I look like you if I get to that age!</p>`;
  }

  const ageMessage = `<h3>${userName}, on ${selectedPlanet}, you are ${userAge} ${selectedPlanet} years old.</h3>`;

  $("#age-results").html(ageMessage);
  $("#time-left-results").html(timeLeftMessage);
  
  $("form#calculator").hide();
  $("#refresh").show();

  $('#goBack').click(function() {
    location.reload();
  });
});