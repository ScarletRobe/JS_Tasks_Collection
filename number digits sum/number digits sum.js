/* Функия, которая будет возвращать массив с подходящими датами.
Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.
Названия параметров могут быть любыми.
Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.
*/

const getYears = (firstYear, lastYear, requiredSum) => {
    const suitableYears = [];
    for (let year = firstYear; year <= lastYear; year++) {
        let numberSum = year.toString().split('').reduce((sum, number) => +sum + +number);
        if (numberSum === requiredSum) {
            suitableYears.push(year);
        }
    }
    return suitableYears;
}