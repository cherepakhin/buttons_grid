# Цель

Освовить "резиновую"  сетку Bootstrap. Использованы bootstrap, react-bootstrap (см. package.json)

### Тестирование

````shell
yarn test
````

### Локальный запуск

````shell
yarn start
````

### Сборка для размещения на web сервере

````shell
yarn build-prod
````
см. package.json:

````shell
...
  "scripts": {
    ...
    "build-prod": "PUBLIC_URL=/buttons_grid/ react-scripts build",
...
}
````

__PUBLIC_URL=/buttons_grid/__ в package.json указывает по какому пути приложение будет доступно на web-сервере

Статические файлы из папки __public__ (index.html, css, logo, favicon) будут __скопированы__ в __build__.

Собранный проект будет в build/ :

````shell
yarn run v1.22.5
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:
/sorry/index.html
  55.71 KB         build/static/js/2.924064c7.chunk.js
  22.69 KB         build/static/css/2.7f1403ef.chunk.css
  1.57 KB (-21 B)  build/static/js/main.ba052924.chunk.js
  1.36 KB          build/static/js/3.8289d0eb.chunk.js
  1.13 KB          build/static/js/runtime~main.fb67d27a.js
  750 B (+58 B)    build/static/css/main.2a690229.chunk.css

````

Содержимое build/ скопировать на сервер v.perm.ru в папку /var/www/buttons_grid/

Доступ к приложению: https://v.perm.ru/buttons_grid/index.html

