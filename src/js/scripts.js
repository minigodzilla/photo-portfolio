//----------------------------------------------------------------------------//
// Owl Carousel                                                               //
//----------------------------------------------------------------------------//

function initCarousel()
{
	$('.owl-carousel').owlCarousel(
	{
		navText: '',
		responsive: {
			0: {
				items: 1,
				margin: 0,
				loop: true
			},
			576: {
				items: 1,
				margin: 0,
				loop: true
			},
			768: {
				items: 1,
				margin: 24,
				nav: true,
				loop: true
			},
			1200: {
				items: 1,
				margin: 32,
				nav: true,
				loop: true
			}
		}
	});
}


//----------------------------------------------------------------------------//
// Get JSON and append it to the carousel                                     //
//----------------------------------------------------------------------------//

$(function()
{
	// var jsonFile = '/data/ritualRestaurantList.json';
	// var itemContainer = $('#item-container');

	// $.getJSON(jsonFile)
	// 	.done(function(data) {

	// 		$.each( data.restaurants, function( i, item ) {

	// 			var itemElement = $('<div class="item">');
	// 			var detailsElement = $('<div class="restaurant-details">');
	// 			var nameElement = $('<div class="restaurant-name">');
	// 			var typeElement = $('<div class="restaurant-type">');
	// 			var btnElement = $('<a class="btn" href="#">');

	// 			itemElement.attr('style','background-image: url("' + item.imageUrl + '");').appendTo(itemContainer);
	// 			detailsElement.appendTo(itemElement);
	// 			nameElement.html(item.name).appendTo(detailsElement);
	// 			typeElement.html(item.address).appendTo(detailsElement);
	// 			btnElement.html('View Menu').appendTo(detailsElement);
	// 		});

	// 		// now do the carousel
	// 		initCarousel();

	// 	})
	// 	.fail(function() {

	// 		var errorElement = $('<div class="error">');

	// 		errorElement.html('An error has occured.').appendTo(itemContainer);

	// 	});

	initCarousel();

});


//----------------------------------------------------------------------------//
// Form Validation                                                            //
//----------------------------------------------------------------------------//

$(function()
{
	const $form = $('form');
	const $inputs = $form.find ('.name-field, .tel-field, .region-field');
	const $email  = $form.find ('.email-field');


	// on blur

	$inputs.change (function()
	{
		if ($(this).val())
		{
			$(this).removeClass('is-invalid').addClass('is-valid');
		}

		else
		{
			$(this).removeClass('is-valid').addClass('is-invalid');
		}
	});

	$email.change (function()
	{
		var emailValue = $email.val();

		if(emailValue.indexOf('@')>-1) {
			$(this).removeClass('is-invalid').addClass('is-valid');
		}

		else
		{
			$(this).removeClass('is-valid').addClass('is-invalid');
		}
	});


	// on submit

	$form.submit (function(e)
	{

		var errorState = false;

		$inputs.each (function()
		{
			if ($(this).val())
			{
				$(this).removeClass('is-invalid').addClass('is-valid');
			}

			else
			{
				$(this).removeClass('is-valid').addClass('is-invalid');
				errorState = true;
			}
		});

		var emailValue = $email.val();

		if(emailValue.indexOf('@')>-1) {
			$email.removeClass('is-invalid').addClass('is-valid');
		}

		else
		{
			$email.removeClass('is-valid').addClass('is-invalid');
			errorState = true;
		}

		if (errorState)
			return false;

	});

});
