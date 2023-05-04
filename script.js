const table = document.createElement('table');
let num = 1;
for (let i = 0; i <= 10; i++){
    const row = document.createElement('tr');
    for (let j = 1; j <= 10; j++){
        const col = document.createElement('td');
        col.textContent = num;
        row.appendChild(col);
        num++;
    }
    table.appendChild(row);
}
document.body.appendChild(table);
table.style.border = '1px solid black';
table.style.textAlign = 'center';
table.style.position = 'absolute';
table.style.top = '200px';
table.style.left = '40%';



