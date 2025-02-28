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

document.getElementById("search").addEventListener("keyup", () => {
  let info = document.getElementById("search").value.toUpperCase();
  let boxs = document.querySelectorAll(".ingrid");

  boxs.forEach((box) => {
    let names = box.querySelector("#name").innerText.toUpperCase();
    if (names.includes(info)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});
