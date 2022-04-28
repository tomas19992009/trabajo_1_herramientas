
function habilitar(){
	txt_1=document.getElementById("txt_1").value;
	txt_2=document.getElementById("txt_2").value;
	txt_3=document.getElementById("txt_3").value;
	txt_4=document.getElementById("txt_4").value;
	txt_5=document.getElementById("txt_5").value;
	txt_6=document.getElementById("txt_6").value;
	val=0;
	
	if(txt_1==""){
		val++;
	}
	if(txt_2==""){
		val++;
	}
	if(txt_3==""){
		val++;
	}
	if(txt_4==""){
		val++;
	}
	if(txt_5==""){
		val++;
	}
	if(txt_6==""){
		val++;
	}
	
	if(val==0){
		document.getElementById("btn").disabled=false;
	}
	else{
		document.getElementById("btn").disabled=true;
	}
}

document.getElementById("txt_1").addEventListener("keyup",habilitar);
document.getElementById("txt_2").addEventListener("keyup",habilitar);

document.getElementById("txt_3").addEventListener("keyup",habilitar);

document.getElementById("txt_4").addEventListener("keyup",habilitar);

document.getElementById("txt_5").addEventListener("keyup",habilitar);

document.getElementById("txt_6").addEventListener("keyup",habilitar);

document.getElementById("btn").addEventListener("click",()=>{
	alert("haz llenado todos los campos");
});
