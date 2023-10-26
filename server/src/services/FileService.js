const uuid = require('uuid');
const path = require('path');
class FileService {
  saveFile(file) {
    console.log('1231111233415', file);
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log('566666666', e);
    }
  }
};

module.exports = new FileService();