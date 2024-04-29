crew = ['Gabriel Molodini', 'Dato Janezashvili', 'Nikoloz Filishvili', 'David Tkeshelashvili']
SuperList = []

for name in crew:
    if name.lower().count('i') > 2:
        SuperList.append(name[0].upper() + name[1:])

print(SuperList)

EnlargedList = [name.upper() for name in crew if len(name) < 16]
print(EnlargedList)