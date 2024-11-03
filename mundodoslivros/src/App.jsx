import React, { useState } from 'react';
import './App.css';


function App() {
  const [showGenres, setShowGenres] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = [
    { name: 'Ficção', books: [ 
        { 
          title: 'Duna', 
          author: 'Frank Herbert', 
          cover: '/images/duna.jpg',
          synopsis: 'Duna é um romance de ficção científica que se passa no planeta desértico Arrakis, a única fonte da especiaria Melange, que é vital para a navegação espacial. A história segue Paul Atreides, um jovem cuja família assume o controle de Arrakis. Após uma traição, Paul se vê em meio a uma luta de poder complexa envolvendo a Casa Harkonnen, antiga governante do planeta.'
        },
        { 
          title: 'Jogos Vorazes', 
          author: 'Suzanne Collins', 
          cover: '/images/jogos-vorazes.jpg',
          synopsis: 'Em um futuro distópico, a nação de Panem, formada por doze distritos e governada pela opressiva Capital, realiza os Jogos Vorazes: uma competição anual em que jovens são forçados a lutar até a morte em uma arena televisiva. Para salvar sua irmã, Katniss Everdeen, do empobrecido Distrito 12, se oferece como tributo. Com a ajuda de Peeta, outro tributo, ela enfrenta desafios mortais e intrigas enquanto luta pela sobrevivência e questiona até onde está disposta a ir para vencer.' 
        }
      ]
    },
    { name: 'Fantasia', books: [ 
        { 
          title: 'Fogo e Sangue', 
          author: 'George R.R. Martin', 
          cover: '/images/fogo-e-sangue.jpg',
          synopsis:'Fogo e Sangue narra a história da Casa Targaryen, desde a fundação do Trono de Ferro por Aegon, o Conquistador, até a guerra civil conhecida como Dança dos Dragões. O livro explora eventos marcantes como a origem dos ovos de dragão de Daenerys e os perigos de visitar Valíria após sua destruição. Com mais de oitenta ilustrações de Dough Wheatley, oferece uma visão detalhada e enriquecedora da história de Westeros para os fãs de "A Guerra dos Tronos".' 
        },
        { 
          title: 'Coraline', 
          author: 'Neil Gaiman', 
          cover: '/images/coraline.jpg',
          synopsis: 'Coraline é uma história de Neil Gaiman sobre uma menina que se muda para um casarão antigo e descobre uma porta para um mundo alternativo. Nesse mundo, seus "outros pais" têm botões no lugar dos olhos e oferecem tudo o que ela poderia desejar. No entanto, Coraline logo percebe que esse mundo é perigoso e que voltar para sua verdadeira casa será um desafio muito maior do que esperava.' 
        }
      ]
    },
    { name: 'Mistério', books: [ 
        { 
          title: 'E Não Sobrou Nenhum', 
          author: 'Agatha Christie', 
          cover: '/images/e-nao-sobrou-nenhum.jpg',
          synopsis: 'Dez estranhos são convidados para uma ilha isolada sob pretextos diferentes. Eles descobrem que foram reunidos por um anfitrião desconhecido que pretende puni-los por crimes passados. Conforme os convidados são assassinados um por um, o grupo tenta descobrir a identidade do assassino antes que seja tarde demais.' 
        },
        { 
          title: 'Verity', 
          author: 'Colleen Hoover', 
          cover: '/images/verity.jpg',
          synopsis: 'Em "Verity", Lowen Ashleigh, uma escritora desempregada, é contratada para terminar a série de sucesso de Verity Crawford, que sofreu um acidente. Ao ficar na casa dos Crawford para pesquisar, Lowen encontra um manuscrito perturbador que revela segredos obscuros sobre Verity e sua família. Envolvida emocionalmente por Jeremy, o marido de Verity, Lowen enfrenta um dilema: expor os segredos chocantes ou protegê-los, enquanto se vê presa em um jogo psicológico perigoso.' 
        }
      ]
    },
    { name: 'Romance', books: [ 
        { 
          title: 'Mentira Perfeita', 
          author: 'Caroline Kepnes', 
          cover: '/images/mentira-perfeita.jpg',
          synopsis: '"Mentira Perfeita" conta a história de Júlia, que inventa um noivo fictício para agradar sua tia doente. Quando a tia se recupera e decide financiar um grande casamento, Júlia faz um acordo com Marcus Cassani, que precisa de uma "cuidadora" para convencer seus pais sobre sua independência. À medida que fingem estar noivos, a atração entre eles cresce, complicando seus planos e revelando sentimentos reais.' 
        },
        { 
          title: 'O Lado Feio do Amor', 
          author: 'Colleen Hoover', 
          cover: '/images/o-lado-feio-do-amor.jpg',
          synopsis: '"O Lado Feio do Amor" segue Tate Collins, que se muda para São Francisco e encontra Miles Archer, o enigmático vizinho e amigo de seu irmão. O que começa como uma atração física se transforma em um relacionamento intenso e complicado, apesar das regras que Miles impõe: sem perguntas sobre seu passado e sem esperanças para o futuro. Tate tenta seguir essas regras, mas a conexão profunda entre eles desafia as barreiras emocionais de Miles e complica os planos de ambos.' 
        }
      ]
    }
  ];

  const handleGenreClick = (genre) => {
    if (typeof genre === 'object') {
      setSelectedGenre(genre.books); // Define todos os livros do gênero selecionado
    } else {
      setSelectedGenre(null);
    }
  };

  const handleHomeClick = () => {
    setSelectedGenre(null);
    setShowGenres(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mundo Dos Livros</h1>
        <div className="header-content">
          <button className="home-button" onClick={handleHomeClick}>
            Home
          </button>
          <button className="genre-button" onClick={() => setShowGenres(!showGenres)}>
            Gêneros
          </button>
        </div>
        {showGenres && (
          <ul className="genre-list">
            {genres.map((genre, index) => (
              <li key={index} onClick={() => handleGenreClick(genre)}>
                {genre.name}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="App-content">
        {selectedGenre === null && (
          <p>Bem-vindo ao Mundo Dos Livros, onde você encontra alguns livros interessantes para complementar a sua sede de leitura!</p>
        )}
        {selectedGenre && (
          <div className="book-list">
            {selectedGenre.map((book, index) => (
              <div key={index} className="book-container">
                <div className="book-details">
                  <h2>{book.title}</h2>
                  <p>Autor: {book.author}</p>
                  <img src={book.cover} alt={`${book.title} cover`} className="book-cover"/>
                  <p><strong>Sinopse:</strong> {book.synopsis}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="App-footer">
        Feito por Isabelle
      </footer>
    </div>
  );
}


// Ajuste o caminho conforme necessário


  
  






export default App;
