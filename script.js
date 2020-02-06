
document.addEventListener("DOMContentLoaded", function(){


	document.querySelector("input[type='button']").addEventListener("click", function(){
	
		wyslij();
		
	});	


	
});	

	function wyslij(){
		
		let name = document.querySelector("input[name='name']").value;
			document.querySelector("#name").innerText = name;
			if (name==""){
			document.querySelector("#error_name").innerText = "wielbłąd";
			}
			else{
			document.querySelector("#error_name").innerText = "";
			}
	
		let sureName = document.querySelector("input[name='sureName']").value;
			document.querySelector("#sureName").innerText = sureName;
			
			if (sureName=="") {
				document.querySelector("#error_sureName").innerText = "wielbłąd";
			}
			else{
				document.querySelector("#error_sureName").innerText = ""
			}
		
			
		let city = document.querySelector("select[name='city']").value;
		document.querySelector("#city").innerText = city;
			if (city=="") {
				document.querySelector("#error_city").innerText = "wielbłąd";
			}
			else{
			document.querySelector("#city").innerText = city;		
			}
		
		let technologies = document.querySelectorAll("input[type='checkbox']");
		document.querySelector("#technologies").innerHTML= ""
		document.querySelector("#error_technology").innerHTML = ""
		let marked = false;
			for ( let elem of technologies){
				if (elem.checked){
					document.querySelector("#technologies").innerHTML += elem.value + ", ";	
					marked = true;
					// zaznaczenie zmieni wartosc akapitu 
				}
			}
			if(marked == false){
				document.querySelector("#error_technology").innerHTML = "wielbłąd"
			}	
			
		let position = document.querySelectorAll("input[type='radio']");
			
			for ( let elem of position){
				if (elem.checked){
					document.querySelector("#position").innerText=elem.value;	
					
				}
			}	
		
		let comments = document.querySelector("textarea[name='comments']").value;
		document.querySelector("#comments").innerText = comments;		
				
				
			
		
			} 
		
	
		
		