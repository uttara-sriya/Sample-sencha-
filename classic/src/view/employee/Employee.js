// Ext.define('sampleForm.view.employee.Employee', {
//     extend: 'Ext.form.Panel',
//     xtype: 'EmployeeForm',
//     controller: 'employee',
//     title: 'Employee profile',
//     initComponent: function() {

//         Ext.apply(this, {
//             //set jsonsubmit to true for CUD operation using form.Submit()
//             jsonSubmit: true,
//             url: '/api/student',
//             resizable: false,
//             collapsible: false,
//             bodyPadding: '5',
//             buttonAlign: 'center',
//             border: false,
//             trackResetOnLoad: true,
//             layout: {
//                 type: 'vbox'
//             },
//             fieldDefaults: {
//                 xtype: 'textfield',
//                 msgTarget: 'side',
//                 labelAlign: 'top',
//                 labelStyle: 'font-weight:bold'
//             },
//             defaultType: 'textfield',
//             items: [{
//                     xtype: 'fieldcontainer',
//                     layout: 'hbox',
//                     defaultType: 'textfield',
//                     width: '100%',
//                     fieldDefaults: {
//                         labelAlign: 'top',
//                         labelStyle: 'font-weight:bold'
//                     },
//                     items: [{
//                             fieldLabel: 'Id',
//                             name: 'Id',
//                             readOnly: true,
//                             width: 55
//                         },
//                         {
//                             fieldLabel: 'First Name',
//                             flex: 1,
//                             name: 'firstName',
//                             margin: '0 0 0 5',
//                             allowBlank: false
//                         },
//                         {
//                             name: 'middleName',
//                             width: 150,
//                             margin: '0 0 0 5',
//                             fieldLabel: 'Middle Name:'
//                         },
//                         {
//                             fieldLabel: 'Last Name',
//                             flex: 1,
//                             margin: '0 0 0 5',
//                             name: 'lastName'
//                         }
//                     ]
//                 },
//                 {
//                     xtype: 'datefield',
//                     fieldLabel: 'Date of Birth',
//                     name: 'birthDate'
//                 },
//                 {
//                     xtype: 'textfield',
//                     fieldLabel: 'Address',
//                     width: '100%',
//                     name: 'address1'
//                 },
//                 {
//                     xtype: 'textfield',
//                     hideLabel: true,
//                     name: 'address2',
//                     width: '100%',
//                     fieldLabel: 'address2'

//                 },
//                 {
//                     xtype: 'textfield',
//                     fieldLabel: 'City',
//                     width: '100%',
//                     name: 'city'
//                 },
//                 {
//                     xtype: 'textfield',
//                     fieldLabel: 'state',
//                     width: '100%',
//                     name: 'state'
//                 }
//             ],
//             buttons: [{
//                     text: 'Create',
//                     itemId: 'btnCreate',
//                     formBind: true,
//                     handler: 'onCreateClick'
//                 },
//                 {
//                     text: 'Read',
//                     itemId: 'btnLoad',
//                     handler: 'onReadClick'
//                 },

//                 {
//                     text: 'Update',
//                     itemId: 'btnUpdate',
//                     formBind: true,
//                     handler: 'onUpdateClick'
//                 },
//                 {
//                     text: 'Delete',
//                     itemId: 'btnDelete',
//                     formBind: true,
//                     handler: 'onDeleteClick'
//                 },
//                 {
//                     text: 'Reset',
//                     itemId: 'btnReset',
//                     handler: 'onResetClick'
//                 },
//                 {
//                     text: 'Clear',
//                     itemId: 'btnClear',
//                     handler: 'onClearClick'
//                 }
//             ]
//         });

//         this.callParent(arguments);

//     },
//     clearForm: function() {
//         this.getForm().getFields().each(function(field) {
//             field.validateOnChange = false;
//             field.setValue('');
//             field.resetOriginalValue();
//         });
//     }
// });