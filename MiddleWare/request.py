from flask import Flask, request, redirect
from flaskext.mysql import MySQL
import json
import QueryHandler

##### CONFIG #####
app = Flask(__name__)

#Retrieve username and password from json
keys = {}
monthYear = ''
with open("Json/keys.json","r") as f:
    keys = json.loads(f.read())

db_host = keys['host']
db_user = keys['user']
db_pw = keys['password']
db_name = keys['databasename']


app.config['MYSQL_DATABASE_HOST'] = db_host
app.config['MYSQL_DATABASE_USER'] = db_user
app.config['MYSQL_DATABASE_PASSWORD'] = db_pw
app.config['MYSQL_DATABASE_DB'] = db_name
mysql = MySQL(app)

#Create_connection
def create_connection():
    conn = None
    try:
        conn = mysql.connect()
    except Exception as e:
        print(e)
    return conn


@app.route("/receipeRequest", methods=['GET', 'POST'])

def getReipes():


    # def tableNameCreator(shared, month, year):
    #     if (shared):
    #         monthYearFunc = "%s_%s_%s" % (str(month), str(year), "Shared")
    #         return monthYearFunc
    #     monthYearFunc = "%s_%s" % (str(month), str(year))
    #     return monthYearFunc

    conn = create_connection()
g

    # query = "SELECT shopName, transactionDate, amount, category FROM %s ORDER BY transactionDate DESC" % (monthYearPersonal)
    # tabledata = QueryHandler.generalQuery(conn, query)

    
    if request.method == "POST" and "requestReceipes" in request.form:
        print("requesting receipes")
        requestInfo = request.form
        cookingLevel= requestInfo['cookingLevel']
        cookingEffort = requestInfo['cookingEffort']
        dietaryRestrictions = requestInfo['dietaryRestrictions']
        preferredCusine = requestInfo['preferredCusine']
        numberOfDays = requestInfo['numberOfDays']
        mealTypes = requestInfo['mealTypes']
        healthLevel = requestInfo['healthLevel']

        conn.close()

        # Check if input is valid, if not error
        if cookingLevel < 1 or cookingLevel > 5:
            return {
                "status": 400,
                "message": "Input error: cooking level must be within 1 and 5 (inclusive)"
            }
        elif cookingEffort < 1 or cookingEffort > 3:
            return {
                "status": 400,
                "message": "Input error: cooking effort must be within 1 and 3 (inclusive)"
            }
        elif numberOfDays < 1 or numberOfDays > 7:
            return {
                "status": 400,
                "message": "Input error: number of days of receipe must be within 1 and 7 (inclusive)"
            }

        return {
            "status": 200
        }

    conn.close()


if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()
