import { iIO } from './interfaces'
import { CurrentCurrency } from './enums'

export function toYen ({input}:iIO){
    return input * CurrentCurrency.YEN
}

export function toDollar ({input}:iIO){
    return input * CurrentCurrency.DOLLAR
}

export function toEuro ({input}:iIO){
    return input * CurrentCurrency.EURO
}

export function toPound ({input}:iIO){
    return input * CurrentCurrency.POUNDS
}