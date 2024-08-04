let container = document.querySelector(".container");
const nav = document.createElement("nav");
const a = document.createElement("a");
const h1 = document.createElement("h1");
a.href = "./index.html";
a.innerHTML = "Home"
h1.innerHTML = "SE MATHS-3 NOTES";
container.appendChild(nav)
nav.appendChild(a)
nav.appendChild(h1);

let math_sub = document.createElement('div')
math_sub.className += 'subject-cards'
container.appendChild(math_sub)

const subject_cards = [
  {
    card: "1",
    title:"Chapter - 1",
    link: "./pdf/DBMS Experiment 2-2.pdf",
  },
  {
    card: "2",
    title:"Chapter - 2",
    link: "./pdf/DBMS Experiment 1-1.pdf",
  },
  {
    card: "3",
    title:"Chapter - 3",
    link: "./pdf/DBMS Experiment 1.pdf",
  },
  {
    card: "4",
    title:"Chapter - 4",
    link: "./pdf/DBMS Experiment 2 Final .pdf",
  },
  {
    card: "5",
    title:"Chapter - 5",
    link: "./pdf/Advantages-of-Cyberspace2[1].pdf",
  },
  {
    card: "6",
    title:"Chapter - 6",
    link: "./pdf/beneficiary.pdf",
  },
];

subject_cards.forEach((subject) => {
  const card = document.createElement("div");
  const h4 = document.createElement("h4");
  const h3 = document.createElement("h3");
  const prev = document.createElement("a")
  const down = document.createElement('a')
  card.className = "card";
  prev.className = "prev";
  down.className = "down";
  h4.innerHTML += subject.card;
  h3.innerHTML += subject.title;
  prev.innerText += "Preview"
  down.innerText += "Download";
  // prev.innerHTML += ""
  prev.href = subject.link;
  down.href = subject.link;
  down.download = ""
  math_sub.appendChild(card);
  card.appendChild(h4);
  card.appendChild(h3);
  card.appendChild(down);
  card.appendChild(prev);
});
