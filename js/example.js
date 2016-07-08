$(document).ready(function() {

  // Declaring all my variables
  /*
    The number of items we place in our primarySet array is crucial.
    That number will dictate how many items will show up in my film strip.
    In this scenario, I want my film strips to hold 5 items on both sides,
    that's why I've placed only 5 items in my primarySet.

    All the other items will live in my remainingSet. If I had 50 remaining items,
    they would all be listed in my remainingSet.
  */
  var primarySet = ['001', '002', '003', '004', '005'],
      remainingSet = ['006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016'],

      $filmStripLeft = $('#film-strip-left'),
      $filmStripRight = $('#film-strip-right'),
      $centerStage = $('#ceter-stage'),
      $btnNext = $('#btn-next');


  // This is the function that will attach my items to the filmStrip
  function appendItemsToFilmStrip() {

    /*
      This is the secret sauce that gets it all working.
      This loop will only run 5 times because I have 5 items in my primarySet array.
    */
    for(var i = 0; i < primarySet.length; i++) {

      /*
        Each time this loop runs, it will create an <h2> html element.
        The text inside will read Agent 001 or 002, etc. depending on where we're at in the loop.

        Once the element is created, we'll append it to the left film strip.
      */
      var leftItem = '<h2> Agent ' + primarySet[i] + '! </h2>';
      $(leftItem).appendTo($filmStripLeft);

      /*
        Similarly, we'll do the same with the right side.
        However, instead of extracting the items from the primarySet array ...
        we'll be extracting the first 5 items from the remainingSet array.
        That's the key difference between the leftImage & rightImage

        Once the element is created, we'll append it to the right film strip.
      */
      var rightItem = '<h2> Agent ' + remainingSet[i] + ' <3 </h2>';
      $(rightItem).appendTo($filmStripRight);

    }
  }

  // Now, we execute the function.
  /*
    It's important to remember to invoke the function because this will allow us
    to populate our film strips on initial load
  */
  appendItemsToFilmStrip();


  // Now, we'll bind an event to the next button
  $btnNext.on('click', function() {
    // Remove the first item from primarySet array
    /* ie. If we started off with [10, 20, 30, 40, 50]
           we would now be left with [20, 30, 40, 50].
           The first item, 10, would now be stored in the firstItem variable */
    var primarySetFirstItem = primarySet.shift();

    /* Because we're creating a cycle, and we don't want to lose the first item,
       we'll add the item we removed, 10, back into the remainingSet array which hold
       all the other items

       ie. If remainingArray had [60, 70, 80, 90, 100, 110, 120, 130],
           the function below will add 10 to the last position:
          [60, 70, 80, 90, 100, 110, 120, 130, 10]
    */
    remainingSet.push(primarySetFirstItem);

    // Remove the first item from the remainingSet array
    var remainingSetFirstItem = remainingSet.shift();

    /* Similar to what we did with the primarySet array,
       we also want to add the item we just removed from remainingSet into the primarySet array
    */
    primarySet.push(remainingSetFirstItem)


    // Remove all the items from the film strip
    $('#film-strip-left').empty();
    $('#film-strip-right').empty();

    /*
      Now that we've updated our arrays and have emptied our film strips, we'll want to repopulate them.
      Instead of re-writing the code we wrote to initially populate our film strips,
      we can just call the appendItemsToFilmStrip function we created.

      We'll be able to loop over our arrays with the new arrangement and re-attach the newest items to
      our film strips.
    */
    appendItemsToFilmStrip();
  });

});
