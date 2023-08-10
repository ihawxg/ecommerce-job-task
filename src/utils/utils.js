export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('BG',{
        style: 'currency',
        currency : 'BGN'
    }).format(number)
    return newNumber
}