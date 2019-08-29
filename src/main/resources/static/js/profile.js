var FormValidation = function () {   

// advance validation
    var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#profile-form');
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
                	name: {
                         required: true
                     },
                	contact: {
                       number: true,
                        required: true
                    },
                    email: {
                        required: true,
                        email:true
                    },
                    city: {
                        required: true
                    },
                   
                    country: {
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

           
    }

    return {
        //main function to initiate the module
        init: function () {

            handleValidation3();

        }

    };
}();





jQuery(document).ready(function () {
	FormValidation.init();
	$.ajax({
		type: 'GET',
		url: "usermanagement/getuser",
		dataType: "JSON",
		async: false,
		processData: false,
		cache: false,
		contentType: "application/json",
		beforeSend: function () {
			Metronic.blockUI({
				boxed: true
			});
		},
		success: function (data) {
			console.log(data);
			if (data.status) {
				$("#name").val(data.response['fullName']);
				$("#contact").val(data.response['contact']);
				$("#email").val(data.response['email']);
				$("#city").val(data.response['city']);
				$("#select2_sample4").val(data.response['country']);
				Metronic.unblockUI();
			} else if (!data.status) {
				error(data.message);
				Metronic.unblockUI();
			} else {
				error("Problem occures during process");
				Metronic.unblockUI();
			}

		},
		error: function () {
			error("Problem occures during process mm");
			Metronic.unblockUI();
		}
	});
	
	
	$("#updateuser").click(function() {
		
		var form = {
				"fullName": $("#name").val(),
				"contact": $("#contact").val(),
				"email": $("#email").val(),
				"city": $("#city").val(),
				"country": $("#select2_sample4").val()
			};
		if (form.fullName!=''&&form.contact!=''&&form.email!=''&&form.city!=''&&form.country!='') {
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
					location.reload();
					//Metronic.unblockUI();
					//$("#form_sample_3")[0].reset();
					
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
	
	$("#changpass").click(function() {
		var form = {
				"password": $("#password").val(),
				"newPassword": $("#newpassword").val(),
				"confirmPassword": $("#confirmpassword").val()
			};
		if (form.password!=''&&form.newPassword!=''&&form.confirmPassword!='') {
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
					location.reload();
					//Metronic.unblockUI();
					//$("#form_sample_3")[0].reset();
					
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

