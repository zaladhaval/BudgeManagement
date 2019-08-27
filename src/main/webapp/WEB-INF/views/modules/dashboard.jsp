<div class="row margin-top-10">
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="dashboard-stat2">
			<div class="display">
				<div class="number">
					<h3 class="font-green-sharp" id="totalinc">0</h3>
					<small>TOTAL Income</small>
				</div>
				<div class="icon">
					<i class="icon-wallet"></i>
				</div>
			</div>

		</div>
	</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="dashboard-stat2">
			<div class="display">
				<div class="number">
					<h3 class="font-red-haze" id="totalexp">0</h3>
					<small>Total Expense </small>
				</div>
				<div class="icon">
					<i class="icon-basket"></i>
				</div>
			</div>

		</div>
	</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="dashboard-stat2">
			<div class="display">
				<div class="number">
					<h3 class="font-blue-sharp" id="remain">0</h3>
					<small>Remaining Amount</small>
				</div>
				<div class="icon">
					<i class=" icon-basket-loaded"></i>
				</div>
			</div>

		</div>
	</div>
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="dashboard-stat2">
			<div class="display">
				<div class="number">
					<h3 class="font-purple-soft">276</h3>
					<small>NEW USERS</small>
				</div>
				<div class="icon">
					<i class="icon-user"></i>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="row">
	<div class="col-md-12">
		<!-- BEGIN PROFILE SIDEBAR -->

		<!-- END BEGIN PROFILE SIDEBAR -->
		<!-- BEGIN PROFILE CONTENT -->
		<div class="profile-content">
			<div class="row">
				<div class="col-md-12">
					<div class="portlet light">
						<div class="portlet-title tabbable-line">
							<div class="caption caption-md">
								<i class="icon-globe theme-font hide"></i>
								<span class="caption-subject font-blue-madison bold uppercase">Account Details</span>
							</div>
							<ul class="nav nav-tabs">
								<li class="active">
									<a href="#tab_1_1" data-toggle="tab">Expence</a>
								</li>
								<li>
									<a href="#tab_1_3" data-toggle="tab">Income</a>
								</li>
							</ul>
						</div>
						<div class="portlet-body">
							<div class="tab-content">
								<!-- PERSONAL INFO TAB -->
								<div class="tab-pane active" id="tab_1_1">
									<div class="portlet box red-intense">
										<div class="portlet-title">
											<div class="caption">
												<i class="fa fa-globe"></i>Columns Reorder
											</div>
											<div class="actions">
												<div class="btn-group btn-group-devided" data-toggle="buttons">
													<label
														class="btn btn-transparent grey-salsa btn-circle btn-sm active">
														<input type="radio" name="options" class="toggle"
															id="alltimeex">All</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm ">
														<input type="radio" name="options" class="toggle"
															id="todayex">Today</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle"
															id="weekex">Week</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle"
															id="monthex">Month</label>
												</div>
											</div>
										</div>
										<div class="portlet-body">
											<table class="table table-striped table-bordered table-hover" id="expence">
												<thead>
													<tr>
														<th>
															Type
														</th>
														<th class="hidden-xs">
															Amount
														</th>
														<th class="hidden-xs">
															Date
														</th>
														<th class="hidden-xs">
															Description
														</th>
														<th class="hidden-xs">
															Action
														</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- END PERSONAL INFO TAB -->

								<!-- CHANGE PASSWORD TAB -->
								<div class="tab-pane" id="tab_1_3">
									<div class="portlet box red-intense">
										<div class="portlet-title">
											<div class="caption">
												<i class="fa fa-globe"></i>Columns Reorder
											</div>
											<div class="actions">
												<div class="btn-group btn-group-devided" data-toggle="buttons">
													<label
														class="btn btn-transparent grey-salsa btn-circle btn-sm active">
														<input type="radio" name="options" class="toggle"
															id="alltime">All</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm ">
														<input type="radio" name="options" class="toggle"
															id="todayin">Today</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle"
															id="weekin">Week</label>

													<label class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle"
															id="monthin">Month</label>
												</div>
											</div>
										</div>
										<div class="portlet-body">
											<table class="table table-striped table-bordered table-hover" id="income">
												<thead>
													<tr>
														<th>
															Type
														</th>
														<th class="hidden-xs">
															Amount
														</th>
														<th class="hidden-xs">
															Date
														</th>
														<th class="hidden-xs">
															Description
														</th>
														<th class="hidden-xs">
															Action
														</th>
													</tr>
												</thead>
												<tbody>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- END CHANGE PASSWORD TAB -->

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END PROFILE CONTENT -->
	</div>
</div>