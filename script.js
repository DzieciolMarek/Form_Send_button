
document.addEventListener("DOMContentLoaded", function(){


	document.querySelector("input[type='button']").addEventListener("click", function(){
	
		wyslij();
		
	});	


	
});	

	function wyslij(){
		
		let imie = document.querySelector("input[name='imie']").value;
			document.querySelector("#imie").innerText = imie;
			if (imie==""){
			document.querySelector("#error_imie").innerText = "wielbłąd";
			}
			else{
			document.querySelector("#error_imie").innerText = "";
			}
	
		let nazwisko = document.querySelector("input[name='nazwisko']").value;
			document.querySelector("#nazwisko").innerText = nazwisko;
			
			if (nazwisko=="") {
				document.querySelector("#error_nazwisko").innerText = "wielbłąd";
			}
			else{
				document.querySelector("#error_nazwisko").innerText = ""
			}
		
			
		let miasto = document.querySelector("select[name='miasto']").value;
		document.querySelector("#miasto").innerText = miasto;
			if (miasto=="") {
				document.querySelector("#error_miasto").innerText = "wielbłąd";
			}
			else{
			document.querySelector("#miasto").innerText = miasto;		
			}
		
		let technologie = document.querySelectorAll("input[type='checkbox']");
		document.querySelector("#technologie").innerHTML= ""
		document.querySelector("#error_technologia").innerHTML = ""
		let zaznaczono = false;
			for ( let elem of technologie){
				if (elem.checked){
					document.querySelector("#technologie").innerHTML += elem.value + ", ";	
					zaznaczono = true;
				}
			}
			if(zaznaczono == false){
				document.querySelector("#error_technologia").innerHTML = "wielbłąd"
			}	
			
		let stanowisko = document.querySelectorAll("input[type='radio']");
			
			for ( let elem of stanowisko){
				if (elem.checked){
					document.querySelector("#stanowisko").innerText=elem.value;	
					
				}
			}	
		
		let uwagi = document.querySelector("textarea[name='uwagi']").value;
		document.querySelector("#uwagi").innerText = uwagi;		
				
				
			
		
			} 
		
	
		
		