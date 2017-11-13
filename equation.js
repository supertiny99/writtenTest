class Equation {
  /**
   * 生成多个一定数字以内的非负数加减运算等式，
   * 运算过程中不的数不能大于一定数字并且无负数
   * @param  {[type]} amount 生成的等式个数
   * @param  {[type]} range  不能超过的指定数字
   * @return {[type]}
   */
  constructor(amount, range) {
    this.amount = amount;
    this.range = range;

    this._init();
  }

  _init() {
    this.arrNum = [];
    this.arrOperator = [];
    this.arrAnswer = [];

    // [
    //   [1, 2, 3, 4],
    //   [2, 3, 4, 5],
    //   [3, 4, 5, 6],
    // ]
    //
    // [
    //   ['+', '+'],
    //   ['-', '-'],
    //   ['+', '-'],
    //   ['-', '+'],
    // ]
    //
    // [
    //   1,
    //   2,
    //   3,
    // ]

    let amount = this.amount,
      range = this.range,
      count = 0;

    while (count < amount) {
      var arrTempNum = [],
        arrTempOperator = [],
        num1 = Math.round(Math.random() * range),
        num2,
        num3,
        num4,
        randomIndex = Math.floor(Math.random() * 4);

      if (Math.random() < .5) {
        // 第一个符号为 +
        arrTempOperator.push('+');
        // 0 <= num2 <= range - num1
        num2 = Math.round(Math.random() * (range - num1));

        if (Math.random() < .5) {
          // 第二个符号为 +
          arrTempOperator.push('+');
          // 0 <= num3 <= range - num1 - num2
          num3 = Math.round(Math.random() * (range - num1 - num2));
          num4 = num1 + num2 + num3;

        } else {
          // 第二个符号为 -
          arrTempOperator.push('-');
          // 0 <= num3 <= num1 + num2
          num3 = Math.round(Math.random() * (num1 + num2));
          num4 = num1 + num2 - num3;

        }
      } else {
        // 第一个符号为 -
        arrTempOperator.push('-');
        // 0 <= num2 <= num1
        num2 = Math.round(Math.random() * num1);

        if (Math.random() < .5) {
          // 第二个符号为 +
          arrTempOperator.push('+');
          // 0 <= num3 <= range - num1 + num2
          num3 = Math.round(Math.random() * (range - num1 + num2));
          num4 = num1 - num2 + num3;

        } else {
          // 第二个符号为 -
          arrTempOperator.push('-');
          // 0 <= num3 <= num1 - num2
          num3 = Math.round(Math.random() * (num1 - num2));
          num4 = num1 - num2 - num3;

        }
      }

      arrTempNum = [num1, num2, num3, num4];

      this.arrAnswer.push(arrTempNum[randomIndex]);
      arrTempNum.splice(randomIndex, 1, '()');

      this.arrNum.push(arrTempNum);
      this.arrOperator.push(arrTempOperator);

      count++;
    }

  }

  print() {

    for (let i = 0; i < this.amount; i++) {
      var arrNum = this.arrNum,
        arrOperator = this.arrOperator,
        arrAnswer = this.arrAnswer,
        [n1, n2, n3, n4] = arrNum[i],
        [o1, o2] = arrOperator[i],
        answer = arrAnswer[i];
      console.log(`${n1} ${o1} ${n2} ${o2} ${n3} = ${n4}     ${answer}`,);

    }
  }
}

let exam1 = new Equation(10, 20);

exam1.print();
