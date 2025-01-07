const nomeHeroi = "MACROHEAD";
let xpHeroi = 4001;
let rankHeroi;

switch (true) {
  case xpHeroi >= 0 && xpHeroi <= 1000:
    rankHeroi = "Ferro";
    break;
  case xpHeroi >= 1001 && xpHeroi <= 2000:
    rankHeroi = "Bronze";
    break;
  case xpHeroi >= 2001 && xpHeroi <= 5000:
    rankHeroi = "Prata";
    break;
  case xpHeroi >= 5001 && xpHeroi <= 7000:
    rankHeroi = "Ouro";
    break;
  case xpHeroi >= 7001 && xpHeroi <= 8000:
    rankHeroi = "Platina";
    break;
  case xpHeroi >= 8001 && xpHeroi <= 9000:
    rankHeroi = "Ascendente";
    break;
  case xpHeroi >= 9001 && xpHeroi <= 10000:
    rankHeroi = "Imortal";
    break;
  case xpHeroi >= 10001:
    rankHeroi = "Radiante";
    break;
  default:
    rankHeroi = "Sem Rank";
}

console.log(`O nome do herói é ${nomeHeroi} está no nível de ${rankHeroi}`);
