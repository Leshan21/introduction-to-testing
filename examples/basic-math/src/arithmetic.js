export const add = (a,b) => {
    if( typeof a === 'string') a = Number(a); // parse string to number
    if( typeof b === 'string') b = Number(b); // parse string to number

    if(isNaN(a)) throw new Error('A first argument is not a number');
    if(isNaN(b)) throw new Error('A second argument is not a number');
    
    return a + b;
};

export const subtract = (a,b) => {
    return a - b;
};

export const multiply = (a,b) => {
    return a * b;
};

export const divide = (a,b) => {
    return a / b;
};
