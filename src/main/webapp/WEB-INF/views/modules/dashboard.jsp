<div class="row margin-top-10">
	<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
		<div class="dashboard-stat2">
			<div class="display">
				<div class="number">
					<h3 class="font-green-sharp" id="totalinc">0</h3>
					<small>Monthly Income</small>
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
					<small>Monthly Expense </small>
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
					<small>Monthly Remaining</small>
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
					<h3 class="font-purple-soft" id="remaintotal">0</h3>
					<small>Total Remaining</small>
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
									<a href="#tab_1_1" data-toggle="tab">Expense</a>
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
												<i class="fa fa-globe"></i>Expenses Details
											</div>
											<div class="actions">
												<div class="btn-group btn-group-devided" data-toggle="buttons"
													id="expenceduration">
													<label onclick="daydurationexp('alltimeex')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm active">
														<input type="radio" name="options" class="toggle"
															value="alltimeex" id="alltimeex">All</label>

													<label onclick="daydurationexp('todayex')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm ">
														<input type="radio" name="options" class="toggle"
															value="todayex" id="todayex">Today</label>

													<label onclick="daydurationexp('weekex')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle" value="weekex"
															id="weekex">Week</label>
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
												<i class="fa fa-globe"></i>Income Details
											</div>
											<div class="actions">
												<div class="btn-group btn-group-devided" data-toggle="buttons"
													id="incomeduration">
													<label onclick="daydurationinc('alltimein')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm active">
														<input type="radio" name="options" class="toggle"
															value="alltimein" id="alltimein">All</label>

													<label onclick="daydurationinc('todayin')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm ">
														<input type="radio" name="options" class="toggle"
															value="todayin" id="todayin">Today</label>

													<label onclick="daydurationinc('weekin')"
														class="btn btn-transparent grey-salsa btn-circle btn-sm">
														<input type="radio" name="options" class="toggle" value="weekin"
															id="weekin">Week</label>
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