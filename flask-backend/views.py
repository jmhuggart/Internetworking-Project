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
userType = None

@main.route('/')
def my_index():
	return render_template("index.html", userType = userType)

@main.route('/adminPage', methods=['GET', 'POST' ])
def adminPage():
	if request.method == 'POST':
		task_data = request.get_json()
		subject = task_data['subject']
		question = task_data['question']
		number = task_data['number']
		answerA = task_data['subjectA']
		answerB = task_data['subjectB']
		if number == "3":
			answerC = task_data['subjectC']
			answerD = 'empty'
		elif number == "4":
			answerC = task_data['subjectC']
			answerD = task_data['subjectD']
		else:
			answerC = "empty"
			answerD = "empty"

		taskdata = {
			"Subject": subject,
			"Question": question,
			"Answer-A": answerA,
			"Answer-B": answerB,
			"Answer-C": answerC,
			"Answer-D": answerD
		}
		db.child("Tasks").push(taskdata)
		return my_index()
	return my_index()

@main.route('/login', methods=['GET', 'POST' ])
def login():
	if request.method == 'POST':
		login_data = request.get_json()
		email = login_data['email']
		password = login_data['pass']
		user = auth.sign_in_with_email_and_password(email, password)
		user_name = findUserName(email)
		global userType
		userType = findUserType(user_name)
		return my_index()
	return my_index()

@main.route('/register', methods=['GET', 'POST' ])
def register():
	if request.method == 'POST':
		register_data = request.get_json()
		name = register_data['name']
		email = register_data['email']
		password = register_data['pass']
		auth.create_user_with_email_and_password(email, password)
		user = auth.sign_in_with_email_and_password(email, password)
		# For the moment, each user created will be 'user' type and not 'admin'
		data = {
			"Email": email,
			"Type": "User"
		}
		db.child("Users").child(name).set(data)
		return my_index()
	return my_index()



# HELPER FUNCTIONS

def findUserName(email):
	user_to_find = db.child("Users").order_by_child("Email").equal_to(email).get()
	for user in user_to_find.each():
		user_name = user.key()
	return user_name

def findUserType(name):
	user_to_check = db.child("Users").order_by_key().equal_to(name).get()
	#user_type = user_to_check.val()["Type"]
	for user in user_to_check.each():
		user_type = user.val()["Type"]
	return user_type