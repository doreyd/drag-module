const dragging = (elemId, container = document.body) => {
  // Dom elements selection
  let elem = document.getElementById(elemId);

  // *********************************************************
  // **************** get & set position *********************
  // *********************************************************
  const getPosition = element => [element.offsetTop, element.offsetLeft];
  function changePosition(element, elementTop, elementLeft) {
    if (elementTop !== "same") element.style.top = elementTop + "px";
    if (elementLeft !== "same") element.style.left = elementLeft + "px";
  }
  // *********************************************************
  // **************** drag & drop ****************************
  // *********************************************************
  function allowDrop(event) {
    event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
  }

  function dragStart(element, event) {
    CursorY2 = event.pageY;
    CursorX2 = event.pageX;
    OldPosition = getPosition(element);
    DeltaY = CursorY2 - OldPosition[0];
    DeltaX = CursorX2 - OldPosition[1];
  }

  function dragging(element, event) {
    CursorY = event.pageY;
    CursorX = event.pageX;
    NewTop = CursorY - DeltaY;
    NewLeft = CursorX - DeltaX;
    changePosition(element, NewTop, NewLeft);
  }

  function startDragging(element) {
    element.onclick = () => {};
    element.setAttribute("draggable", "true");
    element.ondragstart = () => dragStart(element, event);
    element.ondrag = () => dragging(element, event);
    element.ondragend = () => {};
  }

  function stopDragging(element) {
    setNewAttribute(element, "draggable", "false");
    element.ondragstart = () => {};
    element.ondrag = () => {};
  }

  container.ondrop = () => drop(event);
  container.ondragover = () => allowDrop(event);
  startDragging(elem);
};
