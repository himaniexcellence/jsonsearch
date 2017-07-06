$(document).ready(function(){
	function new_val(){
		$.getJSON("data.json",function(data){
				var result;
				var i=0;
				$.each(data, function(key, val){
					result += "<tr>";
					result += "<td id='"+key+"'><input type='text' id='name"+i+"' value='"+val.name+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='email"+i+"' value='"+val.email+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='country"+i+"' value='"+val.country+"'/></td>";
					result += "<td id='update"+key+"'><button>Update</button></td>";					
					result += "</tr>";
					i++;
				});
				$("#trheader").html(result);
			});
	}
	new_val();
	$("#search_name").keydown(function(){
		$.getJSON("data.json",function(data){
			var search = $("#search_name").val();
			var regex = new RegExp(search, "i");
			var result;
			var i=0;
			$.each(data, function(key, val){
				if(val.name.search(regex) != -1){
					result += "<tr>";
					result += "<td id='"+key+"'><input type='text' id='name"+i+"' value='"+val.name+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='email"+i+"' value='"+val.email+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='country"+i+"' value='"+val.country+"'/></td>";
					result += "<td id='update"+key+"'><button>Update</button></td>";
					result += "</tr>";
				}
			});
			$("#trheader").html(result);
		});
	});
	// console.log($("button").css('color:red'));
	$(document).on("click", "button", function(){
		$.getJSON("data.json", function(data){
			var i=0;
			var result;
			$.each(data, function(key, val){
				var temp = JSON.stringify({
					name : $("#name"+i).val(),
					email : $("#email"+i).val(),
					country : $("#country"+i).val()
				});
					i++;
					var new_data = JSON.parse(temp);
				if(val.name != temp.name){
					data.push(new_data.name);
					//$("#trheader").empty();
					result += "<tr>";
					result += "<td id='"+key+"'><input type='text' id='name"+i+"' value='"+data.name+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='email"+i+"' value='"+data.email+"'/></td>";
					result += "<td id='"+key+"'><input type='text' id='country"+i+"' value='"+data.country+"'/></td>";
					result += "<td id='update"+key+"'><button>Update</button></td>";
					result += "</tr>";
				}
			});
		});
	});
});