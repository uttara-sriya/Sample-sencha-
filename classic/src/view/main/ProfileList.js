var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data: [
        { "abbr": "AL", "name": "Alabama" },
        { "abbr": "AK", "name": "Alaska" },
        { "abbr": "AZ", "name": "Arizona" }
    ]
});

Ext.define('sampleForm.view.main.ProfileList', {
    extend: 'Ext.form.Panel',
    xtype: 'profilelist',
    title: 'CRUD',
    controller: 'profile-list',
    reference: 'useredit',
    modal: true,
    scrollable: true,
    collapsible: true,
    requires: ['sampleForm.store.Personnel',
        'Ext.layout.container.Fit',
        'Ext.slider.Widget',
        'sampleForm.store.States'
    ],
    // url: 'save-form.js',
    frame: true,
    title: 'Profile',

    bodyPadding: 20,

    scrollable: true,
    bind: {
        title: 'Edit: {currentUser.firstName}'
    },
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    // layout: 'fit',
    // defaultFocus: 'textfield[name=email]',
    items: [{
        xtype: 'fieldset',
        scrollable: true,
        overflow: 'auto',
        title: 'User Info',
        layout: 'form',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        listeners: {
            'show': 'onShow'
        },
        items: [{
                allowBlank: false,
                fieldLabel: 'Email Id',
                name: 'email',
                emptyText: 'email id',
                inputType: 'email',
                bind: '{currentUser.email}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Name',
                name: 'name',
                emptyText: 'name',
                bind: '{currentUser.name}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Contact',
                name: 'contact',
                emptyText: 'contact',
                inputType: 'Number',
                bind: '{currentUser.contact}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Date of joining',
                name: 'DOJ',
                xtype: 'datefield',
                bind: '{currentUser.doj}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Address',
                name: 'address',
                emptyText: 'address',
                bind: '{currentUser.address}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Gender',
                xtype: 'fieldcontainer',
                defaultType: 'radiofield',
                bind: '{currentUser.gender}',
                layout: 'hbox',

                // flex: 1,
                items: [{
                    boxLabel: 'M',
                    name: 'gender',
                    inputValue: 'm'
                }, {
                    boxLabel: 'F',
                    name: 'gender',
                    inputValue: 'f'
                }]
            }, {
                xtype: 'combobox',
                reference: 'states',
                publishes: 'value',
                fieldLabel: 'Select State',
                displayField: 'state',
                anchor: '-15',
                store: {
                    type: 'states'
                },
                minChars: 0,
                queryMode: 'local',
                typeAhead: true
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Department',
                reference: 'department',
                defaultType: 'checkboxfield',
                bind: '{currentUser.department}',
                layout: 'hbox',
                // flex: 1,
                items: [{
                    boxLabel: 'Marketing',
                    name: 'country',
                    inputValue: '1'
                }, {
                    boxLabel: 'Sales',
                    name: 'country',
                    inputValue: '2',
                    checked: true
                }, {
                    boxLabel: 'Administration',
                    name: 'country',
                    inputValue: '3'
                }]
            },
            // {
            //     xtype: 'textareafield',
            //     grow: true,
            //     name: 'Bio',
            //     fieldLabel: 'Bio',
            //     bind: '{currentUser.bio}',
            //     anchor: '100%',
            //     // flex: 1
            // },
            // {
            //     xtype: 'textareafield',
            //     grow: true,
            //     name: 'Qualifications',
            //     fieldLabel: 'Qualifications',
            //     bind: '{currentUser.qualifications}',
            //     anchor: '100%',
            //     // flex: 1
            // }
        ]
    }],
    buttons: [{
        text: 'Create',
        itemId: 'btnCreate',
        disabled: true,
        formBind: true,

        listeners: {
            'whencreated': function(one, two, three) {
                console.log(one);
                console.log(two);
                console.log(three);
            }
        }
    }, {
        text: 'Reset',
        formBind: true,
        handler: function() {
            this.up('form').getForm().reset();
        }
    }],

});