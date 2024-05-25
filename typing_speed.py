from time import *
import random as r

def mistake_check(paratest,usertest):
    error = 0
    for i in range(len(paratest)):
        try:
            if paratest[i] != usertest[i]:
                error= error+1
        except:
            error= error+1
    return error
def speed_time(time_start,time_end,userinput):
    time_delay= time_end - time_start
    time_round = round(time_delay,2)
    speed =len(userinput) / time_round
    return round(speed)
if __name__ == '__main__':
    while True:
        ckk = input("Ready to Test : yes/no ")
        if ckk == "yes":

                test =["Nestled between skyscrapers, a cozy café beckoned with the aroma of freshly brewed coffee, welcoming weary souls seeking solace.", 
                    "My Name is Muhammad Dawood","Hi","How are you?"] 

                test1= r.choice(test)
                print("---------------Typing spped----------------------")
                print(test1)
                print()
                print()
                time1 = time()
                testinput= input("Enter Here: ")
                time2 = time()

                print("speed :", speed_time(time1,time2,testinput),"seconds")
                print("Error : ", mistake_check(test1,testinput))
        elif ckk == "no":
            print("THANK YOU ")
            break
        else:
            print("Given input is wrong")

