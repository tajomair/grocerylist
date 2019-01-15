var items = {
    items: [],
    // displayItems: function () {
    //     if (this.items.length === 0) {
    //         console.log('Please add Items');
    //     } else {
    //         console.log('Items');
    //         for (var i = 0; i < this.items.length; i++) {
    //             if (this.items[i].completed === true) {
    //                 console.log('(x)', this.items[i].itemDetail);
    //             } else {
    //                 console.log('()', this.items[i].itemDetail);
    //             }
    //         }
    //     }
    // },
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
        total.forEach(element => {

        });
    }
};

var handlers = {
    addItems: function () {
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
        row.cells[4].appendChild(but);
        items.addItems(name.value, unit.valueAsNumber, cost.valueAsNumber, unit.valueAsNumber * cost.valueAsNumber);
        name.value = '';
        unit.value = '';
        cost.value = '';

    }

};
