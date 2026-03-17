class Vehicle:
    def __init__(self, brand, speed, fuel):
        self.brand = brand
        self.speed = speed
        self.fuel = fuel

    def move(self):
        return f"{self.brand} is moving at {self.speed} km/h."

    def refuel(self):
        return f"{self.brand} is refueling with {self.fuel}."

    def __str__(self):
        return f"Vehicle(brand={self.brand}, speed={self.speed}, fuel={self.fuel})"


class Car(Vehicle):
    def __init__(self, brand, speed, fuel, doors):
        super().__init__(brand, speed, fuel)
        self.doors = doors

    def move(self):
        return f"{self.brand} drives on the road at {self.speed} km/h."

    def honk(self):
        return f"{self.brand} goes: Beep beep!"

    def __str__(self):
        return f"Car(brand={self.brand}, speed={self.speed}, doors={self.doors})"


class Boat(Vehicle):
    def __init__(self, brand, speed, fuel, length):
        super().__init__(brand, speed, fuel)
        self.length = length

    def move(self):
        return f"{self.brand} sails on water at {self.speed} km/h."

    def anchor(self):
        return f"{self.brand} ({self.length}m long) has dropped anchor."

    def __str__(self):
        return f"Boat(brand={self.brand}, speed={self.speed}, length={self.length}m)"
