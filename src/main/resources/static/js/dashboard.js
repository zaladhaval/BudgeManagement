var d='';
jQuery(document).ready(function () {
	   loadrange();
	   d=$('#dashboard-action li label .active').val();
	   counterdata();
	  
	   loadtables();
   });

function updatedashboard(id){
		//
	 $('#expenceduration label').removeClass('active');
	 $('#expenceduration').children().first().addClass('active');
	 
	 $('#incomeduration label').removeClass('active');
	 $('#incomeduration').children().first().addClass('active');
	 
	 $('#dashboard-action li label input').removeClass('active');	
	 $('#'+id).addClass('active');
	 d=$('#dashboard-action li label .active').val();
	 list_refresh( "expense/getallexpence?date="+d );
	 list_refresh1("expense/getallincome?date="+d);
	  counterdata();
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
						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;" onclick="edit(' + "'" + row.token + "'" +','+"'"+"E"+"'"+')" class="fa fa-edit"></i>' +
							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deletedata(' + "'" + row.token + "'" +','+"'"+"E"+"'"+')" class="fa fa-trash"></i>';

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
					
						str = '<i style="radius= 50%; font-size: 20px; color: royalblue;"  onclick="edit(' + "'" + row.token + "'" +','+"'"+"I"+"'"+')" class="fa fa-edit"></i>' +
							'&nbsp &nbsp<i style="radius= 30%; font-size: 20px; color: red;" onclick="deletedata(' + "'" + row.token + "'" +','+"'"+"I"+"'"+')" class="fa fa-trash"></i>';

					return str;

				}
			}
  		]
      });

      var oTableColReorder1 = new $.fn.dataTable.ColReorder( oTable1 );

      var tableWrapper1 = $('#sample_6_wrapper'); 
      tableWrapper1.find('.dataTables_length select').select2();
      list_refresh = function (url)
      {
    	  oTable.ajax.url(url).load();
    	 
      };
      list_refresh1 = function (url)
      {
    	  oTable1.ajax.url( url ).load();
    	
      };
      
      list_refresh_only = function ()
      {
    	  oTable.ajax.reload(null, false);
    	  oTable1.ajax.reload(null, false);
      };
     
}
   
function counterdata() {
	$.ajax({
		type: 'GET',
		url: "dashboard/counterdetails?date="+d,
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
				Metronic.unblockUI();
				
				$("#totalinc").html(data.response['totalinc']+'&nbsp;<small class="font-green-sharp"><i class="fa fa-inr" style="font-size: 24px;"></i></small>');
				$("#totalexp").html(data.response['totalexp']+'&nbsp;<small class="font-red-sharp"><i class="fa fa-inr" style="font-size: 24px; color : #f36a5a;"></i></small>');
				$("#remain").html(data.response['remain']+'&nbsp;<small class="font-red-sharp"><i class="fa fa-inr" style="font-size: 24px; color : #5C9BD1;"></i></small>');
				$("#remaintotal").html(data.response['totalremain']+'&nbsp;<small class="font-red-sharp"><i class="fa fa-inr" style="font-size: 24px; color : #8877a9 !important"></i></small>');
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

function daydurationexp(id) {
d=$('#dashboard-action li label .active').val();
	switch($('#'+id).val()) {
	  case 'alltimeex':
		  list_refresh( "expense/getallexpence?date="+d );
	    break;
	  case 'todayex':
		  var today = new Date();
		  var dd = today.getDate();
		  /*var mm = today.getMonth()+1; //January is 0!
		  var yyyy = today.getFullYear();*/
		  d=d+'-'+dd;
		  list_refresh( "expense/getallexpence?date="+d );
		  break;
	  case 'weekex':
		  list_refresh( "expense/getallexpenceweek?date="+d );
	    break;
	  default:
	    // code block
	}
	
}

function daydurationinc(id) {
	d=$('#dashboard-action li label .active').val();
	
	switch($('#'+id).val()) {
	  case 'alltimein':
		  list_refresh1("expense/getallincome?date="+d);
	    break;
	  case 'todayin':
		  var today = new Date();
		  var dd = today.getDate();
		  d=d+'-'+dd;
		  list_refresh1("expense/getallincome?date="+d);
		  break;
	  case 'weekin':
		  list_refresh1("expense/getallinceweek?date="+d);
	    break;
	  default:
	    // code block
	}
}


function deletedata(token,type){
	swal({
		  title: "Are you sure?",
		  text: "You will not be able to recover this data!",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonClass: "btn-danger",
		  confirmButtonText: "Yes, delete it!",
		  cancelButtonText: "No, cancel",
		  closeOnConfirm: false,
		  closeOnCancel: false
		},
		function(isConfirm) {
		  if (isConfirm) {
		    swal("Deleted!", "Your data has been deleted.", "success");
		    return deleteExpOrInc(token,type);
		  } else {
		    swal("Cancelled", "Operation Cancled :)", "error");
		  }
		});
	
}

function deleteExpOrInc(token,type) {
	
	$.ajax({
		type: 'Post',
		url: "expense/delete?token="+token+"&type="+type,
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
				success(data.message);
				 counterdata();
				 list_refresh_only();
				Metronic.unblockUI();
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

function edit(token,type) {
	
	$.ajax({
		type: 'POST',
		url: "expense/getbyid?token="+token+"&type="+type,
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
				success(data.message);
				
				 var url = "/expense?amount="+data.response['amount']+"&type="+data.response['type']+"&date="+data.response['date']+"&description="+data.response['description']+"&token="+data.response['token'];
				 window.location.href = url;
				Metronic.unblockUI();
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