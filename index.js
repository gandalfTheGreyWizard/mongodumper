var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost:27017/globalAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected");
});
var UsersSchema = new mongoose.Schema({
  }, {"collection": "Users"});
var UsersModel = mongoose.model('faunaModel', UsersSchema);

UsersModel.find({}, function(err, res) {
    res.forEach((element) => {
        fs.appendFile('dump.json', element, function(err) {
            if(err) {
                console.log('error',err);
            } else {
                console.log('saved');
            }
        });
    });
});