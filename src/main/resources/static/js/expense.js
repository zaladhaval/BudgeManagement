var FormValidation = function () {   

// advance validation
    var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#expence-form');
            var error3 = $('.alert-danger', form3);
            var success3 = $('.alert-success', form3);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form3.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form3.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "", // validate all fields including form hidden input
                rules: {
                   
                    amount: {
                       number: true,
                        required: true
                    },
                    description: {
                        required: true
                    },
                    options2: {
                        required: true
                    },
                   
                    datepicker: {
                        required: true
                    },
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parent(".input-group").size() > 0) {
                        error.insertAfter(element.parent(".input-group"));
                    } else if (element.attr("data-error-container")) { 
                        error.appendTo(element.attr("data-error-container"));
                    } else if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else if (element.parents('.radio-inline').size() > 0) { 
                        error.appendTo(element.parents('.radio-inline').attr("data-error-container"));
                    } else if (element.parents('.checkbox-list').size() > 0) {
                        error.appendTo(element.parents('.checkbox-list').attr("data-error-container"));
                    } else if (element.parents('.checkbox-inline').size() > 0) { 
                        error.appendTo(element.parents('.checkbox-inline').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success3.hide();
                    error3.show();
                    Metronic.scrollTo(error3, -200);
                },

                highlight: function (element) { // hightlight error inputs
                   $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success3.show();
                    error3.hide();
                    //form[0].submit(); // submit the form
                }

            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2me', form3).change(function () {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });

            // initialize select2 tags
            $("#select2_tags").change(function() {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input 
            }).select2({
                tags: ["red", "green", "blue", "yellow", "pink"]
            });

            //initialize datepicker
            $('.date-picker').datepicker({
                rtl: Metronic.isRTL(),
                autoclose: true
            });
            $('.date-picker .form-control').change(function() {
                form3.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input 
            })
    }

    return {
        //main function to initiate the module
        init: function () {

            handleValidation3();

        }

    };
}();



jQuery(document).ready(function() {
	loadupdatedata();
	FormValidation.init();
	$("#cancle-btn").click(function() {
		 window.location.href = "/dashboard";
		
	});
	$("#add-expence-btn").click(function() {
		var form = {
				"amount": $("#amount").val(),
				"type": $("#type").val(),
				"date": $("#date").val(),
				"description": $("#description").val()
			};
		if (form.amount!=''&&form.type!=''&&form.date!=''&&form.description!='') {
		$.ajax({
			type: 'POST',
			url: "expense/add",
			dataType: "JSON",
			async: true,
			data: JSON.stringify(form),
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
					 window.location.href = "/dashboard";
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
	});
	
	$("#update-expence-btn").click(function() {
		var form = {
				"token": $("#token").val(),
				"amount": $("#amount").val(),
				"type": $("#type").val(),
				"date": $("#date").val(),
				"description": $("#description").val()
			};
		if (form.amount!=''&&form.type!=''&&form.date!=''&&form.description!='') {
		$.ajax({
			type: 'POST',
			url: "expense/update",
			dataType: "JSON",
			async: true,
			data: JSON.stringify(form),
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
					 $("#expence-form").trigger("reset");
					 Metronic.unblockUI();
					 window.location.href = "/dashboard";
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
	});
});

function  loadupdatedata() {
	var queryString = new Array();
	
	 if (queryString.length == 0) {
         if (window.location.search.split('?').length > 1) {
        	 $('#update-expence-btn').show();
 			$('#add-expence-btn').hide();
             var params = window.location.search.split('?')[1].split('&');
             for (var i = 0; i < params.length; i++) {
                 var key = params[i].split('=')[0];
                 var value = decodeURIComponent(params[i].split('=')[1]);
                 queryString[key] = value;
             }
         }else {
        	 $('#update-expence-btn').hide();
  			$('#add-expence-btn').show();
		}
     }
     if (queryString["amount"] != null && queryString["type"] != null && queryString["date"] != null&& queryString["description"] != null && queryString["token"]) {
         $("#amount").val(queryString["amount"]);
		 $("#type").val(queryString["type"]);
		 var d=queryString["date"].split('-')[2]+'-'+queryString["date"].split('-')[1]+'-'+queryString["date"].split('-')[0];
		 $("#date").val(d);
		 $("#description").val(queryString["description"]);
		 $("#token").val(queryString["token"]);
     }
	
}
