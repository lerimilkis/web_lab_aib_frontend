def count_symbols(filename):
    symbols = {}
    with open('input.txt', 'r') as f:
        for line in f:
            for char in line:
                if char != ' ' and char != '\n':
                    symbols[char] = symbols.get(char, 0) + 1
    return symbols

def sort_symbols(symbols):
    sorted_symbols = {}
    for char in sorted(symbols.keys()):
        sorted_symbols[char] = symbols[char]
    return sorted_symbols

def print_histogram(symbols):
    max_count = max(symbols.values())
    for char, count in symbols.items():
        print('#' * count + ' ' + char)

symbols = count_symbols('input.txt')
sorted_symbols = sort_symbols(symbols)
print_histogram(sorted_symbols)