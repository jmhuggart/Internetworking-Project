import flask 
import pyrebase
app = flask.Flask("__main__")

config = {
	"apiKey": "AIzaSyDDeGbUcZmqJDDn7KkO8sQlwMsDYSAU7DY",
  	"authDomain": "internetworking-project-371e3.firebaseapp.com",
  	"databaseURL": "https://internetworking-project-371e3.firebaseio.com",
  	"projectId": "internetworking-project-371e3",
  	"storageBucket": "",
  	"messagingSenderId": "401570430500",
  	"appId": "1:401570430500:web:ffeddcc63a657b98"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

db.child("names").push({"name": "Jack"})

@app.route("/")
def my_index():
	return flask.render_template("index.html", token = "Hello Flask + React!")

#Allows us to save changes and have them reflect immediately on the webpage without restarting the web server
app.run(debug = True)