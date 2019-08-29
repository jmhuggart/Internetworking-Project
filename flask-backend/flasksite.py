import flask 
app = flask.Flask("__main__")

@app.route("/")
def my_index():
	return flask.render_template("index.html", token="Hello Flask and React!")

#Allows us to save changes and have them reflect immediately on the webpage without restarting the web server
app.run(debug=True)