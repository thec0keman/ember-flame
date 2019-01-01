import Component from '@ember/component';
import { action } from '@ember-decorators/object';

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 300;

// Controls precision of flame calculation (cannot be greater than 255)
const FIRE = 255;
const DECAY_CONSTANT = FIRE / 5;

// Random seed
const RANDOM_SEED = 5;
// How fast flames spread vertically
const VERTICAL_SPEED = 1.5;
// How fast flames spread horizontally.  Affects how many gaps are between pixels.
const HORIZONTAL_SPEED = 1.2;
// How much energy is transferred when a flame grows.
const TRANSFER_DECAY = .25;

const halfRandom = RANDOM_SEED / 2;

const redLookup = [];
const greenLookup = [];
const blueLookup = [];

const colorMid = .5;
const redThreshold = FIRE * colorMid;

// Generate lookup values for colors
for (let i = 0; i < FIRE - 1; i++) {
  // Red half of flame
  if (i < redThreshold) {
    redLookup.push(i);
    greenLookup.push(0);
  } else {
    redLookup.push(255);

    const offset = i - (FIRE * .4);

    greenLookup.push(offset * 1.7);
  }

  blueLookup.push(0);
}
// Last color
redLookup.push(255);
greenLookup.push(255);
blueLookup.push(255);

export default class FireComponent extends Component {
  eternalFlame = true
  canvasWidth = CANVAS_WIDTH
  canvasHeight = CANVAS_HEIGHT

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
    const random = Math.random() * RANDOM_SEED;
    const midRandom = random - halfRandom - 1;

    let targetX = Math.round(x + (midRandom * HORIZONTAL_SPEED));
    let targetY = Math.round(y - (random * VERTICAL_SPEED));

    const flameProgress = value / FIRE; // 0 - 1
    const intensity = 1.0 - flameProgress; // 1 - 0
    const decay = 8 - (value / DECAY_CONSTANT);

    // Check for out of bounds
    if (targetY < 0)
      targetY = 0;
    if (targetY >= this.canvas.height)
      targetY = this.canvas.height - 1;
    if (targetX < 0)
      targetX = 0;
    if (targetX >= this.canvas.width)
      targetX = this.canvas.width - 1;

    // Energy transfer isn't free!
    // const transferredValue = this.pixels[y][x] - Math.round(decay * TRANSFER_DECAY);
    const transferredValue = this.pixels[y][x] - Math.round(decay * TRANSFER_DECAY);

    this.pixels[targetY][targetX] = transferredValue > 0 ? transferredValue : 0;

    // Should this pixel decay?  That depends on whether this is the bottom pixel and if eternalFlame is true
    if (!this.eternalFlame || this.eternalFlame && y !== this.canvas.height - 1) {
      const updatedValue = Math.round(value - decay);

      this.pixels[y][x] = updatedValue > 0 ? updatedValue : 0;
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

    this.image.data[index + 0] = redLookup[value];       // red
    this.image.data[index + 1] = greenLookup[value];     // green
    this.image.data[index + 2] = blueLookup[value];      // blue
    this.image.data[index + 3] = 255;                    // A
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
