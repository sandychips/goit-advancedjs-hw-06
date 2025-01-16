/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

// Використовуємо Generics, щоб забезпечити однаковий тип для обох аргументів
function compare<T extends Partial<AllType>>(obj1: T, obj2: T): AllType {
    return {
        name: obj1.name ?? "",
        position: obj2.position ?? 0,
        color: obj1.color ?? "",
        weight: obj2.weight ?? 0,
    };
}

export {};

