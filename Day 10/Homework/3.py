age = int(input("Enter your age: "))  # Replace with user input
gender = input("Enter your gender (man/woman): ")  # Replace with user input

if gender == "man" and age > 65:
    print("Pension belongs to you")
elif gender == "woman" and age > 60:
    print("You belong to pension")
else:
    print("Not eligible for pension yet")
