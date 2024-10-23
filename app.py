from flask import Flask, request, render_template,jsonify

app = Flask(__name__)

@app.route('/')
def allData():
  dataList = [
     {
      'id': 1,
      "month": '1',
      "fruits": ['りんご','メロン','いちご']
      },
     {
      'id': 2,
      "month": '2',
      "fruits": ['ぶどう','オレンジ','レモン']
      },
     {
      'id': 3,
      "month": '3',
      "fruits": ['桃','キウイ','梨']
      }
  ]
  return render_template('allData.html',dataList=dataList)


@app.route('/eachmonth')
def showIndex():
  dataList = [
    {
    'id': 1,
    "month": '1',
    "fruits": ['りんご','メロン','いちご']
    },
    {
    'id': 2,
    "month": '2',
    "fruits": ['ぶどう','オレンジ','レモン']
    },
    {
    'id': 3,
    "month": '3',
    "fruits": ['桃','キウイ','梨']
    }
  ]
  data = dataList[0]
  return render_template('eachMonth.html',data=data)


@app.route('/eachmonth/<month>')
def getMonthlyData(month):
  # ダミーデータ
  dataList = [
    {
      'id': 1,
      "month": '1',
      "fruits": ['りんご','メロン','いちご']
      },
    {
      'id': 2,
      "month": '2',
      "fruits": ['ぶどう','オレンジ','レモン']
      },
    {
      'id': 3,
      "month": '3',
      "fruits": ['桃','キウイ','梨']
      }
  ]

  for data in dataList:
    print(data['month'] == month)
    if data['month'] == month:
      print(data)
      json_data = jsonify(data)
      return json_data

  return 'error'
  
  
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)