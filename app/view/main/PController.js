// Ext.define('sampleForm.view.main.PController', {
//     extend: 'Ext.app.ViewController',
//     xtype: 'pchart',
//     onPreview: function() {
//         if (Ext.isIE8) {
//             Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
//             return;
//         }
//         var chart = this.lookupReference('chart');
//         chart.preview();
//     },
//     onDataRender: function(v) {
//         return v + '%';
//     },
//     onSeriesTooltipRender: function() {
//         tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
//     }
// });