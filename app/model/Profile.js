Ext.define('sampleForm.model.Profile', {
    extend: 'sampleForm.model.Base',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'contact', type: 'number' }
    ],
    proxy: {
        type: 'rest',
        url: '/emp',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});