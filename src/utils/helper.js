export const toPath = (category) => {
    const words= category.split(" ").join("-")
    return words
}