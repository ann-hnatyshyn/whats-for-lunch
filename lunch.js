/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry === true && availableTime <= 20) {
    return "Pick something up and eat it in the lab!";
  } if (hungry === true && availableTime > 20 && availableTime <= 30) {
    return "Try a place nearby!";
  } if (hungry === false) {
    return "Get back to work.";
  } if (hungry === true && availableTime > 30) {
    return "Remember, we are in bootcamp and we should get back to it!";
  }
};
console.log(whatToDoForLunch(false, 50));