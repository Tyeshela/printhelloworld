first_name = "Alex"
last_name = "Katsarava"

vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

first_name_vowel_count = 0
last_name_vowel_count = 0

for char in first_name:
    if char in vowels:
        first_name_vowel_count += 1

for char in last_name:
    if char in vowels:
        last_name_vowel_count += 1

vowel_counts = [first_name_vowel_count, last_name_vowel_count]
print("Vowel counts in first and last name:", vowel_counts)