import React from 'react';
import './App.css';
import livroBabilonia from './img/livro.babilonia.jpg';
import estrela from './img/estrela.jpg';

const BookCard = () => {
  return (
    <div className="book-card">
      <img 
        className="book-image" 
        src={livroBabilonia} 
        alt="Babilonia Book" 
      />
      <div className="book-details">
        <h2 className="book-title">Babilônia: A mesopotâmia e o nascimento da civilização</h2>
        <p className="book-info">
          por Paul Kriwaczek (Autor), Vera Ribeiro (Tradutor), Marlene Suano (Ilustrador)<br />
        </p>
        <p className="book-rating">
          <img src={estrela} alt="Star" className="star" />
          <img src={estrela} alt="Star" className="star" />
          <img src={estrela} alt="Star" className="star" />
          <img src={estrela} alt="Star" className="star" />
          <img src={estrela} alt="Star" className="star" />
          &nbsp;4,6 de 5 estrelas&nbsp;&nbsp;784 avaliações de clientes
        </p>
        <p className="book-description">
          Em Babilônia, Paul Kriwaczek conta a história da antiga Mesopotâmia, desde as primeiras povoações, em torno de 5400 a.C., até a chegada dos persas no século VI a.C. O autor faz a crônica da ascensão e queda do reino babilônico durante esse período e analisa suas numerosas inovações materiais, sociais e culturais. O povo da Mesopotâmia lançou as bases do que hoje conhecemos como civilização – com o nascimento da escrita, do estado centralizado, da divisão do trabalho, da religião organizada, da matemática e da lei, entre muitas outras coisas fundamentais que nos servem até hoje. Nas cidades que construíram se desenrolou metade da história humana. No cerne da magistral narrativa de Kriwaczek está a glória da Babilônia ― “o portal dos deuses” ―, que teve seu apogeu no reinado do soberano amorita Hamurábi, que unificou a cidade entre 1800 e 1750 a.C. Embora o poder babilônico viesse a crescer e depois declinar nos séculos seguintes, a Babilônia preservou sua importância como centro cultural, religioso e político por mais de 4 mil anos.
        </p>
        <p className="book-price">R$ 50,00</p>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default BookCard;
