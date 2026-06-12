sum_neg = 0
sum_even = 0
sum_odd = 0

while True:
    num = int(input("Enter a number (0 to stop): "))
    if num == 0:
        break
    if num < 0:
        sum_neg += num
    elif num % 2 == 0:
        sum_even += num
    else:
        sum_odd += num

print("Sum of Negative Numbers:", sum_neg)
print("Sum of Positive Even Numbers:", sum_even)
print("Sum of Positive Odd Numbers:", sum_odd)
