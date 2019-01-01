import Component from '@ember/component';
import { action } from '@ember-decorators/object';

// Controls speed of flames (cannot be greater than 255)
const FIRE = 255;

export default class FireComponent extends Component {
  eternalFlame = true

  didInsertElement() {
    // Generate internal tracking of fire
    this._buildPixels();

    // Build image element for drawing
    this.image = this.context.createImageData(
      this.canvas.width,
      this.canvas.height
    );

    this.startFire();
    this._loop();
  }

  @action
  startFire() {
    for (let y = this.canvas.height - 5; y < this.canvas.height; y++) {
      for (let x = 0; x < this.canvas.width; x++) {
        this.pixels[y][x] = FIRE;
      }
    }
  }

  @action
  toggleEternalFlame() {
    this.startFire();
    this.toggleProperty('eternalFlame');
  }

  _buildPixels() {
    this.pixels = [];

    for (let y = 0; y < this.canvas.height; y++) {
      const row = [];

      for (let x = 0; x < this.canvas.width; x++) {
        row.push(0);
      }

      this.pixels.push(row);
    }
  }

  _loop() {
    setTimeout(() => { this._renderFire(); }, 1);
  }

  _renderFire() {
    this._growFire();
    this._drawFire();
    this._loop();
  }

  // Update each pixel's life
  _growFire() {
    for (let y = 0; y < this.canvas.height; y++) {
      for (let x = 0; x < this.canvas.width; x++) {
        if (this.pixels[y][x] !== 0) {
          this._growPixel(y, x);
        }
      }
    }
  }

  // Decay a pixel for this cycle as well as propagate its flame
  _growPixel(y, x) {
    const value = this.pixels[y][x];
    const ySpread = Math.round(Math.random() * 5);
    const xSpread = Math.round(ySpread - 2.6);
    let targetX = x + xSpread;
    let targetY = y - (ySpread + 1);

    // Lower values should decay faster
    // This has an interesting relationship with the colors as it helps control the 'glow' from a flame
    const decay = 8 - (value / 51);

    // Check for out of bounds
    if (targetY < 0)
      targetY = 0;
    if (targetX < 0)
      targetX = 0;
    if (targetX > this.canvas.width)
      targetX = this.canvas.width - 1;

    // Energy transfer isn't free!
    this.pixels[targetY][targetX] = this.pixels[y][x] - (decay / 4);

    // Either we have a temporal flame or we aren't on the bottom y
    if (!this.eternalFlame || this.eternalFlame && y !== this.canvas.height - 1) {
      this.pixels[y][x] = value - decay;
    }
  }

  // Draw current pixels
  _drawFire() {
    for (let y = 0; y < this.canvas.height; y++) {
      for (let x = 0; x < this.canvas.width; x++) {
        this._setImagePixel(y, x, this.pixels[y][x]);
      }
    }

    // Use image data so we only have to do a single paint per cycle
    this.context.putImageData(this.image, 0, 0);
  }

  // Set a specific x/y pixel with the appropriate color depending on its value
  _setImagePixel(y, x, value) {
    const index = (y * this.canvas.width * 4) + (x * 4);

    // Only a shade of red
    if (value < FIRE * .5) {
      this.image.data[index] = value;   // red
      this.image.data[index + 1] = 0;       // green
      this.image.data[index + 2] = 0;       // blue

    // Mix of orange
    } else if (value < FIRE) {
      const offset = value - (FIRE * .4);

      this.image.data[index] = 255;         // red
      this.image.data[index + 1] = offset * 1.7; // green
      // (value - (FIRE * .4)) * 1.7; // green
      this.image.data[index + 2] = 0;       // blue

    // White
    } else if (value === FIRE) {
      this.image.data[index] = 255;         // red
      this.image.data[index + 1] = 255;     // green
      this.image.data[index + 2] = 255;     // blue
    }

    this.image.data[index + 3] = 255;       // A
  }

  get canvas() {
    if (!this._canvas)
      this._canvas = this.element.querySelector('canvas');

    return this._canvas;
  }

  get context() {
    if (!this._context)
      this._context = this.canvas.getContext('2d');

    return this.canvas.getContext('2d');
  }
}
