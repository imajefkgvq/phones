function toggleMenu() {
  document.getElementById("head3").classList.toggle("active");
}
async function showPhone() {
  const api = "https://twof2-iphone.onrender.com/iphones";
  const respo = await fetch(api);
  let data = await respo.json();
  data = data.slice(12, 22);

  console.log(data);

  const namePhone = document.querySelectorAll("#name");
  const description = document.querySelectorAll("#description");
  const cost = document.querySelectorAll("#cost");

  for (let i = 0; i < data.length; i++) {
    namePhone[i].textContent = data[i].model;
    description[i].textContent = data[i].description;
    cost[i].textContent = data[i].price;
  }
}
showPhone();
