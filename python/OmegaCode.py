def write(x):
    if type(x) is list:
        for i in range(len(x)):
            print x[i]
    else:
        print x
def emailVerification(email):
    email = email.lower()
    if "@" in email:
        email = email.split('@')
        if "." in email[1]:
            website = email[1].split('.')
            if website[0]=='example':
                return False
            else:
                return True
        else:
            return False
    else:
        return False
