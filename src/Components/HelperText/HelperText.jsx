function HelperTexts({error, errorMessage, counter, isDirty, description}) {

    if ((isDirty || description) === false) {
        error = '';
    } else if (isDirty === true && description && error === false) {
        error = description;
    } else if ((isDirty === false)) {
        error = description;
    } else if ((isDirty === true) && (error === true)) {
        error = errorMessage;
    }

    const helperTexts = [
        {
            id: 1,
            value: error,
        },
        {
            id: 2,
            value: counter,
        }
    ];

    return helperTexts.map((text) => (
        <span key={text.id} data-id={text.id} style={{maxWidth: 250, color: text.id === 2 ? 'rgba(0, 0, 0, 0.6)' : ''}}
              className="helper-text">
      {text.value}
    </span>
    ));
}

export default HelperTexts;