var items = {
    items: [],

    addItems: function (itemName, itemUnit, itemCost, total) {
        this.items.push({
            name: itemName,
            unit: itemUnit,
            cost: itemCost,
            total: total
        });
        // this.items();
    },
    totalBill: function () {
        var t = 0;
        this.items.forEach(function (item) {
            t = t + item.total;
        }
        );
        console.log(t);
        return t;
    }
};

var handlers = {

    addItems: function () {
        var self = this;
        var name = document.getElementById('item-name');
        var unit = document.getElementById('item-unit');
        var cost = document.getElementById('item-cost');
        var table = document.getElementById("mainTable");
        var row = table.insertRow(1);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = name.value;
        cell2.innerHTML = unit.valueAsNumber;
        cell3.innerHTML = cost.valueAsNumber;
        cell4.innerHTML = unit.valueAsNumber * cost.valueAsNumber;
        var but = document.createElement('button');
        but.innerHTML = 'x';
       but.onclick = function () {
            self.toDelete(this);
        };
        row.cells[4].appendChild(but);
        //but = document.getElementById('mainTable').deleteRow(4);
        items.addItems(name.value, unit.valueAsNumber, cost.valueAsNumber, unit.valueAsNumber * cost.valueAsNumber);
        name.value = '';
        unit.value = '';
        cost.value = '';
        document.getElementById('totalAmount').innerHTML = items.totalBill();
    },
    toDelete: function (rowId) {
        console.log(rowId,rowId.rowIndex);
        var i = rowId.parentNode.parentNode.rowIndex;
        console.log(i);
        document.getElementById("mainTable").deleteRow(i);
    }
};
