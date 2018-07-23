Ext.define('sampleForm.store.Product', {
    extend: 'Ext.data.Store',

    alias: 'store.Product',
    storeId: 'product',
    autoLoad: true,
    autoSync: true,
    model: 'sampleForm.model.Product',

    // data: {
    //     items: [
    //         { name: 'Jean Luc', category: "jeanluc.picard@enterprise.com", price: "555-111-1111", quantity: 1 },
    //         { name: 'Worf', category: "worf.moghsson@enterprise.com", price: "555-222-2222", quantity: 2 },
    //         { name: 'Deanna', category: "deanna.troi@enterprise.com", price: "555-333-3333", quantity: 3 },
    //         { name: 'Data', category: "mr.data@enterprise.com", price: "555-444-4444", quantity: 4 }
    //     ]
    // }
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success',
        },
        writer: {
            type: 'json'
        }
    }

});