const title = document.querySelector("#title");
const container = document.querySelector("#response");
const desc = document.querySelector("#desc");
const info = document.querySelector("#info");

export function clearHtml() {
  title.innerText = ``;
  container.innerHTML = ``;
  desc.innerHTML = ``;
  info.innerHTML = ``;
}
