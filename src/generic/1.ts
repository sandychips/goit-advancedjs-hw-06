/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

type PromiseType = (string | number)[]

function getPromise(): Promise<PromiseType> {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}

getPromise()
    .then((data: PromiseType): void => {
        console.log(data);
    });

export {};
