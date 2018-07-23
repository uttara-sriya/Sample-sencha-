// Ext.define('sampleForm.model.Employee', {
//     extend: 'Ext.data.Model',
//     idProperty: 'EmpId',
//     schema: {
//         namespace: 'sampleForm.model'
//     },

//     fields: [
//         { name: 'Id', type: 'int', defaultValue: 0 },
//         { name: 'firstName', type: 'string' },
//         { name: 'middleName', type: 'string' },
//         { name: 'lastName', type: 'string' },
//         { name: 'email', type: 'string' },
//         { name: 'address1', type: 'string' },
//         { name: 'address2', type: 'string' },
//         { name: 'city', type: 'string' },
//         { name: 'state', type: 'string' }
//     ],

//     validations: [{
//         type: 'presence',
//         field: 'firstName'
//     }]
// });