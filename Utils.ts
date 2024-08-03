import prompt from "prompt-sync";

const input = prompt();

export class Utils {
  constructor(
    private readonly horariosD: string[],
    private readonly horariosA: string[]
  ) {}

  pegarHorario(horariosDisponiveis: string[]) {
    let i = 1;

    console.log("Agendamente de horário. Digite '0' para Sair.");

    for (const hora of horariosDisponiveis) {
      console.log(`${i++} - ${hora}`);
    }

    return Number(input("Selecione um horário > "));
  }

  public verificarHorarios() {
    const horariosDisponiveis: string[] = [];

    for (const hora of this.horariosD) {
      if (!this.horariosA.includes(hora)) {
        horariosDisponiveis.push(hora);
      }
    }

    return horariosDisponiveis;
  }
}
