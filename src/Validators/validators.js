export const errorMessage = (stringLength) => {
    const regex = /^[a-zA-Z\s]+[a-zA-Z\s]$/

    if (regex.test(stringLength)) {
        return false;
    } else if (stringLength.match(/[0-9!@#$%^&*()_+{}[\].,:]/g)) {
        return 'Your name needs to be use only latin characters'
    } else {
        return 'Your name needs to be between 2 and 128 characters long'
    }
}

export const emailIsValid = (email) => {
    const regex = /^([a-zA-Z0-9]+((\.[a-zA-Z0-9])|[a-zA-Z0-9])*)@[a-zA-Z]+\.[a-z]+((\.([a-z]+)$|([a-z])+$))/
    if (regex.test(email)) {
        return false;
    } else {
        return "Please use numbers and latin characters. Format х@х.хх";
    }
}

export const emailIsValidRFC = (email) => {
    const regex = /^([a-zA-Z0-9@!#$%^&*()_\-+={}~|[\]\\'"\s])([a-zA-Z0-9@.!#$%^&*()_\-+={}~|[\]\\'"\s]{0,63})@([a-z])+(\.)(([a-z]{1,6})([^\s]$)|([a-z]+)(\.)([a-z]{1,6})([^\s.]$))/
    if (regex.test(email)) {
        return false;
    } else if (email.length === 0) {
        return undefined
    } else {
        return "Please insert email. Format х@х.хх";
    }
}

export const IDIsValid = (ID) => {
    const regex = /^[0-9a-z_]+([0-9a-z_]+)$/
    if (regex.test(ID)) {
        return false;
    } else if (ID.length === 0) {
        return undefined;
    } else {
        return 'Use only latin lowercase letters, numbers and "_". Min length 2 characters';
    }
}

export const PhoneIsValid = (phone) => {
    // Обрезаем телефон до 9-ти знаков с конца при вставке в поле + фильтруем от пробелов и скобок при наборе с клавиатуры
    const sliced = phone.replace(/[()\s]/g, "").slice(-9);
    if (sliced.length <= 9) {
        phone = '380' + sliced;
    }

    const regex = /(^[+]{0,1}380([0-9]{9})$)/
    if (regex.test(phone)) {
        return false;
    } else {
        return 'Please enter your phone in the format +38 (0xx) xxx-xx-xx'
    }
}

export const extraPhoneIsValid = (phone) => {
    const regex = /^([+0-9,;()\s]+)([0-9+,;()]+)$/
    // const regex = /^[+0-9]{7,13}(,\s|;\s|\s)*([+0-9]{7,13})*/ //Второй вариант рабочий
    if (regex.test(phone) && phone.length >= 7) {
        return false;
    } else if (phone.length === 0) {
        return undefined
    } else {
        return 'Your phone needs to be between 7 and 256 characters long. One number between 7-13 characters'
    }
}

export const PinIsValid = (pin) => {
    const regex = /^(\d{8})/
    if (regex.test(pin)) {
        return false;
    } else if (pin.length === 0) {
        return undefined
    } else {
        return 'Please enter your pin code in the format xxxx-xxxx. Use only numbers'
    }
}

export const secondPinIsValid = (pin) => {
    const regex = /^(\d{8})/
    if (regex.test(pin)) {
        return false;
    }
    if (pin.length === 0) {
        return undefined
    } else {
        return 'Please enter your pin code use only numbers'
    }
}