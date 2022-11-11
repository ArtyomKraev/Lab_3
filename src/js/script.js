let exists = false;

function createTable()
{
    if (!exists)
    {
        const table = document.createElement("table")
        table.setAttribute("id", "table_element")

        document.getElementById('container').appendChild(table);
        exists = true

        document.getElementById('add').disabled = false;
        document.getElementById('delete').disabled = false;
        document.getElementById('number').disabled = false;
    }
    else
    {
        alert('Таблица уже создана')
    }
}

function addRowCounter()
{
    const counterInput = document.getElementById('counter');
    const counterNew = parseInt (counterInput.value) + 1;
    counterInput.value = counterNew;
    return counterInput.value;
}

function addRow()
{
    const table = document.getElementById('table_element');
    const rowsNumber = addRowCounter();
    console.log(rowsNumber);
    const row = table.insertRow();

    row.setAttribute("id", "num-" + rowsNumber);

    const tdNumber = row.insertCell();
    tdNumber.textContent = rowsNumber;
    tdNumber.setAttribute("class", "numberCell");

    const tdVlaue = row.insertCell();
    tdVlaue.textContent = 'value ' + Math.floor(Math.random() * 99);
}

function autoRepeat()
{
    const cells = document.querySelectorAll('.numberCell');
    let i = 1;
    cells.forEach(item => 
        {
            item.textContent = i;
            i++;
        }
    )
}

function deleteRow()
{
    const input = document.getElementById('number').value;
    let hiddenInput = document.getElementById('counter');
    const table = document.getElementById('table_element');

    if(parseInt(input) <= parseInt(hiddenInput.value))
    {
        table.deleteRow(input - 1);
        hiddenInput.value -= 1;
        autoRepeat();
    }
    else
    {
        alert('Такой строки нет!');
    }
}