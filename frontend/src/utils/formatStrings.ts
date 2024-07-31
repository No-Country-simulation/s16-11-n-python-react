export const fillLeftZeros = (number: number) => number.toString().padStart(2, '0');

export const max250Chars = (text:string) => text ? `${text.substring(0,250)}...` : ''