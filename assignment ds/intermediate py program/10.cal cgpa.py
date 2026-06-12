n = int(input("Enter number of subjects: "))
total_credits = 0
total_points = 0

for i in range(n):
    credit = float(input(f"Enter credits for subject {i+1}: "))
    grade_point = float(input(f"Enter grade point for subject {i+1}: "))
    total_credits += credit
    total_points += credit * grade_point

cgpa = total_points / total_credits
print("CGPA =", cgpa)
