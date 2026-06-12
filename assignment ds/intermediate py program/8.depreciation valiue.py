value = float(input("Enter initial value: "))
rate = float(input("Enter depreciation rate (%): "))
years = int(input("Enter number of years: "))

for i in range(years):
    value -= (rate / 100) * value

print("Depreciated Value =", value)
