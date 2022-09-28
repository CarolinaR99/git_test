#!/usr/bin/python3

from http import server
import socket

serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostname() # gets IP address of the host/server
# host = '192.168.1.83'
port = 444

serversocket.bind((host, port))

serversocket.listen(3) #TCP listener, max 3 connections

while True:
    clientsocket, address = serversocket.accept()

    print(f"received connection from {str(address)}")

    message = "Hello! Thank you for connecting to the server." + "\r\n"
    clientsocket.send(message.encode('ascii'))

    clientsocket.close()