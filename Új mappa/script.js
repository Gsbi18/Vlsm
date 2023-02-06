var i =0;
function Apply(){
    subnets_num=document.getElementById("subnet").value;
    
    let text="";
    for (let i = 0; i < subnets_num; i++) {
        text+="<input type='text'placeholder='NAME' class='bevit vlan'>"+"<input type='number' placeholder='NUMBERS' class='vlan bevit'>" + "<br>"
      }
      document.getElementById("subnet_reveal").innerHTML=text;
}
