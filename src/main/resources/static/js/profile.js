jQuery(document).ready(function () {
	
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
	
});