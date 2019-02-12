var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator/check')


// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


router.use(function(req, res, next) {
 // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  	next();
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  	res.send('get respond with a resource');
});

router.post('/', [
	check('email').isEmail(),
	check('message').isLength(30)
], (req, res) => {
	const email = req.body.email;
	const message = req.body.message;

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		return res.send(req.body);
	}
});


router.put('/', function(req, res, next) {
  	res.send('put respond with a resource');
});

module.exports = router;
