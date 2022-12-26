import random

## GAME STATE
game_state ={
    "gold": 0,
    "location": "arena"
}

location = {
    "arena": {
        "barracks": "arena",
        "training grounds": "arena"
    }
}

## Character
class Character:
    
    def __init__(self, name):
        self.name = name
        self.hp = random.randint(10,20)
        self.strength = random.randint(4,8)
        self.defense = random.randint(1,4)
        self.accuracy = random.randint(1,10)
        
    def attack(self, other):
        if(random.randint(1,10) <= self.accuracy):
            damage = self.strength - other.defense
            other.hp -= damage
            print(f"{self.name} hit {other.name} for {damage} damage, they have {other.hp} left")
        else:
            print(f"{self.name} fails to attack {other.name}")
            
        
        
        

## Functions
def win_conditions(self, other):
    if (self.hp < 1):
        print("You have died, you lose")
        return True
    if (other.hp < 1):
        print(f"{other.name} has died")
        return True
    return False

## Game Setup

player_name = input("What is your name?")
player = Character(player_name)
goblin = Character("Goblin")

## Game Loop

while(True):
    choice = input("Do you want to [f]ight, [d]efend, [q]uit ")
    
    if (choice == "f"):
        player.attack(goblin)
        goblin.attack(player)
        
    if (choice == "d"):
        player.defense += 2
        goblin.attack(player)
        player.defense -= 2
        
    if(choice == "q"):
        print("Game Over")
        break
    
    if (win_conditions(player, goblin)):
        break
    
    

