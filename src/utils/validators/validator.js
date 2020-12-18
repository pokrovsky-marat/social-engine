export const requiredField = value => {
    if (value) return undefined;
    return "Field is required"
}
export const maxLength20 = (length) => {
    return (value) => {
        if (value.length > length) {
            return `Max length must be less than ${length}`
        }
        return undefined;
    }
}