const historyDiv = document.getElementById("history");

function makeCall() {
  const services = [
    { name: "National Emergency Number", number: "999" },
    { name: "Police Helpline Number", number: "999" },
    { name: "Fire Service Number", number: "999" },
     { name: "Ambulance Service", number: "1994-999999" },
     { name: "Women & Child Helpline", number: "106" },
     { name: "Anti-Corruption Helpline", number: "109" },
     { name: "Electricity Helpline", number: "16216" },
     { name: "Brac Helpline", number: "16445" },
     { name: "Bangladesh Railway Helpline ", number: "163" }



  ];
  
  const service = services[Math.floor(Math.random() * services.length)];

  const entry = document.createElement("div");
  entry.className = "history-item";
  entry.textContent = `${service.name} - ${service.number}`;
  historyDiv.appendChild(entry);
}

function clearHistory() {
  historyDiv.innerHTML = "";
}
