from flask import Flask, render_template, request

app = Flask(__name__)

app.static_folder = 'static'


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/line')
def line():
    return render_template('line.html')

@app.route('/data')
def explore():

    charts = [
        {'title': 'Most Populated Countries', 'cat': 'Demographics', 'id': 'worldPop'},
        {'title': 'Music Evolution', 'cat': 'Entertainment', 'id': 'musicGenreChart'},
        {'title': 'Social Media Trends', 'cat': 'Internet', 'id': 'smlastmonth'}
    ]

    return render_template('explore.html', charts=charts)


@app.route('/bar')
def bar():
    return render_template('bar.html')

@app.route('/home')
def homee():
    return render_template('home.html')

@app.route('/live')
def live():
    return render_template('live.html')


@app.route('/pie')
def pie():
    return render_template('pie.html')




if __name__ == '__main__':
    app.run(debug=True)


