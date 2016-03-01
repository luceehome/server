import $ from 'jquery';

$(() => {
  const locationInput = $('.config-fhem-location');

  $('form').submit(event => {
    event.preventDefault();

    $.ajax('/api/fhem', {
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        location: locationInput.val()
      })
    });
  });
});
