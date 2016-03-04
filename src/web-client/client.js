import $ from 'jquery';

$(() => {
  const $location = $('.config-fhem-location');
  const $status = $('.config-status');
  const checkState = () => {
    $.ajax('/api/fhem', {
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        location: $location.val()
      })
    }).then(response => {
      if (response.success) {
        $status.text('OK');
        $status.css('color', 'green');
      }
      else {
        $status.text('ERROR');
        $status.css('color', 'red');
      }
    });
  };

  checkState();

  $('form').submit(event => {
    event.preventDefault();
    checkState();
  });
});
