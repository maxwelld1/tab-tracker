module.exports = (app) => {
	app.post(app.get('/register', (req, res) => {
		res.send({
			message: 'Hello ${req.body.email}! Your user was registered! Have fun!'
		})
	}))
}
