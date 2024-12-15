""" Challenge01
def prepare_gifts(gifts):
    unique_gifts = sorted(set(gifts))  
    return unique_gifts

gifts = [3, 1, 2, 3, 4, 2, 5]
print("prepareGifts =>", prepare_gifts(gifts))
"""

""" Challenge02
names = ['midu', 'madeval', 'educalvolpz']
def createFrame(names):
    max_length = max(len(name) for name in names)
    border = '*' * (max_length + 4)
    framed_names = [f"* {name.ljust(max_length)} *" for name in names]
    
    return '\n'.join([border] + framed_names + [border])

print(createFrame(names)) """
