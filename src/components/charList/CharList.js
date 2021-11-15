import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {

    state = {
        CharList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading:false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        const items = arr.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li 
                    className='char__item'
                    key={item.id}
                    onClick={() => this.props.onCharSelected}
                    onClick={() => this.props.onCharListLoaded(item.id)}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className='char__name'>{item.name}</div>
                </li>
            )

        });

        return (
            <ul className='char__grid'>
                {items}
            </ul>
        )
    }


    
        render() {
            return (
                <div className="char__list">
                    <ul className="char__grid">
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item char__item_selected">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                    </ul>
                    <button className="button button__main button__long">
                        <div className="inner">load more</div>
                    </button>
                </div>
            )
        }
    
}

export default CharList;