/*
Функция должна собрать объект для каждого массива значений. Каждый из этих объектов должен быть записан в массив. Именно этот массив с объектами должна вернуть функция getData.
Каждому элементу из массива ключей подходит элемент с таким же индексом в массиве значений.
Есть один нюанс: значений может оказаться больше или меньше, чем ключей.
Если значений не хватает, то создавать пустой ключ не надо. А если значений больше, то их не нужно включать в объект — для них нет ключей.
*/

// Tests
// array of keys:
// keys = ["performer","album","song"]
// array of values:
// data = [["Robbie Williams","The Heavy Entertainment Show","Love My Life"],["Billie Eilish","When We All Fall Asleep, Where Do We Go?","Bag Guy","17","Los Angeles"],["Монеточка","Раскраски для взрослых","90","20","Екатеринбург"]]

const getData = (keys, data) => data.map(values => keys.reduce(
    (accumulator, key, i) => {
      values[i] ? accumulator[key] = values[i] : null;
      return accumulator;
    }, {}));