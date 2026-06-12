p = float(input("Enter present value: "))
r = float(input("Enter annual interest rate (%): "))
t = float(input("Enter number of years: "))

future_value = p * (1 + r / 100) ** t
print("Future Investment Value =", future_value)
