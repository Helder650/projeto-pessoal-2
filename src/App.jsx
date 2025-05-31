import { useState } from 'react'

export default function App() {
  const [selected, setSelected] = useState('HTML')

  const content = {
HTML: {
  title: 'HTML',
  description: 'HTML é a linguagem de marcação padrão para criar páginas da web. Ela define a estrutura do conteúdo por meio de elementos como títulos, parágrafos, listas, links, imagens e muito mais.',
  example: '<h1>Título</h1>'
},
CSS: {
  title: 'CSS',
  description: 'CSS é a linguagem usada para estilizar elementos HTML. Com o CSS, é possível controlar cores, fontes, espaçamentos, layouts responsivos e animações, proporcionando uma aparência visual agradável às páginas web.',
  example: 'h1 { color: red; }'
},
JavaScript: {
  title: 'JavaScript',
  description: 'JavaScript é uma linguagem de programação voltada para o desenvolvimento web, que permite adicionar interatividade, manipular elementos HTML e CSS dinamicamente, consumir APIs, validar formulários e muito mais no lado do cliente (navegador).',
  example: 'alert("Olá")'
},
React: {
  title: 'React',
  description: 'React é uma biblioteca JavaScript para construção de interfaces de usuário com base em componentes reutilizáveis. Criado pelo Facebook, o React permite criar aplicações web modernas, dinâmicas e reativas com maior eficiência e organização.',
  example: '<Botao />'
}
  }

  return (
    <div>
      <h1>LogicTech</h1>
      <h2> Biblioteca de Estudos de Programação</h2>

      {Object.keys(content).map(key => (
        <button key={key} onClick={() => setSelected(key)}>
          {key}
        </button>
      ))}

      <h3>{content[selected].title}</h3>
      <p>{content[selected].description}</p>
      <pre>{content[selected].example}</pre>
    </div>
  )
}