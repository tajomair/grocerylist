var items = {
    items: [],
    displayItems: function () {
        if (this.items.length === 0) {
            console.log('Please add Items');
        } else {
            console.log('Items');
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].completed === true) {
                    console.log('(x)', this.items[i].itemDetail);
                } else {
                    console.log('()', this.items[i].itemDetail);
                }
            }
        }
    },
    addItems: function (itemName, itemUnit,itemCost) {
        this.items.push({
            name: itemName,
            unit: itemUnit,
            cost: itemCost
        });
        this.displayItems();
    },
};

var handlers = {
    addItems: function () {
        var name = document.getElementById('item-name');
        var unit = document.getElementById('item-unit');
        var cost = document.getElementById('item-cost');
        items.addItems(itemName.value, itemUnit.valueAsNumber, itemCost.valueAsNumber);
        itemName.value = '';
        itemUnit.value ='';
        itemCost.value ='';
        
    }
};