from flask import *
import pyrebase
app = Flask("__main__")

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

#db = firebase.database()

#db.child("names").push({"name": "Jack"})

#Register Login


auth = firebase.auth()

#email = input ('Please enter your email\n')
#password = input('Please enter your password\n')

#user = auth.create_user_with_email_and_password(email, password)

#auth.get_account_info(user['idToken'])

@app.route("/")
def my_index():
	return render_template("index.html", token = "Hello Flask + React!")

#At the url /login, Login page

@app.route("/login", methods=['GET', 'POST' ])

def login():
	if request.method == 'POST':
		email = request.form['name']
		password = request.form['pass']
		auth.sign_in_with_email_and_password(email, password)
		return 'Login Successful'
	return render_template('login.html')

#Allows us to save changes and have them reflect immediately on the webpage without restarting the web server
app.run(debug = True)	

