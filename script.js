let list = ['Футболка', 'Шорты', 'Штаны', 'Кепка', 'Носки', 'Кофта'];

const inp1 = document.getElementById('inp1');
const out = document.getElementById('out');
const btn1 = document.getElementById('btn1')
const inp2 = document.getElementById('inp2');
const btn2 = document.getElementById('btn2')

out.innerHTML = '';
    list.forEach(element => {
        if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
            const li = document.createElement('li');
            li.innerText = element;
            out.appendChild(li);
        }
})

btn1.addEventListener('click', ()=> {
    
    out.innerHTML = '';
    list.forEach(element => {
        if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
            const li = document.createElement('li');
            li.innerText = element;
            out.appendChild(li);
        }
        
    })
})

btn2.addEventListener('click', () => {
    list.push(inp2.value);
    inp2.value = '';
    out.innerHTML = '';
    list.forEach(element => {
        if (element.toLowerCase().includes(inp1.value.toLowerCase())) {
            const li = document.createElement('li');
            li.innerText = element;
            out.appendChild(li);
        }
        
    })
})