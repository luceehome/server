import $ from 'jquery';

$(() => {
  const fhemServerInput = $('.config-fhem-server');

  $('form').submit(event => {
    event.preventDefault();

    $.ajax('/api/v1/fhem', {
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        address: fhemServerInput.val()
      })
    });
  });
});
