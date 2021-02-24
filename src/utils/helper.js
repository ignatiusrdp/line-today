export const toPath = (category) => {
    const words= "/" + category.split(" ").join("-")
    return words
}

export const titleSlicer = (title) => {
    const words = title.split(" ").slice(0, 8).join(" ") + "..."
    return words
}