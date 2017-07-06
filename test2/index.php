<!DOCTYPE html>
<html>
<head>
	<title>CRUD By JSON</title>
	<meta charset="utf-8">
	<!--JQuery-->
	<script type="text/javascript" src= "jquery.js"></script>
	<!--Bootstrap-->
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script type="text/javascript" src= "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<!--JSON-->
	<script type="text/javascript" src= "operations.js"></script>
</head>
<body>
<div class= "navbar navbar-default navbar-static-top" role= "navigation">
<!--Content-->
	<div class= "container">
		<table id= "showTable" align= "center" class= "table table-hover table-responsive table-bordered">
			<tr>
				<td>
					<input type= "text" name= "name" id= "search_name"/>
				</td>
			</tr>
			<tr id="trheader">
				<th>Name</th>
				<th>Email</th>
				<th>Country</th>
				<th></th>
				<th></th>
			</tr>
		</table>
	</div>
	<div id="res"></div>
</div>
</body>
</html>