function HelperTexts({error, counter}) {
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