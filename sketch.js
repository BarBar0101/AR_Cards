const gfxs = []; // The Array will contain the individual 2 layers for marker 7 and marker 9
const W = 240; // width of the canvas (square)

let img1, img2; // Declare variables for the images

function preload() {
  img1 = loadImage('Wooloo.png'); // Load the image for marker 7
  img2 = loadImage('Jirachi.png'); // Load the image for marker 9
}

function setup() {
  // Create layers for marker IDs 7 and 9
  const markerIds = [7, 9]; // Marker IDs to use
  
  markerIds.forEach((markerId, index) => {
    const gfx = createARGraphics(W, W, P2D, { scale: 1, markerId: markerId }); // Create layer with specific markerId and square canvas
    gfx.noStroke(); // Disable stroke for each layer
    gfxs.push(gfx); // Insert each layer into the gfx array
  });
}

function draw() {
  //translate(0,-800);
  // Loop through each individual layer inside the gfxs array
  gfxs.forEach((gfx, index) => {
    gfx.clear(); // Clear the layer first
    gfx.push();
    
    
    // Calculate scaling factor to fit the image within the square canvas (W x W)
    let scale;
    if (index === 0) {
      scale = Math.min(W / img1.width, W / img1.height);
    } else if (index === 1) {
      scale = Math.min(W / img2.width, W / img2.height);
    }
    
    // Calculate the scaled width and height
    let newWidth = scale * (index === 0 ? img1.width : img2.width);
    let newHeight = scale * (index === 0 ? img1.height : img2.height);
    
   // gfx.translate(0, - newHeight * 2);

    // Display the image depending on the marker index, and ensure the image fits within the canvas
    if (index === 0) { // Marker 7 (index 0)
      gfx.image(img1, W / 2 - newWidth / 2, W / 2 - newHeight / 2, newWidth, newHeight); 
    }
    if (index === 1) { // Marker 9 (index 1)
      gfx.image(img2, W / 2 - newWidth / 2, W / 2 - newHeight / 2, newWidth, newHeight); 
    }
    gfx.pop();
  });
}
