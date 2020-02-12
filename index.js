const pdf = require("html-pdf");
const ejs = require("ejs");

const nome = "Leonardo Flores";
const curso = "Formação NodeJS";
const categoria = "Javascript ES6+";

ejs.renderFile("./index.ejs",{nome: nome, curso: curso, categoria: categoria}, (err, html) => {
  if(err){
    console.log(err);
  } else {
      pdf.create(html,{}).toFile("./meupdf.pdf", (err, res) => {
      if(err){
        console.log(err);
      }else {
        console.log(res);
      }
    });
  }
});


