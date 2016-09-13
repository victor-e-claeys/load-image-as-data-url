module.exports = function loadImageAsDataURL(imgURI, cb){
  var img = document.createElement('img');
  var canvas = document.createElement('canvas');

  // Required for GMaps and certain sites
  // read more on: http://stackoverflow.com/a/20424457/2374061
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = function(){
    var ctx = canvas.getContext('2d');

    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;

    ctx.drawImage(img, 0, 0);
    cb(null, canvas.toDataURL('image/png'));
  }

  img.onerror = function(error){
    cb(e, null);
  }

  img.src = imgURI;
}
