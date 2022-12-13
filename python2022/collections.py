## List (Array)
groceryList = ["eggs", "cheese", "cereal"]
# print(groceryList)
# print(groceryList[0])
# a,b,c = groceryList

#Tuple (can't change it)
groceryList = ("eggs", "cereal")
# print(groceryList)
# print(groceryList[0])

#Set (can't change and can't have dupes)
groceryList = {"eggs", "cereal", "milk", "milk"}
print(groceryList)

endresult = list(set([1,2,3,3,3]))
print(endresult)

## Dictionary (Key/Value pairs)
item1 = {"name": "milk", "price":  37}
print(item1["name"])

groceryList = [
    {"name": "milk", "price":  3.7},
    {"name": "cheese", "price":  2},
    {"name": "cereal", "price":  3},
]

for item in groceryList:
    print(item["name"])
    
a_dict = {"name": "milk", "price":  3.7}

print(a_dict.items())

for k,v in a_dict.items():
    print(k,v)