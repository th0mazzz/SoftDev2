def memoize(fxn):
    past_nums = {}
    def memo_helper(num):
        if num in past_nums:
            return past_nums[num]
        the_num = fxn(num)
        past_nums[num] = the_num
        return the_num
    return memo_helper

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print(fib(10))
