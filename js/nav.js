$('#nav-container').load('navbar.html', function() {
  var title = $('title').text().substring(11);
  $('#navbar-title').html(title);
  if (title == 'About') {
    $('#about').addClass('active');
  }
  if (title == 'Contribute') {
    $('#contribute').addClass('active');
  }
});