$(document).ready( function() {

/* Click thumbnail photo; get path and photo file name, slice off last .jpg,
     add another extension to get the larger photo and put the larger photo in centre */
     $('img').on('click', function() {
           var $photoName = $(this).attr("src");
           var photoNameLength = $photoName.length - 14;
           var $newPhotoName = $photoName.slice(0,photoNameLength) + ("_large.jpg");
           var $photoElement = '<img class="centre-attr" src="' + $newPhotoName + '">';
            $('.centre-photo > img').replaceWith($photoElement);
      }); // end click

// Click on next button
            $('div.next-photo').on('click', function() {
// Take path name of thumbnail img using unique class identifier
                  var $oldPhotoName01= $('.photo01').attr('src');
// Take alt attr and assign it to a variable
                  var $oldAlt01 = $('.photo01').attr('alt');
// Take class attr and assign it to a variable.
                  var $oldClass01 = $('.photo01').attr('class');
// Take path name of next thumbnail image using unique class identifier
                  var $oldPhotoName02 = $('.photo02').attr('src');
// Take alt attr and assign it to a variable
                  var $oldAlt02 = $('.photo02').attr('alt');
// Take class attr and assign it to a variable
                  var $oldClass02 = $('.photo02').attr('class');
// Use variables to recreate the element names
                  var $newPhotoName01 = '<img src="' + $oldPhotoName01 + '" alt="' + $oldAlt01 + '" class="' + $oldClass01 + '">';
                  var $newPhotoName02 = '<img src="' + $oldPhotoName02 + '" alt="' + $oldAlt02 + '" class="' + $oldClass02 + '">';
// Insert new element .  NB: a variable cannot select the HTML element. The jquery object itself must select the element.
// Select the first photo by its unique class; add the new element after this element.  Then detach the old element.
                  $(function() {
                        $('.photo01').after($newPhotoName02);
                        $('.photo01').detach();
                  }) ;
//                        $('.photo01').removeClass('remove');
//                        $('.photo01').detach();
/*                  // Make the old second photo now become the first photo
                                    var $newPhotoName01 = $newPhotoName02;
                                    alert($newPhotoName01);
                                    alert($newPhotoName02); */
            }) ;
// This is the length of the for loop:  img.thumb-size.length
      });  // end ready

/* appending a class or id
/ Getting a new element on to the page.
var myNewElement = $( "<p>New element</p>" );
myNewElement.appendTo( "#content" );
myNewElement.insertAfter( "ul:last" ); // This will remove the p from #content!
$( "ul" ).last().after( myNewElement.clone() ); // Clone the p so now we have two.

// Creating and adding an element to the page at the same time.
$( "ul" ).append( "<li>list item</li>" );

/*       var photoList = document.getElementsByClassName('thumb-size');
                  var firstItem = photoList[1];
                  document.write(firstItem);
/*       $('div.next-photo').on('click', function() {
            var photoName1 = (photoList[1] + ' class="photo1"');
            var photoName2 = (photoList[2] + ' class="photo2"');
            $('photo1').replaceWith(photoName2);
            alert(photoName2);
      }) ; // end click */

/* add .attr('id', '1'); to image 1
      for (var i = 0; i < 6; i++) {
            $('img').addClass('1');
            alert('img');
      }  // end for loop

/* every photo has a unique src attribute
every thumbnail photo has the class thumb-size (addClass thumb-size)
50% of thumbnail photos have the class box-2
every thumbnail photo has 2 divs
      the parent div with class thumbnail-box and/or box-1 box-2
      the grandparent div with panel-left-side or panel-right-side
       }); // end click
/*      Get image element
Get path of image element.
Store path of image element in a variable (photoName1)
Get the next image (sibling) element
Get path of sibling image element (photoName2)
photoName 1 =photoName2 */

// } );  // end ready
