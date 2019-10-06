export default function getWordWithRightEnding (quantity: number, cases: [string, string, string]) {
  quantity = Math.abs(quantity);

  let word = '';

  if (quantity.toString().indexOf('.') > -1) {
    word = cases[1];
  } else {
    word = (
      quantity % 10 === 1 && quantity % 100 !== 11
        ? cases[0]
        : quantity % 10 >= 2 && quantity % 10 <= 4 && (quantity % 100 < 10 || quantity % 100 >= 20)
        ? cases[1]
        : cases[2]
    );
  }

  return word;
}
