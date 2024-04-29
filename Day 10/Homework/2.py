user_age = int(input("Enter your age: "))  # In practice, you would get this from user input
father_age = int(input("Enter your father's age: "))  # Ditto

if father_age == 2 * user_age:
    print("Bingo")
else:
    print("Mouse")
