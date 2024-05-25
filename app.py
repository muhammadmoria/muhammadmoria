import os
from tkinter import *

def Restart():
    os.system("shutdown /r /t 1")
def Restart_time():
    os.system("shutdown /r /t  20")
def Log_Out():
    os.system("shutdown /r /t  1")
def ShutDown():
    os.system("shutdown /r /t  1")





st=Tk()
st.title("ShutDown App")
st.geometry("500x500")
st.config(bg="Blue")

r_button = Button(st,text="Restart",font=("Time New Roman",20,"bold"),relief=RAISED,cursor="plus",command=Restart)
r_button.place(x=150,y=60,height=50,width=200)

rt_button = Button(st,text="Restart_time",font=("Time New Roman",20,"bold"),relief=RAISED,cursor="plus",command=Restart_time)
rt_button.place(x=150,y=170,height=50,width=200)


lg_button = Button(st,text="Log_Out",font=("Time New Roman",20,"bold"),relief=RAISED,cursor="plus",command=Log_Out)
lg_button.place(x=150,y=270,height=50,width=200)


st_button = Button(st,text="ShutDown",font=("Time New Roman",20,"bold"),relief=RAISED,cursor="plus",command=ShutDown)
st_button.place(x=150,y=370,height=50,width=200)



st.mainloop()