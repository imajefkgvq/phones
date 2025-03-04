function toggleMenu() {
  document.getElementById("head3").classList.toggle("active");
}

async function show() {
  const api = "https://twof2-iphone.onrender.com/iphones";
  const respo = await fetch(api);
  const data = await respo.json();
  console.log(data);
  const namePhone = document.querySelectorAll("#name");
  const description = document.querySelectorAll("#description");
  const cost = document.querySelectorAll("#cost");
  for (i = 0; i <= 11; i++) {
    namePhone[i].textContent = data[i].model;
    description[i].textContent = data[i].description;
    cost[i].textContent = data[i].price;
  }
}
show();
