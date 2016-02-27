import $ from 'jquery';

$(() => {
  const fhemServerInput = $('.config-fhem-server');

  $('form').submit(event => {
    event.preventDefault();

    $.ajax('/api/v1/config', {
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        fhemServer: fhemServerInput.val()
      })
    });
  });
});
