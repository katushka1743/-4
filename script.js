let list = ['Футболка', 'Шорты', 'Штаны', 'Кепка', 'Носки', 'Кофта'];

const inp1 = document.getElementById('inp1'); // Поле ввода для поиска
const out = document.getElementById('out');   // Элемент для вывода результатов
const btn1 = document.getElementById('btn1'); // Кнопка для поиска
const inp2 = document.getElementById('inp2'); // Поле ввода для добавления нового элемента
const btn2 = document.getElementById('btn2'); // Кнопка для добавления нового элемента

// Очистка вывода и отображение элементов, соответствующих введенному запросу
out.innerHTML = '';
list.forEach(element => {
    if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
        const li = document.createElement('li'); // Создание нового элемента списка
        li.innerText = element; // Установка текста элемента
        out.appendChild(li); // Добавление элемента в вывод
    }
});

// Обработчик события для кнопки поиска
btn1.addEventListener('click', () => {
    out.innerHTML = ''; // Очистка вывода
    list.forEach(element => {
        if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
            const li = document.createElement('li'); // Создание нового элемента списка
            li.innerText = element; // Установка текста элемента
            out.appendChild(li); // Добавление элемента в вывод
        }
    });
});

// Обработчик события для кнопки добавления нового элемента
btn2.addEventListener('click', () => {
    if (inp2.value.trim() !== '') { // Проверка, что поле не пустое
        list.push(inp2.value); // Добавление нового элемента в массив
        inp2.value = ''; // Очистка поля ввода
    } else {
        error1 = document.getElementById('error1'); // Получение элемента для отображения ошибки
        error1.innerText = 'Необходимо что-то ввести!'; // Установка текста ошибки
    }
    out.innerHTML = ''; // Очистка вывода
    list.forEach(element => {
        if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
            const li = document.createElement('li'); // Создание нового элемента списка
            li.innerText = element; // Установка текста элемента
            out.appendChild(li); // Добавление элемента в вывод
        }
    });
});