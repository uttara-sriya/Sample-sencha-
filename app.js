/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'sampleForm.Application',

    name: 'sampleForm',

    requires: [
        // This will automatically load all classes in the sampleForm namespace
        // so that application classes do not need to require each other.
        'sampleForm.*'
    ],

    // The name of the initial view to create.
    mainView: 'sampleForm.view.main.Main'
});
