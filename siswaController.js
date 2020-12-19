//siswaController.js

//import siswa model
Siswa = require('./siswaModel');

//handle index actions
exports.index = function(req, res) {
  Siswa.get(function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Data Siswa Berhasil Di Ambil",
      data: siswa
    });
  });
};

//handle create siswa actions
exports.new = function(req, res) {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  //save the siswa and check for error
  siswa.save(function(err) {
    //if(err)
    //res.json(err);

    res.json({
      message: "Siswa Berhasil Di Tambahkan",
      data: siswa
    });
  });
};

//handle view siswa info
exports.view = function(req,res){
  Siswa.findById(req.params.siswa_id, function(err, siswa) {
    if(err)
      res.send(err);
    res.json({
      message: "Siswa details loading...",
      data: siswa
    });
  });
};

// Handle update siswa info
exports.update = function (req, res) {
  Siswa.findById(req.params.siswa_id, function (err, siswa) {
    if (err)
      res.send(err);
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;
    // save the siswa and check for errors
    siswa.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Siswa Info updated',
        data: siswa
      });
    });
  });
};

// Handle delete siswa
exports.delete = function (req, res) {
  Siswa.remove({
    _id: req.params.siswa_id
  }, function (err, siswa) {
    if (err)
    res.send(err);
    res.json({
      status: "success",
      message: 'Siswa deleted'
    });
  });
};
