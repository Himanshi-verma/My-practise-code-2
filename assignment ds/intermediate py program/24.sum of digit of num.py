n = int(input("Enter a number: "))
sum_digits = 0
while n > 0:
    sum_digits += n % 10
    n //= 10
print("Sum of Digits =", sum_digits)