Этот проект сделан на основе простого проекта с React/Redux/Bootstrap [https://github.com/cherepakhin/redux-simple-app](https://github.com/cherepakhin/redux-simple-app). В нем же описание деталей работы с React/Redux и рабочие заметки (подглядывать в историю git).


### Заметки о css

Изменение правого отступа div элемента c id=list-group-item-actions-right (App.css):

````shell
.list-group-item-actions-last {
  right: 11px;
}
````

Tooltip:

Содержание подсказки (tooltip) определяется  в поле _title_:

````shell
<div id="idDeleteBtn" className="col-1 list-group-item-actions list-group-item-actions-last" title="Удалить вакансию">
````

Ошибка "digital envelope routines::unsupported"

Ответ:

[https://paolochang.github.io/posts/bugfix-digital_envelope_routines_unsupported/](https://paolochang.github.io/posts/bugfix-digital_envelope_routines_unsupported/)

If you encounter the “digital envelope routines::unsupported” error, you may be tempting to use the following easiest solutions:

Downgrade Node.js to pre v17 
OR
Use the legacy SSL provider:

````json
{
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start"
  }
}
````

Использован 2 вариант.

#### Установка ширины, отступов элементов в "колонках"

В Bootstrap сетка состоит из 12 "колонок". В примерах ниже элементам выделяется 1 колонка. В зависимости от размера окна ширина колонки меняется.   

````
<Button className="... col-1">...</Button>
````

Пример в App.js: 

````    
    <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
    {/* className="fixed-top" - row fixed on TOP PAGE  */}
    {/* "mt-0 md-1 ml-0" - margin top, margin bottom, margin left */}
    {/* "pd-1 pl-0" - padding down, padding left */}
      {/* xs={12} одна колонка во всю ширину экрана(12). */}
      {/* Отступ элементов внутри колонки сверху(mt-2) и снизу (mb-2) = 8px */}
      <Col xs={12} className="mt-2 mb-2">
        {/* col-md-1 col-sm-2 все кнопки имеют одинаковую ширину, но разных экранах выделено разное количство колонок: */}
        {/* col-md-1 width on middle device = 1 column,*/}
        {/* col-sm-2 width on small device = 2 columns*/}
        {/* mr-1 отступ справа внутри колонки margin right = 1 (1 char 'x') */}
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Все</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Текущие</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch" onClick={handleShowDialogEditVacancy}>Новая</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">Найти</Button>
        <Button className="mr-1 col-md-1 col-sm-2 w-12ch">{getTitle()}</Button>
      </Col>
    </Row>
````    
mr - margin right. "mr-1" - margin right = 4 pix  
ml - margin left
pl - padding left
pr - padding right
col-md-1 col-sm-2 w-12ch - все кнопки имеют одинаковую ширину w-12ch (12 character, 1 char = 'x') , но разных экранах выделено разное количество колонок:
col-md-1 width on middle device = 1 column
col-sm-2 width on small device = 2 columns

Без Bootstrap:

[https://stackoverflow.com/questions/1575141/how-to-make-a-div-100-height-of-the-browser-window](https://stackoverflow.com/questions/1575141/how-to-make-a-div-100-height-of-the-browser-window)

These units are vh (__VIEWPORT__ height), vw (__VIEWPORT__ width), vmin (__VIEWPORT__ minimum length) and vmax (viewport maximum length).

div {
  height: 100vh;
}

__Для задания ширины блока нужно указать width:__

.button-div {
  ...
  display: inline-block; 
  width: 12ch;
}

__inline-block__ - с этим свойством блоки будут отображаться в строку. 

__Для центрирования текста по горизонтали в div:__

.button-div {
  ...
  text-align: center;
  ...
}

__Задание высоты div:__

.button-div {
  ...
  height: 4vh; // viewport height
}

в css:

.button-div {
  ...
  height: 25px;
}

или в коде

<div style="height: 30px;">...

__Выравнивание по вертикали:__ 

.button-div {
  ....
  line-height: 30px;
}

или от шрифта:

.button-div {
  ....
  line-height: 4ch;
}

Задание размера шрифта:

.button-div {
  font-size: 2ch;
}


Единицы размера шрифта:

[https://learn.javascript.ru/css-units](https://learn.javascript.ru/css-units)

(Давно на свалке: mm, cm, pt, pc. Существуют также «производные» от пикселя единицы измерения: mm, cm, pt и pc, но они давно отправились на свалку истории.)
Единицы ex и ch, которые означают размер символа "x" и размер символа "0". Эти единицы используются чрезвычайно редко, так как «размер шрифта» em обычно вполне подходит.

em - относительно текущего заданного шрифта. 1em – текущий размер шрифта. "Размер шрифта обычно определяется в родителе, и может быть изменён ровно в одном месте, это бывает очень удобно".

<div style="font-size:1.5em">
  Страусы
  <div style="font-size:1.5em">Живут также в Африке</div>
</div>

"Страусы" в 1.5 раза больше текущего, "Живут также в Африке" в 1.5 раза больше "Страусы".

При установке свойства margin-left в %, процент берётся от __ширины родительского__ блока, а не от его margin-left.

Итого:
.button-div {
  background-color: #18186A;
  color: white;
  display: inline-block; // блоки с .button-div в строке, не в столбик 
  max-width: 10ch;       // ширина не меняется    
  min-width: 10ch;       // кнопки переносятся нв следующий ряд
//  min-width: 10ch;     // при разных max-width, min-width ширина меняется 
//  max-width: 12ch;     // при изменении размера окна   
  text-align: center;    // текст по центру
  line-height: 3ch;      // ВЫСОТА ( 3-2(font-size см.ниже) = 1 по половине размера шрифта сверху и снизу) 
  font-size: 2ch;        // размер шрифта
}

На телефоне выстраиваются в 1 столбец.

#### Общая структура
 
1. В index.html указан root <div id="root"/>
2. index.js крепится к document.getElementById('root')
3. В index.js определен App.js 
4. App.js импортирует App.css (import './App.css';)

App.js:

````java
....
import './App.css';
class App extends React.Component {
    render() {
      return (
        <div className="main-app-container">
          <div className="button-div mr-1 col-md-1 col-sm-1">Button1</div>
          ...
        </div>
      );
    }
}
....
````

App.css:

````java
....
.button-div {
  background-color: #18186A;
  color: white;
  display: inline-block;
  min-width: 10ch;
  max-width: 10ch;
  text-align: center;
  line-height: 4ch;
  font-size: 2ch;
  margin-bottom: 0.5ch;
}
....
````

#### Hover

В обычном состоянии скрыть (__display: none;__):

````json
.list-group-item-action span {
  display: none;
  color: #c00;
}

````

При наведении курсора (__.list-group-item:hover__):
 - показать (__display: inline;__);
 - изменить курсор (__cursor: pointer;__)
 - подчеркнуть (__text-decoration: underline;__)

````json
.main-app-container .list-group-item:hover .list-group-item-action span {
  display: inline;
  cursor: pointer;
}

.list-group-item-action span:hover {
  text-decoration: underline;
}

````

В мобилах курсора нет, поэтому показывать всегда.

#### Отступы

Подробнее об отступах в комментариях [src/components/MainToolbar.js](src/components/MainToolbar.js)

#### Шрифт

[https://learn.javascript.ru/css-units#otnositelno-shrifta-em](https://learn.javascript.ru/css-units#otnositelno-shrifta-em)

Относительно шрифта: em.
1em – __текущий размер шрифта__.
Можно брать любые пропорции от текущего шрифта: 2em, 0.5em и т.п.
Размеры в em – относительные, они определяются по текущему контексту.

#### var, let, const

var и let — это два способа объявить __переменную__ в JavaScript.

var используется, когда нужна переменная с функциональной областью видимости или __глобальная__ переменная. Также его можно использовать в устаревшем коде, где уже используется var. При определении var "утекает" из области видимости функции в глобальную область видимости.

let применяется, когда нужна переменная с блочной областью видимости, которую не нужно тянуть в другие части программы. Также он позволяет избежать неожиданного поведения, связанного с поднятием. Если вы используете var, эта переменная «утечёт» за пределы цикла и будет доступна во всей функции.
В современной разработке и новых проектах разработчики предпочитают let и const из-за их предсказуемости и надёжности.
Примеры:

````java
var myVar = 1;

function setMyVar() {
  myVar = 2;
}

setMyVar();

console.log(myVar); // --> 2
````

__любая функция, объявленная в той же области видимости, сможет обратиться к myVar__

````java
function setMyVar() {
  var myVar = 2;
}

setMyVar();

console.log(myVar); // undefined
````

````java
function varTest() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i); // 3, так как ключевое слово var действует на уровне функции.
}

varTest();
````

#### Ссылки

- [Диаграмма состояний](https://app.diagrams.net/?src=about#G1i8cVXJXj7xbnOIqtzitvihxvn_yiwOuJ#%7B%22pageId%22%3A%226vxvHjby1d88luMmcxHr%22%7D)<br/>
- [Ошибка /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found](https://v.perm.ru/main/index.php/75-oshibka-lib-x86-64-linux-gnu-libc-so-6-version-glibc-2-28-not-found)
- [Различия var, let, const и области видимости в javascript](https://v.perm.ru/main/index.php/homepage/79-razlichiya-var-let-const-v-js)

#### TODO

- В index.html
````java
    <!--TODO: later
    <link rel="stylesheet" media="screen and (max-width: 991.98px)" href="%PUBLIC_URL%/mobile.css">
    -->
    <link rel="stylesheet" media="screen and (min-width: 992px)" href="%PUBLIC_URL%/desktop.css">
````