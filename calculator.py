# create abasic calculator with add, subtract, multiply, divide functions
def add(a, b):
    """Return the sum of a and b."""
    return a + b
def subtract(a, b):
    """Return the difference of a and b."""
    return a - b
def multiply(a, b):
    """Return the product of a and b."""
    return a * b
def divide(a, b):
    """Return the quotient of a and b."""
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b
def calculator():
    """A simple calculator function."""
    print("Welcome to the simple calculator!")
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    while True:
        choice = input("Enter choice (1/2/3/4): ")
        if choice in ('1', '2', '3', '4'):
            try:
                num1 = float(input("Enter first number: "))
                num2 = float(input("Enter second number: "))
            except ValueError:
                print("Invalid input. Please enter numeric values.")
                continue

            if choice == '1':
                print(f"{num1} + {num2} = {add(num1, num2)}")
            elif choice == '2':
                print(f"{num1} - {num2} = {subtract(num1, num2)}")
            elif choice == '3':
                print(f"{num1} * {num2} = {multiply(num1, num2)}")
            elif choice == '4':
                try:
                    print(f"{num1} / {num2} = {divide(num1, num2)}")
                except ValueError as e:
                    print(e)
        else:
            print("Invalid choice. Please select a valid operation.")

        next_calculation = input("Do you want to perform another calculation? (yes/no): ")
        if next_calculation.lower() != 'yes':
            break
    print("Thank you for using the calculator!")
if __name__ == "__main__":
    calculator()
# This code defines a simple calculator that can perform addition, subtraction, multiplication, and division.
# It prompts the user to select an operation and input two numbers, then displays the result.
# The calculator handles invalid inputs and division by zero gracefully.
# The calculator continues to prompt for operations until the user decides to exit.
# The code is structured to be run as a standalone script, with the main calculator function being called when the script is executed
# directly.
# The code is structured to be run as a standalone script, with the main calculator function being called when the script is executed directly.
