const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

fs.readFile("./data/doa.json", "utf-8", (err, jsonString) => {
   try {
      const data = JSON.parse(jsonString);
      console.log(data);
   } catch (error) {
      console.log(error);
   }

   console.log;
});

app.get("/", (req, res) => {
   res.json({ nama: " Rauliqbal", api: "doaharian-api.vercel.app/api" });
});

app.get("/api", (req, res) => {
   res.setHeader("Content-Type", "application/json");
   // res.send(fs.readFileSync("./data/doa.json", "utf-8"));
   res.json({
      status: 200,
      message: "Data Berhasil",
      data: [
         {
            title: "Doa Sebelum Tidur",
            arab: "بِاسْمِكَ رَبِّيْ وَضَعْتُ جَنْبِيْ، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِيْ فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِيْنَ",
            artinya:
               "Dengan nama Engkau, wahai Tuhanku, aku meletakkan lambungku. Dan dengan namaMu pula aku bangun daripadanya. Apabila Engkau menahan rohku (mati), maka berilah rahmat padanya. Tapi apabila Engkau melepaskannya, maka peliharalah, sebagaimana Engkau memelihara hamba-hambaMu yang shalih.",
         },
         {
            title: "Doa Bila Takut Dan Kesepian Ketika Tidur",
            arab: "أَعُوْذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِيْنِ وَأَنْ يَحْضُرُوْنِ",
            artinya: "Aku berlindung dengan kalimat Allah yang sempurna dari kemarahan dan siksaanNya, serta kejahatan hamba-hambaNya, dan dari godaan setan (bisikannya) serta jangan sampai mereka hadir (kepadaku).",
         },
         {
            title: "Doa Bangun Tidur",
            arab: "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرِ",
            artinya: "Segala puji bagi Allah, yang membangunkan kami setelah ditidurkanNya dan kepadaNya kami dibangitkan.",
         },
      ],
   });
});

app.listen(port, () => {
   console.log("API Berjalan");
});

module.exports = app;
