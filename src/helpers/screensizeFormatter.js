function screensizeFormatter(tv) {

    const sizes = tv.availableSizes.map((sizeInInches) => {
        const sizeInCm = Math.round(sizeInInches * 2.54);
        return `${sizeInInches} inch (${sizeInCm} cm)`;
    });

    // join met " | " als er meerdere zijn
    return sizes.join(" | ");
}

export default screensizeFormatter;


/*bij het schrijven van deze helperfunctie heb ik hulp gehad van chat GPT*/