// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .

var inactive = false;

$(function() {

	$('#submit').on('click', function(e) {
		e.preventDefault();
		search();
	});

});

var search = function() {

	var searchType = $('#container input[type=radio]:checked').val(),
			searchLocation = $('#container input[type=text]').val();

	if (inactive === true) { return };

	$.post('/search', { location: searchLocation, term: searchType }, function(data) {

		console.log(data);

		inactive = true;

		$('#results').show();
		$('#results').empty();

		data['businesses'].forEach(function(business, index) {
			console.log(business);
			console.log(index);
			capture(index, business);
		});

	});

};

var capture = function(i, business) {

	setTimeout(function() {
		
		if (i === 2) {
			inactive = false;
		}

		$('#results').append(build_results_container(business));

	}, 100);

};

var build_results_container = function(business) {

	return [
		'<div class="result">',
      '<img class="biz_img" src="', business['image_url'], '">',
      '<h5><a href="', business['url'] ,'" target="_blank">', business['name'], '</a></h5>',
      '<img src="', business['rating_img_url'], '">',
      '<p>', business['review_count'], ' reviews</p>',
    '</div>'
	].join('');

};