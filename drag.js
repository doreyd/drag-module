// *********************************************************
// **************** get & set position *********************
// *********************************************************
const getPosition = element => [element.offsetTop, element.offsetLeft];
function changePosition(element, elementTop, elementLeft) {
  if (elementTop !== "same") element.style.top = elementTop + "px";
  if (elementLeft !== "same") element.style.left = elementLeft + "px";
}
// *********************************************************
