# Object Oriented Programming (OOP)

## What is OOP?
OOP is a programming approach that organizes code around 
objects rather than functions and logic.

## 4 Pillars of OOP

### 1. Encapsulation
Wrapping data and methods together inside a class.
Hides internal details from outside.

**Example:**
class BankAccount:
    def __init__(self):
        self.__balance = 0  # private variable

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

### 2. Abstraction
Hiding complex implementation, showing only necessary details.
Like a TV remote — you press a button, you don't need to 
know what happens inside.

**Example:**
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Woof"

### 3. Inheritance
One class inherits properties and methods of another class.
Promotes code reusability.

**Example:**
class Animal:
    def eat(self):
        print("Eating...")

class Dog(Animal):   # Dog inherits Animal
    def bark(self):
        print("Woof!")

dog = Dog()
dog.eat()   # works even though eat() is in Animal
dog.bark()

Types of Inheritance:
- Single — one parent, one child
- Multiple — two parents, one child
- Multilevel — grandparent → parent → child
- Hierarchical — one parent, many children

### 4. Polymorphism
Same method name, different behavior depending on the object.

**Example:**
class Cat:
    def sound(self):
        return "Meow"

class Dog:
    def sound(self):
        return "Woof"

animals = [Cat(), Dog()]
for a in animals:
    print(a.sound())  # different output for each

## Other Important Concepts

### Class vs Object
| Class | Object |
|-------|--------|
| Blueprint | Actual instance |
| Defined once | Created multiple times |
| Example: Car (class) | Example: myCar = Car() |

### Constructor
Special method that runs automatically when object is created.

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s1 = Student("Kaushiki", 20)

### Method Overriding
Child class redefines a method from parent class.

class Animal:
    def sound(self):
        return "Some sound"

class Dog(Animal):
    def sound(self):        # overrides parent method
        return "Woof!"

### Method Overloading
Same method name but different parameters.
(Python handles this differently using default args)

def add(a, b=0, c=0):
    return a + b + c

## Here Quick Revision

| Concept | One Line |
|---------|----------|
| Encapsulation | Data hiding inside class |
| Abstraction | Show only what's needed |
| Inheritance | Child gets parent properties |
| Polymorphism | Same name, different behavior |
