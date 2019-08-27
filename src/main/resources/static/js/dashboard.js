   jQuery(document).ready(function () {
	   
	   counterdata();
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
               [2, "desc"]
           ],
           "ajax": {
   			"url": "expense/getallexpence",
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
               [2, 'desc']
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
               [2, "desc"]
           ],
           "ajax": {
   			"url": "expense/getallincome",
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

function counterdata() {
	$.ajax({
		type: 'GET',
		url: "dashboard/counterdetails",
		dataType: "JSON",
		async: true,
		processData: false,
		cache: false,
		contentType: "application/json",
		beforeSend : function() {
			Metronic.blockUI({
				boxed: true
			});
		},
		success : function(data) {
			if (data.status) {
				Metronic.unblockUI();
				
				$("#totalinc").html(data.response['totalinc']+'&nbsp;<small class="font-green-sharp"><i class="fa fa-inr" style="font-size: 24px;"></i></small>');
				$("#totalexp").html(data.response['totalexp']+'&nbsp;<small class="font-red-sharp"><i class="fa fa-inr" style="font-size: 24px; color : #f36a5a;"></i></small>');
				$("#remain").html(data.response['remain']+'&nbsp;<small class="font-red-sharp"><i class="fa fa-inr" style="font-size: 24px; color : #5C9BD1;"></i></small>');
			} else if (!data.status) {
				error(data.message);
				Metronic.unblockUI();
			} else {
				error(data.message);
				Metronic.unblockUI();
			}

		},
		error : function() {
			error("Problem occures during process");
			Metronic.unblockUI();
		}
	});	
}