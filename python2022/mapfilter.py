## A List
my_list = [
    {"first_name": "Alex", "last_name": "Merced", "age": 37},
    {"first_name": "Tony", "last_name": "Merced","age": 35}
    ]

## The Long

new_list = []

for person in my_list:
    new_list.append({
            "name": person["first_name"] + " " + person["last_name"], 
            "age": person["age"]
        })
    
print(new_list)

## Kinda Shorter

def rebuildItem(person):
    return {"name": person["first_name"] + " " + person["last_name"], 
            "age": person["age"]}
    
new_list = list(map(rebuildItem, my_list))

print(new_list)

## Shortest way

new_list = list(map(
    lambda person:{"name": person["first_name"] + " " + person["last_name"], 
            "age": person["age"]}
    , my_list))

print(new_list)

## lambda parameters:return lambda x,y:x+y

new_list = list(filter(lambda person:person["age"] > 35, my_list))

print(new_list)