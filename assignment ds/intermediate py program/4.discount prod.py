price = float(input("Enter product price: "))
discount = float(input("Enter discount percentage: "))
discount_amount = (discount / 100) * price
final_price = price - discount_amount
print("Discount Amount =", discount_amount)
print("Final Price =", final_price)
