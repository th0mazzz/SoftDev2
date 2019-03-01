# Thomas Zhao
# SoftDev pd8
# K06 -- Yummy Mongo Py
# 02/28/2019

import pymongo, pprint

SERVER_ADDR = "157.230.219.18"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.places
collection = db.restaurants

def by_borough(borough): #prints out restaurants in specified borough
    for doc in collection.find( {"borough": borough} ):
        pprint.pprint(doc)
        print('\n')
    

def by_zip(zipcode): #prints out restaurants in specified zip code
    for doc in collection.find( {"address.zipcode": zipcode} ):
        pprint.pprint(doc)
        print('\n')


def by_zip_and_grade(zipcode, grade): #prints out restaurants in specified zip code and with specified grade 
    for doc in collection.find( { '$and': [ {"address.zipcode": zipcode}, {"grades.grade": grade} ] } ):
        pprint.pprint(doc)
        print('\n')


def by_score_threshold(score): #prints out restaurants with score under threshold
    for doc in collection.find( {"grades.score": {'$lt': score} } ):
        pprint.pprint(doc)
        print('\n')

def by_cuisine_and_street(cuisine, street): #something clever: prints out restaurants on specified street with specified cuisine
    for doc in collection.find( { '$and': [ {"cuisine": cuisine}, {"address.street": street} ] } ):
        pprint.pprint(doc)
        print('\n')
        
#Testing
#by_borough("Brooklyn")
#by_zip("10000")
#by_zip_and_grade("10000", "C")
#by_score_threshold(0)
#by_cuisine_and_street("Pizza", "18 Avenue")
