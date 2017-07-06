$(document).ready(function(){
	var data = [
		{
			"name" : "Himani",
			"email" : "himani@gmail.com",
			"country" : "India"
		},
		{
			"name" : "Shivani",
			"email" : "shivani@gmail.com",
			"country" : "America"
		},
		{
			"name" : "Vaibhav",
			"email" : "vaibhav@gmail.com",
			"country" : "Australia"
		},
		{
			"name" : "Abhinav",
			"email" : "shivam@gmail.com",
			"country" : "Sri Lanka"
		},
		{
			"name" : "Henry",
			"email" : "henry@gmail.com",
			"country" : "England"
		},
		{
			"name" : "David",
			"email" : "david@gmail.com",
			"country" : "Turkey"
		},
		{
			"name" : "Yuri Chang",
			"email" : "chang@gmail.com",
			"country" : "China"
		}
	];

	function new_val(){
		var result;
		_.forEach(data, function(value, key){
			{
				result += "<tr>";
				result += "<td id='"+key+"'><input type='text' value='"+value.name+"'/></td>";
				result += "<td id='"+key+"'><input type='text' value='"+value.email+"'/></td>";
				result += "<td id='"+key+"'><input type='text' value='"+value.country+"'/></td>";
				result += "</tr>";
			}
		});
		$("#trheader").html(result);
	}
	new_val();
	$("#search_name").keyup(function(){
		var search = $("#search_name").val();
		var regex = new RegExp(search, "i");
		var result;
		_.forEach(data, function(value, key){
			if(value.name.search(regex) != '-1'){
				result += "<tr>";
				result += "<td id='"+key+"'><input type='text' value='"+value.name+"'/></td>";
				result += "<td id='"+key+"'><input type='text' value='"+value.email+"'/></td>";
				result += "<td id='"+key+"'><input type='text' value='"+value.country+"'/></td>";
				result += "</tr>";
			}
		});
		if(result){
			$("#trheader").html(result);
		}else{
			$("#trheader").html();
			result = "<tr class='col-md-3'><td>No Data Found</td></tr>";
			$("#trheader").html(result);
		}
		
	});
});