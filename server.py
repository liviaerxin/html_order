#-*- coding: utf8 -*-
"""
@author: siyao
industries finance data interface, response is JSON style
"""
from bottle import route, request, run, response, hook

@hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

@route("/commit/<item>",method="post")
def commit(item=None):
    for k,v in request.forms.items():
        print k,v
        print "\n"
    return "Item: " + item + "Committed Successed" 
	
if __name__ == '__main__':
    run(host = "127.0.0.1", port = 7000, debug = True)
