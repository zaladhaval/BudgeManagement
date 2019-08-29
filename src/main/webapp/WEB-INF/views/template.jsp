<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html>

<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>

	<title>${page}</title>

	<%@ include file="include/style.jsp" %>
	<link rel="shortcut icon" href="favicon.ico" />
</head>

<body class="page-header-fixed page-sidebar-closed-hide-logo page-sidebar-closed-hide-logo">
	<!-- BEGIN HEADER -->
	<div class="page-header navbar navbar-fixed-top">
		<!-- BEGIN HEADER INNER -->
		<%@ include file="include/header.jsp" %>
		<!-- END HEADER INNER -->


	</div>
	<!-- END HEADER -->
	<div class="clearfix">
	</div>
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- BEGIN SIDEBAR -->
		<%@ include file="include/sidebar.jsp" %>

		<!-- END SIDEBAR -->
		<!-- BEGIN CONTENT -->
		<div class="page-content-wrapper">
			<div class="page-content">
				<!-- BEGIN PAGE HEAD -->
				<div class="page-head">

				</div>
				<!-- END PAGE HEAD -->

				<!-- BEGIN PAGE CONTENT INNER -->
				<jsp:include page="modules/${page}.jsp" />

			</div>
			<!-- END PAGE CONTENT INNER -->
		</div>
	</div>
	<!-- END CONTENT -->

	<!-- END CONTAINER -->
	<script src="resources/assets/global/scripts/metronic.js" type="text/javascript"></script>
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<%@ include file="include/script.jsp" %>
	<script src="resources/js/${page}.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL SCRIPTS -->
	<script>
		jQuery(document).ready(function () {
			$('li').removeClass('active');
			$('.${page}').addClass('active');
			Metronic.init(); // init metronic core components
			Layout.init(); // init current layout
			Login.init();
			Demo.init();
			UIBlockUI.init();
			UIToastr.init();
			Index.init(); // init index page

		});
	</script>
	<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->

</html>