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

// Використовуємо Pick та Generics для визначення, що обидва об'єкти містять підмножину полів AllType
function compare<T extends keyof AllType>(
    obj1: Pick<AllType, T>,
    obj2: Pick<AllType, T>
): AllType {
    return {
        name: obj1.name ?? "",
        position: obj2.position ?? 0,
        color: obj1.color ?? "",
        weight: obj2.weight ?? 0,
    };
}

export {};


