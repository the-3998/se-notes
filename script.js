let con = document.querySelector(".depart");
const cards = document.createElement("div");
cards.className = ".cards";
let did = ["comps", "it", "aids", "cs", "e&tc"];
for (let index = 0; index < did.length; index++) {
  const element = `
    <details>
        <summary>
            <div class="cards">${did[index]} Notes</div>
        </summary>
        <div class="subject-cards">
      </details>
  `;

  con.innerHTML += element;
}
let sub_cards = document.querySelectorAll(".subject-cards");

const subject_cards = [
  [
    {
      card: "1",
      did: "comps",
      subject: "MATHS-3",
      link: "./maths.html",
    },
    {
      card: "2 ",
      did: "comps",
      subject: "UHV",
      link: "./pdf/DBMS Experiment 1-1.pdf",
    },
    {
      card: "3 ",
      did: "comps",
      subject: "DS",
      link: "./pdf/DBMS Experiment 1-1.pdf",
    },
    {
      card: "4 ",
      did: "comps",
      subject: "DBMS",
      link: "./pdf/DBMS Experiment 1-1.pdf",
    },
    {
      card: "5 ",
      did: "comps",
      subject: "PS-3",
      link: "./pdf/DBMS Experiment 1-1.pdf",
    },
    {
      card: "6 ",
      did: "comps",
      subject: "IP",
      link: "./pdf/DBMS Experiment 1-1.pdf",
    },
  ],
  [],
  [],[],[],
];

subject_cards.forEach((subjectArray, index) => {
  if (subjectArray.length === 0) {
    const noContent = document.createElement("div");
    noContent.innerHTML = "Content is not available";
    sub_cards[index].appendChild(noContent);
  } else {
    subjectArray.forEach((subject) => {
      const card = document.createElement("a");
      const h4 = document.createElement("h4");
      const h3 = document.createElement("h3");
      card.className = "card";
      h4.innerHTML += subject.card;
      h3.innerHTML += subject.subject;
      sub_cards[index].appendChild(card);
      card.href = subject.link;
      card.appendChild(h4);
      card.appendChild(h3);
    });
  }
});

document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("click", (e) => {
    document.querySelectorAll("details").forEach((item) => {
      if (item !== details) {
        item.removeAttribute("open");
      }
    });
  });
});
