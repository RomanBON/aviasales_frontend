export default function currencyFormat(_number: number) {
    const decimal = 0;
    const separator = ' ';
    const decpoint = '.';
    const multiplier = 10;
    const arr0 = 0;
    const arr1 = 1;

    let r = parseFloat(String(_number));
    const exp10 = Math.pow(multiplier, decimal);
    r = Math.round(r * exp10) / exp10;

    const rr = Number(r).toFixed(decimal).toString().split('.');
    const b = rr[arr0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, '$1' + separator);

    return (rr[arr1] ? b + decpoint + rr[arr1] : b);
}
