from models import Vehicle, Car, Boat

# Создаём объекты
vehicle = Vehicle("Generic", 60, "petrol")
car = Car("Toyota", 120, "petrol", 4)
boat = Boat("Yamaha", 80, "diesel", 12)

vehicles = [vehicle, car, boat]

print("=== __str__ ===")
for v in vehicles:
    print(v)

print("\n=== move() — полиморфизм ===")
for v in vehicles:
    print(v.move())

print("\n=== refuel() ===")
for v in vehicles:
    print(v.refuel())

print("\n=== Уникальные методы ===")
print(car.honk())
print(boat.anchor())
