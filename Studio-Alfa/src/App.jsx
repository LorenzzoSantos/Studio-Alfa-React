import './App.css'

function multa(velocidade) {
  if(velocidade <= 80) {
    return 'Pode seguir'
  } else {
    return 'Multado!'
  }
}

function carro () {
  const tipo = 'Renault Sandero'
  const placa = '12JX-MMJ5'
  const ano = 2010
  const velocidade = 50

  return (
    <>''
    <h1>Radar de velocidade</h1>
    <p>Carro: {tipo}</p>
    <p>Placa: {placa}</p>
    <p>Ano: {ano}</p>
    <p>Velocidade: {velocidade}</p>
    <p>Situação: {multa(velocidade)}</p>
    </>
  )
}

export default carro