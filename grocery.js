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
    addItems: function (itemDetail) {
        this.items.push({
            itemDetail: itemDetail,
        });
        this.displayItems();
    },
};

var handlers = {
    addItems: function () {
        var addItemInput = document.getElementById('addItemInput');
        items.addItems(addItemInput.value);
        addItemInput.value = '';
        view.displayItems();
    }
};