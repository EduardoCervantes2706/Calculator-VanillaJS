import './style.css'
import Calculator from './calculator.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1 class="header josefin-sans-uniquifier">JS Vanilla Calculator</h1>
    <p class="subheader josefin-sans-uniquifier">By <span>Luis Eduardo Cervantes Jaramillo</span></p>
    <div class="calculator-container">
      <div class="josefin-sans-uniquifier" id="display"><p id="display-text"></p></div>
      <div class="buttons-container">
        <div class="buttons-subcontainer josefin-sans-uniquifier">
          <p class="button">7</p>
          <p class="button">8</p>
          <p class="button">9</p>
          <p class="button op-button">/</p>
          <p class="button">4</p>
          <p class="button">5</p>
          <p class="button">6</p>
          <p class="button op-button">*</p>
          <p class="button">1</p>
          <p class="button">2</p>
          <p class="button">3</p>
          <p class="button op-button">-</p>
          <p class="button">0</p>
          <p class="button">⋅</p>
          <p class="button eq-button">=</p>
          <p class="button op-button">+</p>
          <p class="button eq-button">C</p>
        </div>
      </div>
    </div>
  </div>
`

Calculator()