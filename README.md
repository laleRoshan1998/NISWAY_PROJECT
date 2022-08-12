# NodeJS Assessment


# Nisway Project
***

## Project Discription
IN this project i had some employee's data in csv file. i converd that all data in json format. after gettig json formated data put that all data in  mysql databases. after inserting all employee's data in databases. i made two api's one api is to show shorted data in ascending order of employee job title and salary currency in USD. and other api is to show data of spesific employe.

_

## Uses of this project
with the help of this project we can seed shorded data of employees. we can sort all the data as we want. we can see data of specific enploye as well.

## Installations 
* npm init -y
1. csvtojson
    * npm i csvtojson
2. express
    * npm i express
3. knex
    * npm i knex
4. mysql
    * npm i mysql

## Routes
* localhost:3000/salaries/ (_employee id_)
* localhost:3000/salaries?sort=Title&order=asc&currency=USD

## Difficulties 
* while doing this project, i felt a difficulty when i was inserting all employee's data in database. i had huge data of employee's, one problem was that at data no. 18185 there was location wrong that was doing problem while inserting the data in database. then i find that where is problem exactly. that was good challage to find exact that data in huge data. and fix it.

