// lazyload config
var MODULE_CONFIG = {
    chat:           [
                      'resources/libs/list.js/dist/list.js',
                      'resources/libs/notie/dist/notie.min.js',
                      'resources/plugins/notie.js',
                      'resources/app/chat.js'
                    ],
    mail:           [
                      'resources/libs/list.js/dist/list.js',
                      'resources/libs/notie/dist/notie.min.js',
                      'resources/plugins/notie.js',
                      'resources/app/mail.js'
                    ],
    user:           [
                      'resources/libs/list.js/dist/list.js',
                      'resources/libs/notie/dist/notie.min.js',
                      'resources/plugins/notie.js',
                      'resources/app/user.js'
                    ],
    screenfull:     [
                      'resources/libs/screenfull/dist/screenfull.js',
                      'resources/plugins/screenfull.js'
                    ],
    jscroll:        [
                      'resources/libs/jscroll/jquery.jscroll.min.js'
                    ],
    stick_in_parent:[
                      'resources/libs/sticky-kit/jquery.sticky-kit.min.js'
                    ],
    scrollreveal:   [
                      'resources/libs/scrollreveal/dist/scrollreveal.min.js',
                      'resources/plugins/jquery.scrollreveal.js'
                    ],
    owlCarousel:    [
                      'resources/libs/owl.carousel/dist/assets/owl.carousel.min.css',
                      'resources/libs/owl.carousel/dist/assets/owl.theme.css',
                      'resources/libs/owl.carousel/dist/owl.carousel.min.js'
                    ],
    html5sortable:  [
                      'resources/libs/html5sortable/dist/html.sortable.min.js',
                      'resources/plugins/jquery.html5sortable.js',
                      'resources/plugins/sortable.js'
                    ],
    easyPieChart:   [
                      'resources/libs/easy-pie-chart/dist/jquery.easypiechart.min.js' 
                    ],
    peity:          [
                      'resources/libs/peity/jquery.peity.js',
                      'resources/plugins/jquery.peity.tooltip.js',
                    ],
    chart:          [
                      'resources/libs/moment/min/moment-with-locales.min.js',
                      'resources/libs/chart.js/dist/Chart.min.js',
                      'resources/plugins/jquery.chart.js',
                      'resources/plugins/chartjs.js'
                    ],
    dataTable:      [
                      'resources/libs/datatables/media/js/jquery.dataTables.min.js',
                      'resources/libs/datatables.net-bs4/js/dataTables.bootstrap4.js',
                      'resources/libs/datatables.net-bs4/css/dataTables.bootstrap4.css',
                      'resources/plugins/datatable.js'
                    ],
    bootstrapTable: [
                      'resources/libs/bootstrap-table/dist/bootstrap-table.min.css',
                      'resources/libs/bootstrap-table/dist/bootstrap-table.min.js',
                      'resources/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',
                      'resources/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js',
                      'resources/plugins/tableExport.min.js',
                      'resources/plugins/bootstrap-table.js'
                    ],
    bootstrapWizard:[
                      'resources/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                    ],
    dropzone:       [
                      'resources/libs/dropzone/dist/min/dropzone.min.js',
                      'resources/libs/dropzone/dist/min/dropzone.min.css'
                    ],
    datetimepicker: [
                      'resources/libs/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css',
                      'resources/libs/moment/min/moment-with-locales.min.js',
                      'resources/libs/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js',
                      'resources/plugins/datetimepicker.js'
                    ],
    datepicker:     [
                      "resources/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
                      "resources/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
                    ],
    fullCalendar:   [
                      'resources/libs/moment/min/moment-with-locales.min.js',
                      'resources/libs/fullcalendar/dist/fullcalendar.min.js',
                      'resources/libs/fullcalendar/dist/fullcalendar.min.css',
                      'resources/plugins/fullcalendar.js'
                    ],
    parsley:        [
                      'resources/libs/parsleyjs/dist/parsley.min.js'
                    ],
    select2:        [
                      'resources/libs/select2/dist/css/select2.min.css',
                      'resources/libs/select2/dist/js/select2.min.js',
                      'resources/plugins/select2.js'
                    ],
    summernote:     [
                      'resources/libs/summernote/dist/summernote.css',
                      'resources/libs/summernote/dist/summernote-bs4.css',
                      'resources/libs/summernote/dist/summernote.min.js',
                      'resources/libs/summernote/dist/summernote-bs4.min.js'
                    ],
    vectorMap:      [
                      'resources/libs/jqvmap/dist/jqvmap.min.css',
                      'resources/libs/jqvmap/dist/jquery.vmap.js',
                      'resources/libs/jqvmap/dist/maps/jquery.vmap.world.js',
                      'resources/libs/jqvmap/dist/maps/jquery.vmap.usa.js',
                      'resources/libs/jqvmap/dist/maps/jquery.vmap.france.js',
                      'resources/plugins/jqvmap.js'
                    ],
    waves:          [
                      'resources/libs/node-waves/dist/waves.min.css',
                      'resources/libs/node-waves/dist/waves.min.js',
                      'resources/plugins/waves.js'
                    ]
  };

var MODULE_OPTION_CONFIG = {
  parsley: {
    errorClass: 'is-invalid',
    successClass: 'is-valid',
    errorsWrapper: '<ul class="list-unstyled text-sm mt-1 text-muted"></ul>'
  }
}
