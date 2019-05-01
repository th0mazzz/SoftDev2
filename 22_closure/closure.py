# Thomas Zhao
# SoftDev2 pd8
# K#22 -- Closure
# 2019-04-30

# Numero Uno
def repeat(string):
    def repeat_inner(times):
        return string * times
    return repeat_inner

r1 = repeat('hello')
print(r1(2))

r2 = repeat('goodbye')
print(r2(2))

print(repeat('cool')(3))



#Numero Dos
def make_counter():
    x = 0
    def count():
        nonlocal x
        x = x + 1
        return x
    return count

ctr1 = make_counter()
print(ctr1())
print(ctr1())

ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())

#Numero Tres
#Look at Numero Dos
#Not sure how to do accessor methods...
