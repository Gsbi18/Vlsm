function Apply() {
  subnets_num = document.getElementById("subnet").value;
  netmask = document.getElementById("netmask").value;
  ip = document.getElementById("ip").value;
  console.log("IP:"+ip)
  console.log("NETMASK:"+netmask)

  let text = "";
  for (let i = 0; i < subnets_num; i++) {
    text += '<input type="text" placeholder="NAME" id="name' + [i] + '" class="bevit vlan">' + '<input type="number" placeholder="NUMBERS" id="number' + [i] + ' "class="vlan bevit">' + '<br>'
  }
  document.getElementById("subnet_reveal").innerHTML = text;
  document.getElementById("subnet_reveal").innerHTML += '<input type="button" id="apply"  value="Generate">';
}
