
t = 0
with open("test.txt", mode="r") as file:
    for line in file:
        game_id, subsets = line.split(": ")
        subset = subsets.strip().split("; ")
        print(subset)
        print("=="*50)
        
        valid_game = True
        for set in subset:
            for ball in set.split(", "):
                initial = {"red": 0, "green": 0, "blue":0}
                count, color = ball.split()
                initial[color] = int(count)
                if initial["red"] > 12 or initial["green"] > 13 or initial["blue"] > 14:
                    valid_game = False
        if valid_game:
            t += int(game_id.split()[1])
    print(t)


