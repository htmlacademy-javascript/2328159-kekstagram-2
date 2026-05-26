/*  Список констант и массивы данных*/
const PHOTO_ID_MAX = 25;
const PHOTO_ID_MIN = 1;
const URL_MIN = 1;
const URL_MAX = 25;
const LIKES_MAX = 200;
const LIKES_MIN = 15;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 1000;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MESSAGE_AMOUNT_MIN = 1;
const MESSAGE_AMOUNT_MAX = 2;


const URL = [];
for(let i = URL_MIN; i < URL_MAX; i++) {
  const RESULT = `photos/${i}.jpg`;
  URL.push(RESULT);
}

const DESCRIPTION = [
  'Отдыхайте так, чтобы вы забывали брать телефон в руки',
  'Я не знаю, куда иду, но я уже в пути' ,
  'Говорят «делай, что любишь, и деньги сами придут к тебе». Только что заказала доставку. Жду',
  'Какая разница, что обо мне думают люди, если для комаров я привлекательна в любом виде?',
  'Команда мечты' ,
  'Вечеринка продолжается.' ,
  'Вместе мы создаем историю.',
  'Маскируюсь под местных. Как думаете, получилось?' ,
  'Море ,солнце, я -идеально',
  'Некоторые дни начинаются лучше остальных',
  'Чтобы достичь новых берегов, мы должны плыть, а не дрейфовать',
  'Времено в режиме off-line',
  'Ловим моменты, пока они маленькие.',
  'Детство проходит, но воспоминания остаются навсегда',
  'Мой любимый хаос.',
  'Маленькие следы, большие мечты.',
  'Семейное фото: попытка номер 253.',
  'Семья: единственное место, где сумасшествие приветствуется.',
  'Мы не просто семья, мы — команда выживания.',
  'Я не всегда фотогеничен, но когда да — это случайность.',
  'Жизнь слишком коротка, чтобы быть серьезным.',
  'Я не ленивый, просто нахожусь в энергосберегающем режиме.',
  'Мое лицо, когда понимаю, что завтра понедельник.',
  'Когда пытаешься выглядеть круто, но ты — это ты.',
  'Я не опаздываю, я прибываю эффектно.',
  'Мое лицо, когда кто-то говорит «Давай сфоткаемся!».'
];

const LIKES = [];
for(let i = LIKES_MIN; i < LIKES_MAX; i++){
  LIKES.push(i);
}

const COMMENT_ID = [];
for(let i = COMMENT_ID_MIN; i <= COMMENT_ID_MAX; i++) {
  COMMENT_ID.push(i);
}

const AVATAR = [];
for(let i = AVATAR_MIN; i <= AVATAR_MAX; i++) {
  const TOTAL = `img/avatar-${i}.svg`;
  AVATAR.push (TOTAL);
}

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Викория',
  'Николай',
  'Энрике',
  'Моника',
  'Карина',
  'Олег',
  'Хуан-Мануэль',
  'Дранко',
  'Анастасия',
  'Рик',
  'Саймон',
  'Павел',
  'Ольга',
  'Джек',
  'Василиса',
  'Дмитрий',
  'Грэгори',
  'Надежда',
  'Брэд',
  'Игнат',
  'Дарья',
  'Джон',
  'Люк',
  'Степан',
  'Татьяна',
  'Борис'
];

/* Готовые функции, используемые в работе*/

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIntegerFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      // return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const commentIdGenerator = createRandomIntegerFromRangeGenerator(1, 10000);

/* Функция для генерации данных комментария*/
const createComment = () => {
  const messagesAmount = getRandomInteger(MESSAGE_AMOUNT_MIN, MESSAGE_AMOUNT_MAX);
  const messageIndexGenerator = createRandomIntegerFromRangeGenerator(0, MESSAGE.length - 1);
  let resultMessage = '';
  for(let i = 0; i < messagesAmount; i++) {
    resultMessage += `${MESSAGE[messageIndexGenerator()]} `;
  }
  resultMessage = resultMessage.slice(0, -1);

  return{
    id : commentIdGenerator(),
    avatar : getRandomArrayElement(AVATAR),
    message: resultMessage,
    name: getRandomArrayElement(NAME),
  };

};

/*Функции необходимые для создания массива из 25 сгенерированных объектов(описаний фотографий).*/

const photoIdGenerator = createRandomIntegerFromRangeGenerator(PHOTO_ID_MIN, PHOTO_ID_MAX);

const photoUrlGenerator = createRandomIntegerFromRangeGenerator(URL_MIN, URL_MAX);


const createFotoDescribing = () => {
  const COMMENTS_AMOUNT = getRandomInteger(0, 30);
  const COMMENTS = Array.from({length : COMMENTS_AMOUNT}, createComment);
  return {
    id : photoIdGenerator(),
    url : `photos/${photoUrlGenerator()}.jpg`,
    description :getRandomArrayElement(DESCRIPTION),
    likes : getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments:  COMMENTS,
  };
};

const photosDescriptions = Array.from({length : 25}, createFotoDescribing);
console.log(photosDescriptions);


