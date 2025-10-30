// cria um código de barras de 49 dígitosa a partir de alguns parâmetros fornecidos
// PARAMETROS:
// @vlTotal: {integer, 11 digitos, sem virgula para separar decimais} valor total do boleto
// @flag: {integer, 2 digitos} indica quais campos são de preenchimento obrigatório. Padrão (flag = 14).
// @recolhimento: {integer, 5 digito} código de recolhimento de GRU
// @codBBGR: {integer, 5 dígitos} tabela de-para identificar a ugArrecadadora na tabela ./data/codbbgr.csv

function geraCodBarrasNum(vlTotal, flag = 14, recolhimento, codBBGR) {
  // valida parâmetros
  if (typeof vlTotal !== "number" || vlTotal < 0 || vlTotal >= 100000000000) {
    throw new Error(
      "Parâmetro vlTotal inválido. Deve ser um número inteiro entre 0 e 99999999999."
    );
  }
  if (typeof flag !== "number" || flag < 1 || flag > 19) {
    throw new Error(
      "Parâmetro flag inválido. Deve ser um número inteiro entre 1 e 19."
    );
  }
  if (
    typeof recolhimento !== "number" ||
    recolhimento < 0 ||
    recolhimento >= 100000
  ) {
    throw new Error(
      "Parâmetro recolhimento inválido. Deve ser um número inteiro entre 0 e 99999."
    );
  }
  if (typeof codBBGR !== "number" || codBBGR < 0 || codBBGR >= 100000) {
    throw new Error(
      "Parâmetro codBBGR inválido. Deve ser um número inteiro entre 0 e 99999."
    );
  }

  // formata os parâmetros para o tamanho correto
  const vlTotalStr = vlTotal.toString().padStart(11, "0");
  const flagStr = flag.toString().padStart(2, "0");
  const recolhimentoStr = recolhimento.toString().padStart(5, "0");
  const codBBGRStr = codBBGR.toString().padStart(5, "0");
  const minuteStamp = Date.now().toString().slice(-6); // últimos 6 dígitos do timestamp atual em milissegundos
}
