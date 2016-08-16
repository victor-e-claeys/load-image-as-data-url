module.exports = function loadImageAsDataURL(imgURI, cb){
  const img = document.createElement('img')
  const canvas = document.createElement('canvas')

  // Required for GMaps and certain sites
  // read more on: http://stackoverflow.com/a/20424457/2374061
  img.setAttribute('crossOrigin', 'anonymous')
  img.onload = () => {
    const ctx = canvas.getContext('2d')

    canvas.height = img.naturalHeight
    canvas.width = img.naturalWidth

    ctx.drawImage(img, 0, 0)
    cb(null, canvas.toDataURL('image/png'))
  }

  img.onerror = e => {
    cb(e, null)
  }

  img.src = imgURI
}
