export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return <div>Filed is required</div>
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLenght) {
        return <div className={styles.text}>{`Max length is ${maxLenght} symbols`}</div>
    } else {
        return undefined;
    }
}

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLenght) {
        return <div className={styles.text}>{`Min length is ${minLenght} symbols`}</div>
    } else {
        return undefined;
    }
}

export const emailValidationCreator = (email) => {
    const RFC2822 = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

    if (email) {
        if (RFC2822.test(email)) {
            return undefined;
        } else {
            return <div className={styles.text}>Enter valid email</div>
        }
    } else {
        return undefined;
    }
}

export const phoneValidationCreator = (phoneNumber) => {
    const pattern = /(^[\+]{0,1}380([0-9]{9})$)/
    if (phoneNumber) {
        if (phoneNumber.match(pattern)) {
            return undefined;
        } else {
            return <div className={styles.text}>+380</div>
        }
    } else {
        return undefined;
    }
}