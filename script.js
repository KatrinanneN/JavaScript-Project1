// 1. When a user hovers on the entry box, a scroll tab appears on the right (remove negative number)
// 2. the user can enter their own number
// 3. Once the number is entered, there will be a submit button on the right side
// 4. The submit button is selected
// 5. Once the submit button is selected, the data will be retrieved 
// 6. Then convert the lbs entered into grams, kilograms or ounces 
// 7. Then show 


//Version 5 with entering lbs: CORRECT VERSION.  USE THIS AS BACKUP
$('#output').css('visibility', 'hidden');
$('#lbsInput').keyup(function () {
  alrt('i broke you')
  $('#output').css('visibility', 'visible');
  const lbs = $('#lbsInput').val();
  $('#gramsOutput').html(Math.floor(lbs / 0.0022046));
  $('#kgOutput').html(Math.floor(lbs / 2.2046));
  $('#ozOutput').html(Math.floor(lbs * 16));
});



