import statistics
N = int(input())  # Читаем количество элементов
X = list(map(int, input().split()))  # Читаем последовательность X

medians = []  # Список для хранения найденных медианных значений

for i in range(1, N+1):
    median = statistics.median(X[:i])  # Находим медиану среди первых i элементов
    medians.append(median)  # Добавляем медиану в список

sum_medians = sum(medians)  # Считаем сумму найденных медианных значений
print(sum_medians)