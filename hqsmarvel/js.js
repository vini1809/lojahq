$('#vingadores').on('click', function() {
    $('#menu').slideToggle('slow');
  });
  
  $('.menu-link').each(function() {
    $(this).on('click', function() {
      $('#menu').slideToggle('slow');
    });
  });
