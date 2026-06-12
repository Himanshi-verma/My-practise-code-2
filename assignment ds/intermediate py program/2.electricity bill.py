units = float(input("Enter electricity units used: "))

if units <= 100:
    bill = units * 1.5
elif units <= 200:
    bill = 100 * 1.5 + (units - 100) * 2.5
elif units <= 300:
    bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 3.5
else:
    bill = 100 * 1.5 + 100 * 2.5 + 100 * 3.5 + (units - 300) * 5

print("Total Electricity Bill = ₹", bill)
