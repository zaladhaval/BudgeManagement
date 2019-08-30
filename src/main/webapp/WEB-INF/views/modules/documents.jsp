<%@page import="java.util.Properties"%>
<!-- BEGIN PAGE CONTENT-->
<div class="row">
	<div class="col-md-12">
		<!-- BEGIN EXAMPLE TABLE PORTLET-->
		<div class="portlet box red-intense">
			<div class="portlet-title">
				<div class="caption">
					<i class="icon-docs"></i>All Document's
				</div>
				<div class="actions">
					<div class="btn-group">
						<a class="btn btn-sm green dropdown-toggle" href="javascript:;" data-toggle="dropdown">
							Actions <i class="fa fa-angle-down"></i>
						</a>
						<ul class="dropdown-menu pull-right">
							<li>
								<a href="javascript:;">
									<i class="icon-cloud-download"></i> &nbsp;Download All </a>
							</li>
							<li>
								<a href="javascript:;">
									<i class="fa fa-trash-o"></i> &nbsp; Delete All </a>
							</li>

						</ul>
					</div>
				</div>
			</div>
			<div class="portlet-body">
				<table class="table table-striped table-bordered table-hover" id="sample_6">
					<thead>
						<tr>
							<th>
								Type
							</th>
							<th>
								Name
							</th>
							<th class="hidden-xs">
								Size
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
		<!-- END EXAMPLE TABLE PORTLET-->
	</div>
</div>
<!-- END PAGE CONTENT-->