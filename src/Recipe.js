import React from 'react';
import style from './Recipe.module.css'

const Recipe = ( {title, calories, img, ingredients} ) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>Calories : {Math.round(calories*100)/100}</p>
            <p><b>INGREDIENTS</b></p>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={img} alt=""></img>
        </div>
    );
}

export default Recipe;