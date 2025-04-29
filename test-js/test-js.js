{
  /* <script>
const list = [];
const input = document.getElementById("itemInput");
const ul = document.getElementById("shoppingList");
function addItem() {
  const value = input.value.trim();
  if (value) {
    list.push(value);
    const li = document.createElement("li");
    li.textContent = value;
    li.className =
      "bg-white px-4 py-2 rounded shadow hover:bg-gray-50 transition";
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }
}
</script> */
}
const list = [];
const input = document.getElementById("itemInput");
const ul = document.getElementById("shoppingList");
function addItem() {
  const value = input.value.trim();
  if (value) {
    list.push(value);
    const li = document.createElement("li");
    li.textContent = value;
    li.className =
      "bg-white px-4 py-2 rounded shadow hover:bg-gray-50 transition";
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }
}
