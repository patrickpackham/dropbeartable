#!/bin/bash

docker cp server/database_exports/ dropbeartable_mevn_dbt-database_1:/home/database_exports

echo Please enter a database name:
read dbname
echo Please enter a database username:
read username
echo Please enter a database password:
read password
echo

echo Creating user
docker exec -it dropbeartable_mevn_dbt-database_1 mongo $dbname -u admin -p password --authenticationDatabase admin --eval "db.createUser({user: '$username', pwd: '$password', roles: ['readWrite']})"
echo

echo Importing database
docker exec -it dropbeartable_mevn_dbt-database_1 mongoimport mongodb://admin:password@localhost/dropbeartable /home/database_exports/restaurants --jsonArray
docker exec -it dropbeartable_mevn_dbt-database_1 mongoimport mongodb://$username:$password@localhost/$dbname /home/database_exports/bookings --jsonArray
echo

echo module.exports = {MONGO_USERNAME: \"$username\", MONGO_PASSWORD: \"$password\", MONGO_HOST: \"dropbeartable_mevn_dbt-database_1\", DB_NAME: \"$dbname\"} > server/config.js
echo Database succesfully imported.

echo Installing jest...
npm install jest --silent

echo You are free to test the app with the provided commands in the README.

