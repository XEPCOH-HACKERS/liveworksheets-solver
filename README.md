# ![LOGO](src/images/favicon-32x32.png) Liveworksheets Solver Extension

For English speakers [README_EN.md](./README_EN.md)

## Історія створення

Одного весняного ранку, я прокинувся, вмився, поснідав, почистив зуби та відкрив Classroom, де вже було призначене завдання, а саме "Розв'язати worksheet та приєднати результат на перевірку". І це мені зовсім зіпсувало настрій! По-перше, чому так складно? І по-друге, чому саме в такий чудовий день?!

Саме в цей ранок мені спала на думку ідея: *“А чому би не розробити якусь програму, що буде за мене вирішувати "worksheets"”?* (не придумав як назвати)

І ось моє творіння перед вами!

## Призначення

Liveworksheets Solver - це кросс-браузерне розширення, яке допоможе Вам вирішити будь-який "worksheet" (а як його ще назвати?)

## Функції

Може розв'язати майже всі типи завдань:

- Написати правильну відповідь & Говоріння
- Випадне поле для вибору
- Варіанти на вибір
- Поставити галочки
- *З'єднати олівцем*
- *Перемістити блоки*

> Щодо останніх двух. Там потрібні дії користувача, тобто розширення не буде їх вирішувати, а тільки вкаже куди треба малювати чи переміщувати.

## Встановлення

Для встановлення розширення необхідно виконати такі кроки:

1. Завантажте архів з розширенням з вкладки [Releases](https://github.com/XEPCOH-HACKERS/liveworksheets-solver/releases/latest).

2. Розархівуйте розширення в якусь папку.

3. Відкрийте браузер і введіть в адресному рядку:

    `chrome://extensions` для Chrome, Edge та Opera.

4. Увімкніть режим розробника, натиснувши на відповідну кнопку.

5. Натисніть кнопку "Завантажити розпаковане розширення" та оберіть папку, в яку Ви розархівували розширення.

6. Після цього розширення буде встановлено і з'явиться у списку встановлених розширень у браузері.

    > Оскільки щоб встановити розширення в Firefox треба його підписати та викласти в Add-on Developer Hub, я працюю над автоматизацією цього процесу. Як тільки закінчу, з'явиться підтримка Firefox

## Використання

Просто клікніть на розширення на панелі інструментів і воно зробить (майже) все за вас.

### АБО

Розширення додає дві кнопки в контекстне меню (ПКМ), а саме:

- Вирішити цей worksheet (досі не придумав)
- Перевірити розв'язання

Думаю, і так зрозуміло, що робить перша кнопка.

Друга кнопка (Перевірити розв'язання) перевіряє ваш worksheet без надсилання вчителю.

## Внесок

Та кому це потрібно? Та бери й використовуй!

А якщо серйозно, то бери, пиши шось корисне, створюй пул-реквест і я подивлюся.

Перед тим, як шось коммітить, запусти ці команди:

```bash
npm run lint
npm run format
```

## Ліцензія

[MIT](./LICENSE)
