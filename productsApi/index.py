from flask import Flask, jsonify
app = Flask(__name__)

products = [
    {
    'id':1,
    'name':'livro'
    },
    {
    'id':2,
    'name':'chapéu'
    },
    {
    'id':1,
    'name':'sapato'
    },
]

@app.route('/products', methods=['GET'])
def productsFunction():
    return jsonify(products)
if __name__ == '__main__':
    app.debug = True
    app.run(port=3002)