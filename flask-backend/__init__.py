from flask import *

def create_app():
	app = Flask(__name__)
	if __name__ == 'main':
		app.run(debug = True)

	from .views import main
	app.register_blueprint(main)

	return app