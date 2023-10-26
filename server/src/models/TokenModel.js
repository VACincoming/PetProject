const { Schema, model } = require('mongoose');

const TokenSchema = new Schema({
  token: {type: Schema.Types.ObjectId, ref: 'User'},
  refreshToken: {type: String, required: true},
});

module.exports = model('Token', TokenSchema);