'''
Thomas Zhao
SoftDev2 pd8
K16 -- Do You Even List?
2019-04-11
'''

uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lowercase = 'abcdefghijklmnopqrstuvwxyz'
numbers = '1234567890'

def threshold(password):
    uppers = [1 if char in uppercase else 0 for char in password]
    lowers = [1 if char in lowercase else 0 for char in password]
    nums = [1 if char in numbers else 0 for char in password]

    print('Uppercase: ' + str(uppers))
    print('Lowercase: ' + str(lowers))
    print('Numbers: ' +  str(nums))
    
    if 1 in uppers and 1 in lowers and 1 in nums:
        print('Passed')
        return True

    print('Failed')
    return False



def strength(password): 
    uppers = [1 if char in uppercase else 0 for char in password]
    lowers = [1 if char in lowercase else 0 for char in password]
    nums = [1 if char in numbers else 0 for char in password]   
    specials = [1 if char not in uppercase and char not in lowercase and char not in numbers else 0 for char in password]

    print('Uppercase: ' + str(uppers))
    print('Lowercase: ' + str(lowers))
    print('Numbers: ' +  str(nums))
    print('Specials: ' + str(specials))


    strength_counter = 0
    if len(password) >= 2:
        strength_counter = strength_counter + 1
    if len(password) >= 4:
        strength_counter = strength_counter + 1
    if len(password) >= 6:
        strength_counter = strength_counter + 1
    if len(password) >= 8:
        strength_counter = strength_counter + 1
    if len(password) >= 10:
        strength_counter = strength_counter + 1

    if 1 in uppers and 1 in lowers:
        strength_counter = strength_counter + 1
    if 1 in lowers and 1 in nums:
        strength_counter = strength_counter + 1
    if 1 in nums and 1 in uppers:
        strength_counter = strength_counter + 1
    if 1 in specials:
        strength_counter = strength_counter + 2
        
    print(strength_counter)

strength('12Jack@@asdsad')
