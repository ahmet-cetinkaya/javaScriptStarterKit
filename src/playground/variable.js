export function variableExample() {
  //JS type safe değildir
  let dolarBugun = 9.3;
  let dolarDun = 9.2;
  dolarDun = '9.20';
  {
    let dolarDun = 9.1;
  }
  console.log(dolarDun);

  const euroDun = 11.2;
  //euroDun = 11
  console.log(euroDun);
}
