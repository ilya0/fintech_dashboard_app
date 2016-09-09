# fintech_dashboard_app

This is a test to create a dash board with finanicals api's and to
show a real time display of various financial data
hopefully I can use angular or react to do the front end 
and maybe node for the back

I need to do some research on the various finance apis available
and start to pull them in a real time updating way


yahoo finance api
http://meumobi.github.io/stocks%20apis/2016/03/13/get-realtime-stock-quotes-yahoo-finance-api.html


p5 
https://p5js.org/tutorials/

d3
https://d3fc.io/

Pubnub
https://www.pubnub.com/solutions/realtime-dashboards/


Current issues:
1. Creating a live streaming APi with data that will me immeidiately and unlimitedly accessible
2. Creating a front end that will refresh itself continuously


Current Ideas
using pubnub to get api data
using html to create a template
finished product should use some sort of angualr or react
I would prefer react
Use p5 or d3 to create a motion graphic in html

Process - 
I started off trying build a backend that would connect to the front end
Biggest issue is being able to query apis rapidly, one time a second to get updates in live successon. SO I decided that I need to connect and api that will allow me to get live updates. SOmething that I can use is pubnub. Pubnub allows me to create packaged json data with all the various api pulls in one hit. This will forego the situation where I am making multiple pulls to various apis through ajax or a node back end.

I would like to create just a front end where I can get data and display it for the ease of this project.

