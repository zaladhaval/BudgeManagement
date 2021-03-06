<div class="page-header-inner">
	<!-- BEGIN LOGO -->
	<div class="page-logo">
		<a href="/dashboard">
			<img src="resources/assets/admin/layout4/img/logo11.png" alt="logo" class="logo-default"
				style="height: 50px; padding-bottom: 10px; margin-top: 22px; width: 160px;" />
		</a>
		<div class="menu-toggler sidebar-toggler">
			<!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
		</div>
	</div>
	<!-- END LOGO -->
	<!-- BEGIN RESPONSIVE MENU TOGGLER -->
	<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
		data-target=".navbar-collapse">
	</a>
	<!-- END RESPONSIVE MENU TOGGLER -->
	<c:if test="${page == 'dashboard'}">
		<div class="page-actions">

			<div class="btn-group">
				<button type="button" class="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown"
					data-hover="dropdown" data-close-others="true">
					<span class="hidden-sm hidden-xs">Duration&nbsp;</span><i class="fa fa-angle-down"></i>
				</button>

				<ul class="dropdown-menu" role="menu" id="dashboard-action">

				</ul>

			</div>
		</div>
	</c:if>
	<!-- BEGIN PAGE TOP -->
	<div class="page-top">

		<!-- BEGIN TOP NAVIGATION MENU -->
		<div class="top-menu">
			<ul class="nav navbar-nav pull-right">
				<li class="separator hide">
				</li>
				<!-- BEGIN USER LOGIN DROPDOWN -->
				<li class="dropdown dropdown-user dropdown-dark">
					<a href="/logout" class="dropdown-toggle">
						<span class="username username-hide-on-mobile" title="logout" data-toggle="tooltip"><i
								class="icon-logout"></i>
						</span>
					</a>
				</li>
			</ul>
		</div>
		<!-- END TOP NAVIGATION MENU -->
	</div>
	<!-- END PAGE TOP -->
</div>