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
                tpl: new Ext.XTemplate('<tpl for=".">', '<div class="x-boundlist-item">', '<input type="checkbox" />', '{state}', '</div>', '</tpl>'),
                minChars: 0,
                queryMode: 'local',
                typeAhead: true,
                listeners: {
                    select: function(combo, records) {
                        var node;
                        Ext.each(records, function(rec) {
                            node = combo.getPicker().getNode(rec);
                            Ext.get(node).down('input').dom.checked = true;
                        });
                        if (combo.getValue() == 'Alaska') {
                            var form = this.up('form').getForm();
                            form.getFields().each(function(item) {
                                item.allowBlank = true;
                                item.validateValue(item.getValue());
                            });

                            // var contactfield = this.up('form').getForm().findField("contact");
                            // contactfield.allowBlank = true;
                            // contactfield.validateValue(contactfield.getValue());
                        }
                    },
                    beforedeselect: function(combo, rec) {
                        var node = combo.getPicker().getNode(rec);
                        if (node != null && node != undefined) {
                            Ext.get(node).down('input').dom.checked = false;
                        }
                    }
                }
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
        handler: 'onCreate',
        // listeners: {
        //     'whencreated': function(one, two, three) {
        //         console.log(one);
        //         console.log(two);
        //         console.log(three);
        //     }
        // }
    }, {
        text: 'Reset',
        formBind: true,
        handler: function() {
            this.up('form').getForm().reset();
            // this.up('form').down('').allowBlank = true;
        }
    }],

});