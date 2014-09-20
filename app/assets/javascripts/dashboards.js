var source;
$(document).ready(function(){

  function startStreaming(){

    source = new EventSource('/logs/development.log');

    source.addEventListener('logs.all', function(event) {
      message = JSON.parse(event.data);
      $('#logDesc').append("<pre><code>" + message + "</code></pre>")
    });

    source.addEventListener('error', function(event) {
      if(event.readyState == EventSource.CLOSED) {
        console.log('Connection lost...')
      } else {
        console.log('Connection error... Auto reconnect')
      }
    });
  }

  function stopStreaming(){
    console.log(source)
    if(source){ source.close() }
  }

  $("#startLog").on('click', function(){
    console.log("starting streaming...")
    startStreaming();
  });

  $("#stopLog").on('click', function(){
    console.log("ending streaming...")
    stopStreaming();
  });
});