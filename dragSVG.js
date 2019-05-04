// This is a module for drag and drop SVG elements

const getSVGdim = SVGid => {
  let svg = document.getElementById(SVGid);
  //   let svgH = svg.getAttribute("height");
  //   let svgW = svg.getAttribute("width");
  let svgH = svg.height.animVal.value;
  let svgW = svg.width.animVal.value;

  //   let svgH = svg.height[0].animVal.value;
  //   let svgW = svg.width[0].animVal.value;
  return [svgH, svgW];
};

let cir = document.getElementById("circle");
let rec = document.getElementById("rect");
let dim = getSVGdim("svg");

const coord = e => {
  let cursX = e.pageX;
  let cursY = e.pageY;
  let elemX = e.target.x ? e.target.x.animVal.value : e.target.cx.animVal.value;
  let elemY = e.target.y ? e.target.y.animVal.value : e.target.cy.animVal.value;
  return [cursX, cursY, elemX, elemY];
};

cir.onmousedown = e => {
  console.log(coord(e));
};

rec.onmousedown = e => {
  console.log(coord(e));
};
