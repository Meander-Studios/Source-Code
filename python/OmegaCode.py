def write(x):
    if type(x) is list:
        for i in range(len(x)):
            print x[i]
    else:
        print x
