from machine import Pin
from utime import sleep

pin0 = Pin(0, Pin.OUT)
pin1 = Pin(1, Pin.OUT)

pinout = 0
print("LED starts flashing...")
while True:
    try:
        if pinout == 0:
            pin0.on()
            pin1.off()
        else:
            pin0.off()
            pin1.on()
        sleep(1) # sleep 1sec
    except KeyboardInterrupt:
        break
    pinout = int(input("Choose a color, red or green: "))
pin0.off()
pin1.off()
print("Finished.")
