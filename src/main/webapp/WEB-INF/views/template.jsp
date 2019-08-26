<!DOCTYPE html>

<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>

<title>${page}</title>

<%@ include file="include/style.jsp" %>
<link rel="shortcut icon" href="favicon.ico"/>
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
jQuery(document).ready(function() { 
	 Metronic.init(); // init metronic core components
	 Layout.init(); // init current layout
	 Demo.init(); // init demo features
	 UIBlockUI.init();
	 TableManaged.init();
	 UIToastr.init();
	 FormValidation.init();
	$('li').removeClass('active');
	$('.${page}').addClass('active');
   // init metronic core componets
   // init demo features 
   Index.init(); // init index page
  
 Tasks.initDashboardWidget(); // init tash dashboard widget
 
});
</script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>