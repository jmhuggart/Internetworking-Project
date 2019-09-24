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

@main.route('/adminPage', methods=['GET', 'POST' ])
def adminPage():
	if request.method == 'POST':
		task_data = request.get_json()
		subject = task_data['subject']
		question = task_data['question']
		numberofanswers = task_data['number']
		taskdata = {
			"Subject": subject,
			"Question": question
		}
		db.child("Tasks").push(taskdata)
		return my_index()
	return render_template("index.html")

@main.route('/login', methods=['GET', 'POST' ])
def login():
	if request.method == 'POST':
		login_data = request.get_json()
		email = login_data['email']
		password = login_data['pass']
		user = auth.sign_in_with_email_and_password(email, password)
		return 'Login Successful'
	return render_template('index.html')

@main.route('/register', methods=['GET', 'POST' ])
def register():
	if request.method == 'POST':
		register_data = request.get_json()
		name = register_data['name']
		email = register_data['email']
		password = register_data['pass']
		auth.create_user_with_email_and_password(email, password)
		user = auth.sign_in_with_email_and_password(email, password)
		data = {
			"Name": name,
			"Email": email
		}
		db.child("Users").push(data, user['idToken'])
		return my_index()
	return render_template('index.html')
