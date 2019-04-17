# Thomas Zhao
# SoftDev2 pd8
# K#18: Getting Clever with List Comprehensions
# 2019-04-15

import math

def pythtriple(n):
    list = [(x, y, int(math.sqrt(x*x + y*y))) for x in range(1, n) for y in range(x, n) if (math.sqrt(x*x + y*y)).is_integer()]
    return list

def quicksort(le_list):
    if len(le_list) == 0:
        return []
    else:
        pivot = le_list[0]
        less_than = [x for x in le_list[1:] if x < pivot]
        greater_than = [x for x in le_list[1:] if x > pivot]
        return quicksort(less_than) + [pivot] + quicksort(greater_than)
