import { useState } from "react";
import "./InputForm.css";

function InputForm() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState("Homem");
  const [calorie, setCalorie] = useState(-1);
  const [bmr, setBmr] = useState(-1);

  function CalorieCalc(e) {
    e.preventDefault();
    console.log(sexo);

    console.log(bmr)

    if (sexo === "Homem") {
      const b = 66.5 + 13.75 * peso + 5.003 * altura - 6.75 * idade;
      setCalorie(b);
      return;
    } else {
      const b = 655.1 + 9.563 * peso + 1.85 * altura - 4.676 * idade;
      setCalorie(b);
      return;
    }
  }

  return (
    <div className="main">
      <h1 className="title">BMR Calculator</h1>

      <form onSubmit={CalorieCalc} className="formulario">
        {/* ALtura em centimetros */}
        <input
          className="dados"
          type="number"
          placeholder="Altura em Centimetros"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        {/* Peso em Kg */}
        <input
          className="dados"
          type="number"
          placeholder="Peso em quilogramas"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        {/* Idade */}
        <input
          className="dados"
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        {/* Sexo */}
        <div className="sexo">
          <div className="radio">
            <input
              type="radio"
              value="Homem"
              checked={sexo === "Homem"}
              onChange={(e) => setSexo(e.target.value)}
            />
            <label>Homem</label>
          </div>

          <div className="radio">
            <input
              type="radio"
              value="Mulher"
              checked={sexo === "Mulher"}
              onChange={(e) => setSexo(e.target.value)}
            />
            <label>Mulher</label>
          </div>
        </div>

        <div className="lista-exercicio">
          <select Name="lista-exercicio" Size="1" onChange={(e) => setBmr(e.target.value)}>
            <option value={0}> Escolha o Nivel de Atividade Fisica</option>
            <option value={1.2}> Sedentario (Um pouco ou nada de exercicio por semana) </option>
            <option value={1.375}> Ligeiramente Ativo (Exercicios leves - 1 a 3 vezes por semana) </option>
            <option value={1.55}> Moderadamente Ativo (Exercicios moderados - 3 a 5 vezes por semana)</option>
            <option value={1.725}> Altamente Ativo (Exercicios intensos - 6 a 7 vezes por semana) </option>
          </select>
        </div>

        <button type="submit">Calcular</button>
      </form>

      {calorie > 0 ? (
        <h3>{(calorie*bmr).toFixed(2)} kcal</h3>
      ) : (
        <h3>Descubra a sua taxa metabolica basal!</h3>
      )}
    </div>
  );
}

export default InputForm;
