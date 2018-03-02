from flask import Flask, jsonify, request
from InvestopediaApi import ita

app = Flask(__name__)

stores = [
    {
        'name': 'My store',
        'items': [
            {
                'name': 'My item',
                'price': 15.99
            }
        ]
    },

    {
        'name': 'Another cool store',
        'items': [
            {
                'name': 'Some other stuff',
                'price': 24.99
            }
        ]
    }
]


@app.route('/')
def hello():
    return "Hello Worlds"


# GET a user
@app.route('/user')
def get_user():
    email = request.args.get('email')
    password = request.args.get('pass')
    if not email:
        return "email can not be empty"
    if not password:
        return "password can not be empty"

    client = ita.Account(email, password)
    return jsonify({'status': client.get_portfolio_status()})


app.run(port=5000)