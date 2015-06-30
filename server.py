#-*- coding: utf8 -*-
"""
@author: siyao
industries finance data interface, response is JSON style
"""
from bottle import route, request, run

@route("/commit",method="post")
def commit():
    for k,v in request.forms.items():
        print k,v
        print "\n"
    return "hello"
	
if __name__ == '__main__':
    run(host = "127.0.0.1", port = 7000, debug = True)
