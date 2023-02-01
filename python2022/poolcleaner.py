## Game State

game = {"tool": 0, "money": 0}

tools = [
    {"name": "Small Net", "profit": 10, "cost": 0},
    {"name": "Big Net", "profit": 100, "cost": 100},
]

## Game Option Function

def clean_pool():
    tool = tools[game["tool"]]
    print(f"You clean a pool with your {tool['name']} and make {tool['profit']}")
    game["money"] += tool["profit"]
    
def check_stats():
    tool = tools[game["tool"]]
    print(f"You currently have {game['money']} and are using a {tool['name']}")
    
def upgrade():
    if (game["tool"] >= len(tools) - 1):
        print("no more upgrades")
        return 0
    next_tool = tools[game["tool"]+1]
    if (next_tool == None):
        print("There is no more tools")
        return 0
    if (game["money"] < next_tool["cost"]):
        print("not enough to buy tool")
        return 0
    print("You are upgrading your tool")
    game["money"] -= next_tool["cost"]
    game["tool"] += 1
    
def win_check():
    if(game["tool"] == 1 and game["money"] >= 1000):
        print("You Win")
        return True
    return False

while (True):
    
    i = input("[1] Clean Pool [2] Check Stats [3] Upgrade [4] Quit")
    
    i = int(i)
    
    if (i == 1):
        clean_pool()
        
    if (i == 2):
        check_stats()
        
    if (i == 3):
        upgrade()
        
    if (i == 4):
        print("You quit the game")
        break
    
    if (win_check()):
        break