var d='';
jQuery(document).ready(function () {
	   loadrange();
	   counterdata();
	   d=$('#dashboard-action li label .active').val();
	   loadtables();
   });

function updatedashboard(id){
		
	 $('#dashboard-action li label input').removeClass('active');	
	 $('#'+id).addClass('active');
	 d=$('#dashboard-action li label .active').val();
	 list_refresh();
	 list_refresh1();
	 
}
   
  function loadtables() {
	  var table = $('#expence');
      var oTable = table.DataTable({
   	   "processing": true,
  		"serverSide": false,      
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
              [5, 15, 20, "All"] 
          ],
          "pageLength": 10, 
          "columnDefs": [{  
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
  			"url": "expense/getallexpence?date="+d,
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

      var tableWrapper = $('#sample_6_wrapper'); 
      tableWrapper.find('.dataTables_length select').select2(); 
      
      
      var table1 = $('#income');

      var oTable1 = table1.DataTable({
   	   "processing": true, 
  		"serverSide": false, 
        
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
              [5, 15, 20, "All"] 
          ],
          "pageLength": 10,
          "columnDefs": [{  
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
  			"url": "expense/getallincome?date="+d,
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
					
						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;"  onclick="getinst(' + "'" + row.instToken + "'" + ')" class="fa fa-edit"></i>' +
							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deleteUser(' + "'" + row.instToken + "'" + ')" class="fa fa-trash"></i>';

					return str;

				}
			}
  		]
      });

      var oTableColReorder1 = new $.fn.dataTable.ColReorder( oTable1 );

      var tableWrapper1 = $('#sample_6_wrapper'); 
      tableWrapper1.find('.dataTables_length select').select2();
      list_refresh = function ()
      {
    	  oTable.ajax.url( "expense/getallexpence?date="+d ).load();
    	  oTable.ajax.reload(null, false);
      };
      list_refresh1 = function ()
      {
    	  oTable1.ajax.url( "expense/getallincome?date="+d ).load();
    	  oTable1.ajax.reload(null, false);
      };
     
}
   
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



function loadrange() {
	
	$.ajax({
		type: 'GET',
		url: "dashboard/getdureations",
		dataType: "JSON",
		async: false,
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
				console.log(data.response);
				Metronic.unblockUI();
				var text = '';
				var i;
				for (i = 0; i < data.response.length; i++) {
				  text += '<li><label class="btn btn-green" ><input onclick="updatedashboard('+i+')" type="radio" id="'+i+'" name="options" value="'+data.response[i]+'" class="toggle">'+data.response[i]+'</label></li>';
				}
				$("#dashboard-action").html(text);
				$('#dashboard-action #0').addClass('active');
				$('#0').prop('checked',true);
				$("#dashboard-action li:first").css({"background":"#f2f6f9" , "border-left":"3px solid #5C9ACF"});
				
				console.log(text);
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

