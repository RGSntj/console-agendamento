import { format } from "date-fns";
import { CORES } from "./cores";
import { Utils } from "./Utils";
import { ptBR } from "date-fns/locale";

let horarios: string[] = ["09:00", "09:30", "10:00", "10:30", "11:00"];
let horariosAgendados: string[] = [];

const utils = new Utils(horarios, horariosAgendados);

let continuar = true;

let horaEscolhida: string = "";

while (continuar) {
  horarios = utils.verificarHorarios();
  let indexHora = utils.pegarHorario(horarios);

  if (indexHora === 0) continuar = false;
  else if (horarios.includes(horarios[indexHora - 1])) {
    let horario = horarios[indexHora - 1];
    horariosAgendados.push(horario);

    console.log(CORES["VERDE"], "Horário agendado com sucesso !");

    horaEscolhida = horario;
  } else {
    console.log("Horário indisponivel !");
  }
}

const dataAtual = new Date();

const dataFormatada = format(dataAtual, `dd/MM 'ás' ${horaEscolhida}`, {
  locale: ptBR,
});

console.log(`Data agendada: ${dataFormatada}`);

// console.log(`Horário agendado para dia: ${dataFormatada}`);

// horarios = utils.verificarHorarios();

// if (horarios.includes(horarios[horarioEscolhido - 1])) {
//   let horario = horarios[horarioEscolhido - 1];
//   console.log(horario);
// }

// console.log(horariosAgendados);

// const data = new Date();

// const dataToISO = data.toISOString();

// const dataFormatada = format(data, `dd/MM - ${horarios[1]}`, {
//   locale: ptBR,
// });

// console.log("Horário ISO: " + dataToISO);

// console.log("Horário formatado: " + dataFormatada);
