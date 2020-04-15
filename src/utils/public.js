export function computedRandomData(len, Max) {
    let data = [];
    for (let i = 0; i < len; i++) {
        data.push(Math.floor(Math.random() * Max))
    }
    return data
}