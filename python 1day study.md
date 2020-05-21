# python 1day study



```
import random

for i in range(-1,3):
    print(i)

for i in range(0,3): #계산기 만들어보기
    x = int(input())
    y = int(input())
    operator = input()
    if(operator == "+"):
        print(x+y)
    elif (operator == "-"):
        print(x-y)
    elif (operator == "*"):
        print(x*y)
    elif (operator == "/"):
        print(x/y)
    else:
        print("잘못된 입력이야")


number = random.sample(range(1, 46), 6) #random의 모듈의 sample 함수는 중복 제외기능이 있음
                                        #1~46 범위내에서 6가지의 숫자를 뽑아내라.


print(number)


number.sort() #sort는 배열을 오름차순으로 정렬해줌
print(number)


color = [1, 2, 3, 4, 5]
print(color)
print(color[0])
```