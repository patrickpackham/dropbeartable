# How to run the app

- Install [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) on your machine.
- In the terminal, run the command `docker-compose up -d` or `docker compose up -d` in the `dropbeartable_mevn` directory.
- If this is the first time running the application please type `. startup.sh` when in the dropbeartable_mevn directory. This will prompt you for some database credentials, create a MongoDB and import some data for you to test with. It will also Jest.
- You should now be free to test with the curl commands beow.
- To run our test suite just type `npm test`
- The assignment runs on the Mongo Community Edition which comes with the starter code.

NOTE: The startup script may not work as expected if the Database already has values in it or if the user exists with a different password. This script is intended to spin up a new database and create a new users. YMMV if you use it otherwise.

# How to shut down the app

Important: the command will remove all unused volumes, including the named volume `dropbeartable_mongodb`, which contains all of your data. You should follow the steps to back up your data beforehand.

- To back up the data:
	- visit [http://localhost:8081](http://localhost:8081)
	- select your database and export the data
	- Important: submit your assignments 2 and 3 with the exported data!
- Run the command `docker-compose down -v` to stop the running containers and remove the volumes.

# CURL commands for testing
####To test the BOOKINGS CREATE endpoint
curl -X POST \
  'http://localhost:3000/api/bookings/create?name=Pat&restaurant_id=6116777f947e141d56673bb7&date=09/21/2021&mobile=123456789&number_of_guests=2&time=9:30' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 4081d30b-3d22-418b-ab52-7c2c7085950a,d2357ba9-21a7-48c3-ba8c-032f1eae09e2' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache'
  
  
####To test GET ALL BOOKINGS endpoint
curl -X GET \
  http://localhost:3000/api/bookings/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 2a28a113-e50e-426b-84e9-9cac195109d5,bbeb946f-f3d6-4004-a9e6-e5a43e11ad0d' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache'
 
  
####To test GET BOOKING endpoint
curl -X GET \
  http://localhost:3000/api/bookings/611679f3802e531d80e8fe20 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 2a28a113-e50e-426b-84e9-9cac195109d5,b93fd26a-9134-481d-b54f-5aea3cee559b' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache'
  
 
 ####To test UPDATE BOOKING endpoint
 curl -X PUT \
  'http://localhost:3000/api/bookings/update/611679f3802e531d80e8fe20?name=Tim&number_of_guests=1&date=2021-09-21&time=9:30&mobile=987654321&requests=Booth%20please.&restaurant_id=611677bcab415a1d71655ee0' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 2a28a113-e50e-426b-84e9-9cac195109d5,c0e3608e-e318-43a5-93c2-b36b952b1207' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache'
  
####To test the DELETE BOOKING endpoint
curl -X DELETE \
  http://localhost:3000/api/bookings/delete/611679f3802e531d80e8fe20 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 2a28a113-e50e-426b-84e9-9cac195109d5,1c6a889e-301f-43d0-bac8-1055df0ea4c5' \
  -H 'User-Agent: PostmanRuntime/7.20.1' \
  -H 'cache-control: no-cache'

