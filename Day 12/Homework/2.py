# First names
first_names = ["Alex", "Sofo", "David"]
# Common last name for simplicity in this example
common_last_name = "Katsarava"

# Initialize the list for full names
full_names = []

# Append full names to the list
for name in first_names:
    full_name = name + " " + common_last_name
    full_names.append(full_name)

print("Full names:", full_names)
