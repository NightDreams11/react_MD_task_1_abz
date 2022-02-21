function HelperTexts({ error, errorMessage, counter, isDirty, description}) {

    if ((isDirty || description) === false) {
        error = '';
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
        <span key={text.id} data-id={text.id} className="helper-text">
      {text.value}
    </span>
    ));
}

export default HelperTexts;