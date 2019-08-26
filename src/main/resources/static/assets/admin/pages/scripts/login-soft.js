var Login = function () {

	var handleLogin = function () {
		$('.login-form').validate({
			errorElement: 'span', // default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			rules: {
				username: {
					required: true
				},
				password: {
					required: true
				},
				remember: {
					required: false
				}
			},

			messages: {
				username: {
					required: "Username is required."
				},
				password: {
					required: "Password is required."
				}
			},

			invalidHandler: function (event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.login-form')).show();
			},

			highlight: function (element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error
				// class to
				// the
				// control
				// group
			},

			success: function (label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement: function (error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler: function (form) {
				form.submit();
			}
		});

		$('.login-form input').keypress(function (e) {
			if (e.which == 13) {
				if ($('.login-form').validate().form()) {
					$('.login-form').submit();
				}
				return false;
			}
		});
	}

	var handleForgetPassword = function () {
		$('.forget-form').validate({
			errorElement: 'span', // default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			ignore: "",
			rules: {
				email: {
					required: true,
					email: true
				}
			},

			messages: {
				email: {
					required: "Email is required."
				}
			},

			invalidHandler: function (event, validator) { // display error
				// alert on form
				// submit

			},

			highlight: function (element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error
				// class to
				// the
				// control
				// group
			},

			success: function (label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement: function (error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler: function (form) {
				form.submit();
			}
		});

		$('.forget-form input').keypress(function (e) {
			if (e.which == 13) {
				if ($('.forget-form').validate().form()) {
					$('.forget-form').submit();
				}
				return false;
			}
		});

		jQuery('#forget-password').click(function () {
			jQuery('.login-form').hide();
			jQuery('.forget-form').show();
		});

		jQuery('#back-btn').click(function () {
			jQuery('.login-form').show();
			jQuery('.forget-form').hide();
		});

	}

	var handleRegister = function () {

		function format(state) {
			if (!state.id) return state.text; // optgroup
			return "<img class='flag' src='resources/assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
		}


		$("#select2_sample4").select2({
			placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
			allowClear: true,
			formatResult: format,
			formatSelection: format,
			escapeMarkup: function (m) {
				return m;
			}
		});


		$('#select2_sample4').change(function () {
			$('.register-form').validate().element($(this)); 
		});



		$('.register-form').validate({
			errorElement: 'span', // default input error message container
			errorClass: 'help-block', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			ignore: "",
			rules: {

				fullname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				contact: {
					required: true,
					number: true
				},
				city: {
					required: true
				},
				country: {
					required: true
				},

				username: {
					required: true
				},
				password: {
					required: true
				},
				rpassword: {
					equalTo: "#register_password"
				}
			},



			invalidHandler: function (event, validator) { // display error
				// alert on form
				// submit

			},

			highlight: function (element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error
				// class to
				// the
				// control
				// group
			},

			success: function (label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement: function (error, element) {
				if (element.attr("name") == "tnc") { // insert checkbox
					// errors after the
					// container
					error.insertAfter($('#register_tnc_error'));
				} else if (element.closest('.input-icon').size() === 1) {
					error.insertAfter(element.closest('.input-icon'));
				} else {
					error.insertAfter(element);
				}
			},

			submitHandler: function (form) {
				//form.submit();
			}
		});

		$('.register-form input').keypress(function (e) {
			if (e.which == 13) {
				if ($('.register-form').validate().form()) {
					//$('.register-form').submit();
				}
				return false;
			}
		});

		jQuery('#register-btn').click(function () {
			jQuery('.login-form').hide();
			jQuery('.register-form').show();
		});

		jQuery('#register-back-btn').click(function () {
			jQuery('.login-form').show();
			jQuery('.register-form').hide();
		});
	}

	return {
		// main function to initiate the module
		init: function () {

			handleLogin();
			handleForgetPassword();
			handleRegister();
		}

	};

}();

var u;
var e;
var c;
jQuery(document).ready(function () {

	$("#email").focusout(function () {
		e = chechemail("/validtion/mail?email=" + $("#email").val(), "#email-unique");
	});
	$("#contact").focusout(function () {
		c = chechemail("/validtion/contact?contact=" + $("#contact").val(), "#contact-unique");
	});
	$("#username").focusout(function () {
		u = chechemail("/validtion/username?username=" + $("#username").val(), "#username-unique");
		
	});

	$("#register-submit-btn").click(function () {
		if (u.responseJSON.status && c.responseJSON.status && e.responseJSON.status) {
			var form = {
				"fullName": $("#fullname").val(),
				"email": $("#email").val(),
				"city": $("#city").val(),
				"country": $("#select2_sample4").val(),
				"username": $("#username").val(),
				"password": $("#register_password").val(),
				"confirmPassword": $("#rpassword").val(),
				"contact": $("#contact").val()
			};

			if (form.fullName != "" && form.email != "" && form.contact != "" && form.city != "" && form.country != "" && form.username != "" && form.password != "" && form.confirmPassword != "") {
				$.ajax({
					type: 'POST',
					url: "usermanagement/add",
					dataType: "JSON",
					async: true,
					data: JSON.stringify(form),
					processData: false,
					cache: false,
					contentType: "application/json",
					beforeSend: function () {
						Metronic.blockUI({
							boxed: true
						});
					},
					success: function (data) {
						if (data.status) {
							success(data.message);
							Metronic.unblockUI();
							location.reload();
						} else if (!data.status) {
							error(data.message);
							Metronic.unblockUI();
						} else {
							error("Problem occures during process");

							Metronic.unblockUI();
						}

					},
					error: function () {

						Metronic.unblockUI();
					}
				}
				);
			};
		}else {
			error("Enter valid data");
		}
	});
});

function chechemail(url, id) {
	var d = $.ajax({
		type: 'POST',
		url: url,
		dataType: "JSON",
		processData: false,
		cache: false,
		contentType: "application/json",
		beforeSend: function () {
			Metronic.blockUI({
				boxed: true
			});
		},
		success: function (data) {
			if (data.status && data.code == 200) {
				$(id).hide();
				Metronic.unblockUI();
				return data.status;
			} else if (!data.status && data.code == 404) {
				$(id).show();
				$(id).text(data.message);
				Metronic.unblockUI();
				return data.status;
			} else {
				error("Problem occures during process");
				$(id).show();
				$(id).text(data.message);
				Metronic.unblockUI();
				return data.status;
			}

		},
		error: function () {
			error("Problem occures during process");
			Metronic.unblockUI();
		}
	});
	return d;
}