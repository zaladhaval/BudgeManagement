<div class="row">
	<div class="col-md-12">
		<!-- BEGIN VALIDATION STATES-->
		<div class="portlet box purple">
			<div class="portlet-title">
				<div class="caption">
					Fill up the details
				</div>

			</div>
			<div class="portlet-body form">
				<!-- BEGIN FORM-->
				<form id="upload-doc" class="form-horizontal" action="/uploadDocument/uploaddoc" method="post" enctype="multipart/form-data">
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
							<label class="control-label col-md-3">Name Of Document<span class="required">
									* </span>
							</label>
							<div class="col-md-4">
								<input type="text" name="name" data-required="1" class="form-control" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">File&nbsp;&nbsp;</label>
							<div class="col-md-4">
								<input name="file" type="file" class="form-control" />
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-md-3">Type Of File <span class="required">
									* </span>
							</label>
							<div class="col-md-4">
								<select class="form-control" name="type">
									<option value="">Select...</option>
									<option value="fa-file File">File</option>
									<option value="fa-file-archive-o Zip/Archive">Zip/Archive</option>
									<option value="fa-file-image-o Image">Image</option>
									<option value="fa-file-video-o Video">Video</option>
									<option value="fa-file-audio-o Audio">Audio</option>
									<option value=" fa-file-code-o Code">Code</option>
									<option value="fa-file-pdf-o Pdf">Pdf</option>
									<option value="fa-file-excel-o Excel">Excel</option>
									<option value="fa-file-word-o Word">Word</option>
									<option value="fa-file-text-o Text">Text</option>
									<option value="fa-file-powerpoint-o Power point">Power point</option>
								</select>
							</div>
						</div>

					</div>
					<div class="form-actions">
						<div class="row">
							<div class="col-md-offset-3 col-md-9">
								<input type="submit" class="btn green" value="Submit" />
								<button type="button" class="btn default">Cancel</button>
							</div>
						</div>
					</div>
				</form>
				<!-- END FORM-->
			</div>
		</div>
		<!-- END VALIDATION STATES-->
	</div>
</div>