const multer = require('multer');
import { cloudinaryUpload } from '../cloudinaryConfig';

const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Not supported file type!'), false);
    }
  },
});

const singleUpload = upload.single('image');
const multerUploads = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({ message: 'Image upload fail!' });
    }

    next();
  });
};

const path = require('path');
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

const uploadImage = async (req, res) => {
  try {
    const file64 = formatBufferTo64(req.file);
    const uploadResult = await cloudinaryUpload(file64.content);
    return res.json({
      cloudinaryId: uploadResult.public_id,
      url: uploadResult.secure_url,
    });
    // req.body.image = uploadResult.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export { multerUploads, formatBufferTo64, uploadImage };
