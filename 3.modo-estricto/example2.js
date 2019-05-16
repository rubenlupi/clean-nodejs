const strict = () => {
    'use strict';
    const getText = () => {
        const text = 'Soy una función'
        const text2 = 'estricta'
        return `${text} ${text2}`
    }
    return {
        getText: getText()
    }
}
const noStrict = () => {
    const getText = () => {
        const text = 'Soy una función no'
        text2 = 'estricta'
        return `${text} ${text2}`
    }
    return {
        getText: getText()
    }
}

console.log(strict().getText)
console.log(noStrict().getText)