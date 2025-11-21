def get_weight():
    while True:
        unit = input("Enter weight unit (kg/lbs): ").lower().strip()
        if unit in ['kg', 'kilograms', 'kilo']:
            return float(input("Enter your weight in kg: "))
        elif unit in ['lbs', 'lb', 'pounds']:
            weight = float(input("Enter your weight in lbs: "))
            return weight * 0.453592
        else:
            print("Invalid unit. Please enter 'kg' or 'lbs'.")

def get_height():
    while True:
        unit = input("Enter height unit (m/cm/ft): ").lower().strip()
        if unit in ['m', 'meters', 'meter']:
            return float(input("Enter your height in meters: "))
        elif unit in ['cm', 'centimeters']:
            return float(input("Enter your height in cm: ")) / 100
        elif unit in ['ft', 'feet', 'foot']:
            print("Enter height in feet and inches (e.g., 5 10 for 5ft 10in):")
            try:
                line = input("Feet and Inches: ")
                parts = line.split()
                if len(parts) == 2:
                    feet = float(parts[0])
                    inches = float(parts[1])
                else:
                    feet = float(parts[0])
                    inches = 0
                return (feet * 0.3048) + (inches * 0.0254)
            except ValueError:
                print("Invalid format. Please enter numbers.")
        else:
            print("Invalid unit. Please enter 'm', 'cm', or 'ft'.")

def calculate_bmi():
    try:
        weight = get_weight()
        height = get_height()
        
        bmi = weight / (height ** 2)
        print(f"\nYour BMI is: {bmi:.2f}")
        
        if bmi < 18.5:
            print("You are underweight")
        elif bmi >= 18.5 and bmi < 25:
            print("You are normal")
        elif bmi >= 25 and bmi < 30:
            print("You are overweight")
        elif bmi > 50:
            print("Above average overweight")
        else:
            print("You are obese")
            
    except ValueError:
        print("Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    calculate_bmi()
