largest = None
while True:
    num = int(input("Enter a number (0 to stop): "))
    if num == 0:
        break
    if largest is None or num > largest:
        largest = num
print("Largest number =", largest)
