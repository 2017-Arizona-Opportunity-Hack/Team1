/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var json2csv = require('json2csv');

module.exports = {
  index: function(req, res){
    Data.create(req.body).exec(function(err, data){
      if (err) {
        return res.serverError(err)
      }
      try {
  var result = json2csv(data);
  console.log(result);

} catch (err) {
  console.error(err);
}
    return res.send({
        "Code" : 2
      })
    })
  },

  //  create: function (req, res) {
  //    Data.create(req.body).exec(function (err, user) {
  //      if (err) {
  //        return res.json(err.status, {err: err});
  //      }
  //      if (user) {
  //        Mailer.sendWelcomeMail(user);  // <= Here we using
  //        res.json(200, {user: user});
  //      }
  //    });
  //  }


};
