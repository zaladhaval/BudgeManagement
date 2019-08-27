   jQuery(document).ready(function () {
	   /*$("#alltime").prop("checked", true);
	   $("#alltype").prop("checked", true);
	   */
	   var table = $('#expence');

       /* Fixed header extension: http://datatables.net/extensions/keytable/ */

       var oTable = table.dataTable({
    	   "processing": true, // Feature control the processing indicator.
   		"serverSide": false, // Feature control DataTables' server-side
           // Internationalisation. For more info refer to http://datatables.net/manual/i18n
           "language": {
               "aria": {
                   "sortAscending": ": activate to sort column ascending",
                   "sortDescending": ": activate to sort column descending"
               },
               "emptyTable": "No data available in table",
               "info": "Showing _START_ to _END_ of _TOTAL_ entries",
               "infoEmpty": "No entries found",
               "infoFiltered": "(filtered1 from _MAX_ total entries)",
               "lengthMenu": "Show _MENU_ entries",
               "search": "Search:",
               "zeroRecords": "No matching records found"
           },
           "order": [
               [0, 'asc']
           ],
           "lengthMenu": [
               [5, 15, 20, -1],
               [5, 15, 20, "All"] // change per page values here
           ],
           "pageLength": 10, // set the initial value,
           "columnDefs": [{  // set default column settings
               'orderable': false,
               'targets': [0]
           }, {
               "searchable": false,
               "targets": [0]
           }],
           "order": [
               [1, "asc"]
           ],
           "ajax": {
   			"url": "expenses/getallexpence",
   			"type": "GET",
   			"dataSrc": ''
   		},
   		"columns": [
   			
			{
				data: "type"
			},
			{
				data: "amount"
			},
			{
				data: "date"
			},
			{
				data: "description"
			},
			{
				data: "id",
				mRender: function (data, type, row) {
					var str;
					
						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;" onclick="getinst(' + "'" + row.instToken + "'" + ')" class="fa fa-edit"></i>' +
							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deleteUser(' + "'" + row.instToken + "'" + ')" class="fa fa-trash"></i>';

					return str;

				}
			}
   		]
       });

       var oTableColReorder = new $.fn.dataTable.ColReorder( oTable );

       var tableWrapper = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
       tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
       
       
       var table1 = $('#income');

       /* Fixed header extension: http://datatables.net/extensions/keytable/ */

       var oTable1 = table1.dataTable({
    	   "processing": true, // Feature control the processing indicator.
   		"serverSide": false, // Feature control DataTables' server-side
           // Internationalisation. For more info refer to http://datatables.net/manual/i18n
           "language": {
               "aria": {
                   "sortAscending": ": activate to sort column ascending",
                   "sortDescending": ": activate to sort column descending"
               },
               "emptyTable": "No data available in table",
               "info": "Showing _START_ to _END_ of _TOTAL_ entries",
               "infoEmpty": "No entries found",
               "infoFiltered": "(filtered1 from _MAX_ total entries)",
               "lengthMenu": "Show _MENU_ entries",
               "search": "Search:",
               "zeroRecords": "No matching records found"
           },
           "order": [
               [0, 'asc']
           ],
           "lengthMenu": [
               [5, 15, 20, -1],
               [5, 15, 20, "All"] // change per page values here
           ],
           "pageLength": 10, // set the initial value,
           "columnDefs": [{  // set default column settings
               'orderable': false,
               'targets': [0]
           }, {
               "searchable": false,
               "targets": [0]
           }],
           "order": [
               [1, "asc"]
           ],
           "ajax": {
   			"url": "expenses/getallincome",
   			"type": "GET",
   			"dataSrc": ''
   		},"columns": [
   			
			{
				data: "type"
			},
			{
				data: "amount"
			},
			{
				data: "date"
			},
			{
				data: "description"
			},
			{
				data: "id",
				mRender: function (data, type, row) {
					var str;
					
						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;" onclick="getinst(' + "'" + row.instToken + "'" + ')" class="fa fa-edit"></i>' +
							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deleteUser(' + "'" + row.instToken + "'" + ')" class="fa fa-trash"></i>';

					return str;

				}
			}
   		]
       });

       var oTableColReorder1 = new $.fn.dataTable.ColReorder( oTable1 );

       var tableWrapper1 = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
       tableWrapper1.find('.dataTables_length select').select2(); // initialize select2 dropdown
   });
