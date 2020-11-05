const multerArray = require('multer')

const storage = multerArray.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img/carousel/')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname,
      date = Date.now()
    cb(null, ext)
  }
})

const uploadArray = multerArray({
    storage: storage,
    limits: {
        fileSize: 1 * 4098 * 4098,
        files: 4
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/gif" ||
            file.mimetype === "image/jpeg"
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            req.fileValidationError = 'Le fichier doit être au format png, jpg, jpeg ou gif.';
            // return cb(new Error('Le fichier doit être au format png, jpg, jpeg ou gif.'))
        }
    }
})

module.exports = uploadArray
