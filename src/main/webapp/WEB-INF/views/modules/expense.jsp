<div class="row">
	<div class="col-md-12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet box green">
			<div class="portlet-title">
				<div class="caption">
					<i class="fa fa-gift"></i>Advance Validation
				</div>
				<div class="tools">

				</div>
			</div>
			<div class="portlet-body form">
				<!-- BEGIN FORM-->
				<form action="#" id="expence-form" class="form-horizontal">
					<div class="form-body">
						<div class="alert alert-danger display-hide">
							<button class="close" data-close="alert"></button>
							You have some form errors. Please check below.
						</div>
						<div class="alert alert-success display-hide">
							<button class="close" data-close="alert"></button>
							Your form validation is successful!
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">Amount <span class="required">
									* </span>
							</label>
							<div class="col-md-4">
								<input type="text" name="amount" autocomplete="off" class="form-control"  id="amount"/>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">Select Type <span class="required">
									* </span>
							</label>
							<div class="col-md-4">
								<select class="form-control select2me" name="options2" id="type">
									<option value="">Select...</option>
									<option value="InCome">InCome</option>
									<option value="Expence">Expence</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">Date</label>
							<div class="col-md-4">
								<div class="input-group date date-picker" data-date-format="dd-mm-yyyy">
									<input type="text" class="form-control" readonly name="datepicker" id="date">
									<span class="input-group-btn">
										<button class="btn default" type="button"><i
												class="fa fa-calendar"></i></button>
									</span>
								</div>

							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">Description <span class="required">
									* </span>
							</label>
							<div class="col-md-4">
								<textarea name="description" class="form-control" id="description"></textarea>
							</div>
						</div>
					</div>
					<div class="form-actions">
						<div class="row">
							<div class="col-md-offset-3 col-md-9">
								<button type="submit" class="btn green" id="add-expence-btn">Submit</button>
								<button type="button" class="btn default">Cancel</button>
							</div>
						</div>
					</div>
				</form>
				<!-- END FORM-->
			</div>
			<!-- END VALIDATION STATES-->
		</div>
	</div>
</div>