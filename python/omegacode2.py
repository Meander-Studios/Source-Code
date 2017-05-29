# -*- coding: utf-8 -*-
"""
Created on Mon May 29 14:11:00 2017

@author: Coby Mulliken
"""

def encrypt(cipher, offset):
    for x in range(97, 97 + 26):
        cipher[chr(x)] = chr(((x + offset - 97) % 26) + 97)
    cipher[' '] = chr(32)
    return cipher

def dome(offset1, offset2, string):
    inpu = string.lower()
    cipher = {}
    output = ""
    
    print("Printing offset values...")
    
    for y in range(0,len(inpu)):
        """ Concatenates outpu and encrypted outpu """
        offset = offset2 * y + offset1 
        #print("run ", y, " offset is ", offset)
        cipher = encrypt(cipher, offset)
        output = output + cipher[inpu[y:y + 1]]
    
    return output
    
def composite(num):
    for n in range(2, num // 2 + 1):
        if num % n == 0:
            return True
    return False

def prime(num):
    for n in range(2, num // 2 + 1):
        if num % n == 0:
            return False
    return True