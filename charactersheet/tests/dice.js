export function D20(min = 1,max = 20){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }