Ext.define('sampleForm.main.ProfileListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.profile-list',
    onShow: function() {
        this.lookupReference('department').setVisible(false);
    },
    whencreated: function(one, two, three) {
        console.log(one);
        console.log(two);
        console.log(three);
    },
    onCreate: function(frm) {
        const user = this.getViewModel().get('currentUser');
        // user.save({
        //     success: () => console.log('success!'),
        //     failure: (record, op) => console.log('failure')
        // success: () => this.getStore('users').reload(),
        // failure: (record, op) => {
        // 	const validations = op.getResponse().result.validations;
        // 	if (validations) {
        // 		const form = this.lookup('useredit');
        // 		validations.forEach((validation) => {
        // 			const field = form.getFields(validation.field);
        // 			field.markInvalid(validation.message);
        // 		});
        // 	}
        // }
        // });
        var form = frm.up('form').getForm();
        console.log(form);
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                    Ext.MessageBox.alert("Success");
                },
                failure: function(form, action) {
                    Ext.MessageBox.alert("Failure");
                }
            });
        }
    }
});