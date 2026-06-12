days_in_august = 31
even_days = 0
for day in range(1, days_in_august + 1):
    if day % 2 == 0:
        even_days += 1
print("Kunal can go out on", even_days, "days in August.")
