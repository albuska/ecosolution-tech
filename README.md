# Тестове завдання Frontend
Реалізувати лендінг Ecosolution відповідно до технічного завдання. 

## Технології 
React

### Матеріали
[Макет](https://www.figma.com/file/pTbhAbEXjsofeQHmtIE2tK/Ecosolution?type=design&node-id=145%3A1533&mode=dev)

### Технічне завдання
1. Header 
-Фіксований. Містить логотип, бургер-меню, Get in touch (окрім мобільної версії).
-При скроллі хедер змінює колір (див. ui-kit).
-При натисканні на Get in touch відбувається плавний скролл до секції Contact Us.
2.	Burger-menu
-Містить кнопку закриття, навігаційне меню, соцмережі.
-Кожен пункт меню має бути клікабельним та при кліку на нього відбуватися плавний скролл до відповідного розділу на сторінці.
-Висота бургер-меню - на весь екран, відступ від країв екрану знизу аналогічний відступу зверху як зображено на макеті. 
-На планшеті бургер-меню виглядає аналогічно десктопній версії.
3.	Main
-При натисканні на Learn more відбувається плавний скролл до секції Cases. 
4.	About (Values)
-При верстці списку цінностей скористайтеся алгоритмом CSS Grid.
-На мобілці фото не показуємо, тільки цінності.
5.	Electricity
-Щоб отримати додаткові бали, замість статичних цифр зробіть автоматичний лічильник, +1 за секунду. Це завдання не є обов’язковим.
6.	Cases
-Безкінечний слайдер.
-Змінити слайд можна натисканням на відповідні кнопки, або перетягуванням.
-При кліку на кнопку переклікується один слайд.
7.	FAQ
-По дефолту перша відповідь відкрита.
-Одночасно може бути відкрита тільки одна відповідь.
-При натисканні на Contact Us відбувається плавний скролл до секції Contact Us.
8.	Contact Us
-Форма повинна валідуватися.
-Поля форми Full name, E-mail, Phone обов’язкові, поле Message необов’язкове.
9.	Footer
-Містить стрілочку, при натисканні на яку відбувається плавний скролл до секції Main.
10.	Стрілочка на іконці на кнопці BgcFillBtn 
11.	Хрестик бургер-меню ховер
Критерії прийому


-Верстка фіксована в рх.
-Верстка семантична та валідна, бонусом буде доступність (а11y).
-Верстка адаптивна та кросбраузерна - мобілка від 360px до 480px (резинова верстка, повинна тягнутися), планшет - 768px, десктоп - 1280px.
-Використати підхід Mobile first.
-Код повинен бути чистим, із збереженням форматування. Рекомендується використання ESLint/Prettier.
-Код розбитий на окремі компоненти.

