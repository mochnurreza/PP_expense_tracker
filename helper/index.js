function date(input) {
    const date = input.toLocaleString('id-ID', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return date
}

module.exports = date