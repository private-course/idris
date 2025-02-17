import Kronometre from "./Kronometre.js";

const kronometre = new Kronometre();
kronometre.basla();
setTimeout(() => {
  kronometre.dur();
  kronometre.sonuc();
}, 12000);
