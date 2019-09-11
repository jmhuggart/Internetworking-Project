from flask import *
import pyrebase

main = Blueprint('main', __name__)

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
auth = firebase.auth()
db = firebase.database()

@main.route('/')
def my_index():
	return render_template("index.html")

@main.route('/login', methods=['GET', 'POST' ])
def login():
	if request.method == 'POST':
		email = request.form['email']
		password = request.form['pass']
		user = auth.sign_in_with_email_and_password(email, password)
		return 'Login Successful'
	return render_template('index.html')

@main.route('/register', methods=['GET', 'POST' ])
def register():
	if request.method == 'POST':
		name = request.form['name']
		email = request.form['email']
		password = request.form['pass']
		auth.create_user_with_email_and_password(email, password)
		user = auth.sign_in_with_email_and_password(email, password)
		data = {
			"Name": name,
			"Email": email
		}
		db.child("Users").push(data, user['idToken'])
		return 'Account created successfully.'
	return render_template('register.html')