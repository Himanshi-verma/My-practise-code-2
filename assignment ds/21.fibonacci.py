n = int(input("Enter number of terms: "))
a, b = 0, 1
print("Fibonacci Series:")
for i in range(n+1):
    print(a, end=" ")
    a, b = b, a + b
    13