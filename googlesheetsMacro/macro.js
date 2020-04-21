function converterNumeroParaColuna(num) {
  var s = '', t;

  while (num > 0) {
    t = (num - 1) % 26;
    s = String.fromCharCode(65 + t) + s;
    num = (num - t) / 26 | 0;
  }
  return s || undefined;
}



function criarUsuarios() {
  const spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getRange('E1:AH1').activate().setValue('/* INSERIR NOME */');
  spreadsheet.getRange('E2:AH10').activate().insertCheckboxes();

}


function criarResultadoDiario() {
  const spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('a1').setValue('=COUNTIF(E1:1;"*")');
  var tamanhoUsuarios = spreadsheet.getRange('a1').getValue();




  for (let linha = 12; linha < 21; linha++) {
    let stringFinal = ''
    for (let numeroColuna = 5; numeroColuna < tamanhoUsuarios + 5; numeroColuna++) {


      let nomeColuna = converterNumeroParaColuna(numeroColuna);
      let valorAnterior = spreadsheet.getRange(`E${linha}`).getValue();
      /* 
      * =SE(E2; E1 & " - "; "")
      */

      if (numeroColuna == 5) {
        stringFinal += `=IF(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "") & `
        //spreadsheet.getRange(`C${linha}`).setValue(`=SE(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "") & `);

      } else if (numeroColuna !== tamanhoUsuarios + 4) {
        stringFinal += `IF(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "") & `
        //spreadsheet.getRange(`C${linha}`).setValue(valorAnterior + `SE(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "") & `);

      } else {
        stringFinal += `IF(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "")`
        //spreadsheet.getRange(`C${linha}`).setValue(valorAnterior + `SE(${nomeColuna}${linha - 10}; ${nomeColuna}1 & " - "; "")`);
      }
    }

    spreadsheet.getRange(`E${linha}`).setValue(stringFinal);

  }
}
