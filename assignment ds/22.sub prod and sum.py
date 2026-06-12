n = int(input("Enter a number: "))
sum_digits = 0
prod_digits = 1

for digit in str(n):
    d = int(digit)
    sum_digits += d
    prod_digits *= d

result = prod_digits - sum_digits
print("Result =", result)
