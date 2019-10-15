from flask import *
import pyrebase
import json
from datetime import datetime
import time

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
user = None
current_task = None

@main.route('/')
def my_index():
	user_data = jsonUser(user)
	task_data = grabListofTasks()
	return render_template("index.html", user = user_data, tasks = task_data)

@main.route('/questionList')
def questionList():
	return my_index()


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
		now = datetime.now()
		creation_DT = now.strftime("%d/%m/%Y %H:%M:%S")

		taskdata = {
			"Subject": subject,
			"Question": question,
			"Answer-A": answerA,
			"Answer-B": answerB,
			"Answer-C": answerC,
			"Answer-D": answerD,
			"PostDT": creation_DT
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
		global user
		user = auth.sign_in_with_email_and_password(email, password)
		user_name = findUserName(email)
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
		global user
		user = auth.sign_in_with_email_and_password(email, password)
		# For the moment, each user created will be 'user' type and not 'admin'
		data = {
			"Email": email,
			"Type": "User"
		}
		db.child("Users").child(name).set(data)
		return my_index()
	return my_index()

@main.route('/questionDetails', methods=['GET', 'POST'])
def taskVote():
	if request.method == 'POST':
		voteData = request.get_json()
		selected_answer = voteData['selectedAnswer']
		question = voteData['question']
		task_to_update = db.child("Tasks").order_by_child("Question").equal_to(question).get()
		for task in task_to_update.each():
			new_votes = int(task.val()[selected_answer]) + 1
			key = task.key()
		db.child("Tasks").child(key).update({selected_answer: str(new_votes)})

		global current_task
		current_task = jsonTask(db.child("Tasks").child(key).get())
		return render_template("index.html", task = current_task)
	time.sleep(1)
	user_data = jsonUser(user)
	task_data = grabListofTasks()
	return render_template("index.html", user = user_data, tasks = task_data, task = current_task)



# HELPER FUNCTIONS

def jsonTask(task):
	task_details = {}
	task_details['question'] = task.val()["Question"]
	task_details['subject'] = task.val()["Subject"]
	task_details['answerA'] = task.val()["Answer-A"]
	task_details['answerB'] = task.val()["Answer-B"]
	task_details['answerC'] = task.val()["Answer-C"]
	task_details['answerD'] = task.val()["Answer-D"]
	task_details['postDT'] = task.val()["PostDT"]
	task_details['A'] = task.val()["A"]
	task_details['B'] = task.val()["B"]
	task_details['C'] = task.val()["C"]
	task_details['D'] = task.val()["D"]

	return json.dumps(task_details)

def grabListofTasks():
	task_list = db.child("Tasks").get()

	master_task_list = {}
	json_task = {}
	i = 0

	for task in task_list.each():
		json_task['question'] = task.val()["Question"]
		json_task['subject'] = task.val()["Subject"]
		json_task['answerA'] = task.val()["Answer-A"]
		json_task['answerB'] = task.val()["Answer-B"]
		json_task['answerC'] = task.val()["Answer-C"]
		json_task['answerD'] = task.val()["Answer-D"]
		json_task['A'] = task.val()["A"]
		json_task['B'] = task.val()["B"]
		json_task['C'] = task.val()["C"]
		json_task['D'] = task.val()["D"]
		json_task['postDT'] = task.val()["PostDT"]
		task_holder = json_task.copy()


		master_task_list['task' + str(i)] = task_holder
		i += 1

	master_task_list['numTasks'] = str(i)

	return json.dumps(master_task_list)


def findUserName(email):
	user_to_find = db.child("Users").order_by_child("Email").equal_to(email).get()
	for user in user_to_find.each():
		user_name = user.key()
	return user_name

def findUserType(name):
	user_to_check = db.child("Users").order_by_key().equal_to(name).get()
	for user in user_to_check.each():
		user_type = user.val()["Type"]
	return user_type

def jsonUser(user):
	if (user is not None):
		user_name = findUserName(user['email'])
		user_type = findUserType(user_name)
		user_data = {"name": user_name, "email": user['email'], "type": user_type}
	else:
		user_data = {"name": "nil", "email": "nil", "type": "nil"}

	return json.dumps(user_data)
