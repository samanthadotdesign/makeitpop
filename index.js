let hPatBass;
let hPatKick;
const mouseClicked = () => {
  hPatBass = [0, 0, 0, 0];
  hPatKick = [0, 0, 0, 0];
  const hPhrase = new p5.Phrase('mySound', (time) => mySound.play(time), hPatBass);
  drums = new p5.Part();
  drums.addPhrase(hPhrase, hPraseKick);

  const hPraseKick = new p5.Phrase('kickSound', (time) => kickSound.play(time), hPatKick);
  kick = new p5.Part();
  kick.addPhrase(hPraseKick);

  console.log(hPhrase);
  console.log(drums);
  mySound.play(140);
  kickSound.play(140);
  kick.loop();
  drums.loop();
};
