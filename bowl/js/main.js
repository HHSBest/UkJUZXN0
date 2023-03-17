var xhr = new XMLHttpRequest();
xhr.open('GET', '/bowl/html5game/RetroBowl.js', true);
xhr.responseType = 'arraybuffer';
xhr.onload = function() {
  var data = xhr.response;
  zlib.deflate(data, function(err, compressedData) {
    if (!err) {
      // ...save or send the compressed data as needed...
      console.log('Compression succeeded');
    } else {
      console.error(err);
    }
  });
};
xhr.send();
