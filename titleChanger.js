const titles = [
  "We are",
  "Youth Action Council",
  "(YAC)",
  "Youth",
  "Action",
  "Council",
  "!"
];
let currentIndex = 0;

function changeTitle() {
  document.title = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 1000);
