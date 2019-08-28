   jQuery(document).ready(function () {
	   var table = $('#sample_6');

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
      			"url": "document/getall",
      			"type": "GET",
      			"dataSrc": ''
      		},
      		"columns": [
       			
    			{
    				//data: "type"
    					data: "id",
        				mRender: function (data, type, row) {
        					var str;
        					
        						str = '<i style="radius= 50%; font-size:15px; " class="fa '+row.typeIcon+'"></i>&nbsp &nbsp'+row.type;

        					return str;

        				}
    			},
    			{
    				data: "name"
    			},
    			{
    				data: "size"
    			},
    			
    			{
    				data: "id",
    				mRender: function (data, type, row) {
    					var str;
    					
    						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;" onclick="editdoc(' + "'" + row.token + "'" + ')" class="fa fa-edit"></i>' +
    							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deletedoc(' + "'" + row.token + "'" + ')" class="fa fa-trash"></i>'+
    							'&nbsp &nbsp<a  href="document/download?name=' + "" + row.nameOfDocument + "" + '">' +"<i style='radius= 30%; font-size: 20px; color: black;' class='fa fa-download'></i></a>";

    					return str;

    				}
    			}
       		]
       });

       var oTableColReorder = new $.fn.dataTable.ColReorder( oTable );

       var tableWrapper = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
       tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
   });

   //	var form=new FormData();
   //form.append("token",token);
   function downloaddoc(name)
   {
   	var form=new FormData();
       form.append("name",name);
       console.log(form);
       $.ajax({
       	 type: 'POST',
   	        url: "document/download",
   	        dataType: "JSON",
   	        async: true,
   	        data: form,
   	        processData: false,
   	        cache: false,
   	        contentType: false,
   	        beforeSend: function () {},
   	       success: function (data)
   	       {
   	    	   success("Status updated successfully!!");
   	    	Metronic.unblockUI();
   	       },
   	       error: function ()
   	       {
   	    	   error("Problem occures during process");
   	    	Metronic.unblockUI();
   	       }
       });
   };