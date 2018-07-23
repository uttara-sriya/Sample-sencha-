Ext.define('sampleForm.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'sampleForm.model.Personnel',

    data: {
        items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", id: 1 },
            { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222", id: 2 },
            { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", id: 3 },
            { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444", id: 4 }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});