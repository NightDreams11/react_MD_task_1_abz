export const errorMessage = (stringLength) => {
    const newString = stringLength.trim();
    console.log(newString)
    const regex = /([a-zA-Z-\s])+([^\s-]$)/
    if (regex.test(stringLength)) {
        return false;
    } else {
        return 'Your name needs to be between 2 and 128 characters long'
    }
}

export const emailIsValid = (email) => {
    const regex = /^([a-zA-Z0-9\.]+[^@\s!#$%&'*+\/=?^_`{|}~\-\.])[@][a-zA-Z]+[\.]{1}[a-zA-Z]+([\.]{1}|[a-zA-Z])+([a-zA-Z]$)/
    if (regex.test(email)) {
        return false;
    } else {
        return "Please insert a valid email address";
    }
}

export const emailIsValidRFC = (email) => {
    const regex = /^([a-zA-Z0-9@!#$%^&*()_\-+={}~|\[\]\\'"\/\s])([a-zA-Z0-9@!#$%^&*()_\-+={}~|\[\]\\'"\s\/]+)@([a-z])+(\.)(([a-z]{1,6})([^\s]$)|([a-z]+)(\.)([a-z]{1,6})([^\s\.]$))/
    if (regex.test(email)) {
        return false;
    } else {
        return "Please insert a valid email address";
    }
}

export const IDIsValid = (ID) => {
    const regex = /^[a-z0-9_]+[^@\s!#$%&'*+\/=?^`{|}~\-\.]/
    if (regex.test(ID)) {
        return false;
    } else {
        return 'Use only latin lowercase letters, numbers and "_"';
    }
}

export const PhoneIsValid = (phone) => {
    const str = phone.replace(/[\(\)\s]/g,"");

    const regex = /(^[\+]{0,1}380([0-9]{9})$)/
    if (regex.test(str)) {
        return false;
    } else {
        return 'Please enter your phone in the format +38 (xxx) xxx-xx-xx'
    }
}

export const PinIsValid = (pin) => {
    const regex = /^(\d{8})/
    if (regex.test(pin)) {
        return false;
    } else {
        return 'Please enter your pin code in the format xxxx-xxxxx. Use only numbers'
    }
}