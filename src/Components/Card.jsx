import React from "react";
import './styling/card.style.scss'

function Card() {
  return (
    <div>
      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">Skill Set</span>
              </h4>
            </div>
            <div class="card__details">
              <ul>
                <li>Advanced JS and CSS</li>
                <li>JS/CSS Preprocessors</li>
                <li>JS Frameworks</li>
                <li>Advanced Animations</li>
                <li>Deployment Pipelines</li>
                <li>Large Apps Architectures</li>
                <li>Naming Conventions</li>
              </ul>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__subject">react x tmdb API</p>
                <p class="card__title">PIPCORN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
