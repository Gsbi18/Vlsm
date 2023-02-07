function Apply() {
  subnets_num = document.getElementById("subnet").value;
  netmask = document.getElementById("netmask").value;
  ip = document.getElementById("ip").value;


  let text = "";
  for (let i = 0; i < subnets_num; i++) {
    text += '<input type="text" placeholder="NAME" id="name' + [i] + '" class="bevit vlan">' + '<input type="number" placeholder="NUMBERS" id="num' + [i] + '" class="vlan bevit">' + '<br>'
  }
  document.getElementById("subnet_reveal").innerHTML = text;
  document.getElementById("subnet_reveal").innerHTML += '<input type="button" id="apply" onClick="gen()" value="Generate">';
  
  
}

function gen(){

  const names = new Array();
  var nums = new Array();
  var nums_id=new Array();


  for (let index = 0; index <subnets_num; index++) {
    
    names.push(document.getElementById("name"+[index]).value);
    nums.push(document.getElementById("num"+[index]).value);
    
  }

  nums.sort(function(a, b){return b - a});
  
  for (let index = 0; index <subnets_num; index++) {
    
    nums_id==nums[index];
    
  }

  for (let index = 0; index <subnets_num; index++) {
    
   console.log(nums_id[index])
    
  }

}