while(True):
    choice = input("""
               What do you want to do today?
               a) Calculate Tip
               b) Calculate Tax
               c) quit
               """)

    if(choice == "a"):
        bill = int(input("How much was the bill?: "))
        tip = bill * .2
        print(f"The Tip is {tip} for a total bill of {bill + tip}")
    elif (choice == "b"):
        tax = int(input("What is the tax amount"))
        bill = int(input("How much was the bill?: "))
        print(f"The tax would be {bill * (tax / 100)}")
    elif (choice == "c"):
        break
    else:
        print("you did not choose a, b or c")