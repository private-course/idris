export default class Kronometre {
  constructor() {
    this.sayac = false;
    this.baslangicZaman = 0;
    this.bitisZaman = 0;
  }

  basla() {
    if (!this.sayac) {
      this.baslangicZaman = new Date();
      this.sayac = true;
    } else {
      console.log("Zaten çalışıyor");
    }
  }

  dur() {
    if (this.sayac) {
      this.bitisZaman = new Date();
      this.sayac = false;
    } else {
      console.log("Çalışmıyor ki dursun.");
    }
  }

  sonuc() {
    if (this.sayac) {
      console.log("Kronometre hala çalışıyor. Lütfen durdurun.");
      return;
    }

    let elapsedMilliseconds = this.bitisZaman - this.baslangicZaman;
    let elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    let seconds = elapsedSeconds % 60;
    let minutes = Math.floor(elapsedSeconds / 60) % 60;
    let hours = Math.floor(elapsedSeconds / 3600);

    let formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    console.log(`Geçen süre: ${formattedTime}`);
    return formattedTime;
  }

  sifirla() {
    this.sayac = false;
    this.baslangicZaman = 0;
    this.bitisZaman = 0;
  }
}
