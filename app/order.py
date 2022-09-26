import random
import json


def welcome():
    print('''
        *** WELCOME TO OUR LUNCH MENU ORDERINSG SYSTEM ***

        Please following the instructions on how to place the order
        1. Pick from the shown orders.
        2. Enter the order number.
        3. Enter quantity of the meal selected in 2.

        ====== MEALS MENU ======
    ''')

# Read dataset


def read2():
    file = open('items2.json')
    content = json.load(file)
    items = []
    main_menu = []

    pd = content['Result']
    for i in range(len(pd)):
        items.append(pd[i])
    for i in range(len(items)):
        main_menu.append(items[i]['menuname'])

    return main_menu


# Order meals - Order logic

# Generate Random meals
def generate_random_meals():
    items = read2()
    r_m = [
        random.sample(items, 4),
        random.sample(items, 4),
        random.sample(items, 4),
        random.sample(items, 4)
    ]
    return r_m


def select_meals():
    rand_orders = generate_random_meals()
    meal1 = rand_orders[0]
    meal2 = rand_orders[1]
    meal3 = rand_orders[2]
    meal4 = rand_orders[3]

    print(f"{'='*6} \n Meal1 \n {'='*6}")
    for j in meal1:
        print(j)
    print(f"\n{'='*6} \n Meal2 \n {'='*6}")
    for j in meal2:
        print(j)
    print(f"\n{'='*6} \n Meal3 \n {'='*6}")
    for j in meal3:
        print(j)
    print(f"\n{'='*6} \n Meal4 \n {'='*6}")
    for j in meal4:
        print(j)

    print('\nWhich meal do you want? Enter')
    print('(1) for meal1\n(2) for meal2\n(3) for meal3\n(4) for meal4')

    choice = 0
    while True:
        try:
            choice = int(input())
            if choice in [1, 2, 3, 4]:
                break
            print('Please enter 1, 2, 3 or 4')
        except Exception as e:
            print('Please enter a number')

    print('Please enter the quantity')
    quantity = 0
    selected_quantity = 0
    while True:
        try:
            quantity = int(input())
            if quantity in [*range(15)]:
                selected_quantity = quantity
                break
            print('Enter 1 - 15')
        except Exception as e:
            print('Please enter a number')

    selected_order = []
    if choice == 1:
        selected_order = meal1
    elif choice == 2:
        selected_order = meal2
    elif choice == 3:
        selected_order = meal3
    elif choice == 4:
        selected_order = meal4

    order_particulars = [selected_order, quantity, choice]
    print(f'You selected {selected_quantity} order(s) of meal{choice}\n')

    return order_particulars


order = []
while True:
    welcome()
    order.append(select_meals())
    cont = input("Do you want to continue? (Y or N):")
    while (cont.lower() not in ['y', 'n']):
        print("Please make a valid selection Y or N:\n")
        cont = input()

    if cont == 'n':
        # Order Receipt
        print(f"{'='*33}\nQuantity \t Your Meal order\n{'='*33}")
        for j in range(len(order)):
            print()
            print(f'Meal {order[j][2]}, Qty {order[j][1]}\n--------------')
            for k in order[j][0]:
                print(k)

        print(f"\n{'='*16}\nTotal Orders: {len(order)}\n{'='*16}")

        print('\nThank you for ordering with us.\n')
        break
