my_list = [1,2,3,4,5,6,7,8,9]

#####################################
new_list = []

for num in my_list:
    new_list.append(num + 1)
    
print("New List 1", new_list)
########################################
new_list2 = list(map(lambda num: num + 1, my_list))
print("New List 2", new_list2)
########################################
## [RESULT EXPRESS for ITEM in COLLECTION]
new_list3 = [num + 1 for num in my_list]
print("New_list3", new_list3)


###############################
filtered_list1 = []

for num in my_list:
    if num % 2 == 0:
        filtered_list1.append(num)
        
print("Filtered List 1", filtered_list1)
###############################
filtered_list2 = list(filter(lambda num: num % 2 == 0, my_list))
print("Filtered list 2", filtered_list2)
###############################
filtered_list3 = [num for num in my_list if num % 2 == 0]
print("Filtered List 3", filtered_list3)

###############################################
filtered_map_list= [num + 1 for num in my_list if num % 2 == 0]
print("filtered and maped", filtered_map_list)

###############################################
## {key:value for ITEM in COLLECTION if...}

my_dict = {f"key-{num}": num for num in my_list if num % 2 == 0}
print(my_dict)