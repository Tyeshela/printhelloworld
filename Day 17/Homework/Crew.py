import random

crew = ['Gabriel Molodini', 'Dato Janezashvili', 'Nikoloz Filishvili', 'David Tkeshelashvili']

selected_kids = random.sample(crew, 3)

selected_kids_with_note = [kid + " studies well" for kid in selected_kids]

selected_kids_with_cool_note = [kid + " is cool" if kid.endswith('i') else kid for kid in crew]

print(selected_kids_with_note)

print(selected_kids_with_cool_note)