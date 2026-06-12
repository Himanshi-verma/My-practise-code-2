import math
n = int(input("Enter n: "))
r = int(input("Enter r: "))
nCr = math.factorial(n) // (math.factorial(r) * math.factorial(n - r))
nPr = math.factorial(n) // math.factorial(n - r)
print("nCr =", nCr)
print("nPr =", nPr)
