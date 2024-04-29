for number in range(1, 101):
    if number % 15 == 0:
        print(f"{number} GOA15")
    elif number % 3 == 0:
        print(f"{number} GOA")
    elif number % 5 == 0:
        print(f"{number} GOA11")
    else:
        print(number)
