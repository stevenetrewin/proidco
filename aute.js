function getElementPositionsByClass(className) {
    const elements = document.getElementsByClassName(className);
    const positions = [];

    for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        positions.push({ top: rect.top, left: rect.left });
    }

    return positions;
}

const positions = getElementPositionsByClass('myClass');
console.log(positions); 
// Output: [{top: ..., left: ...}, {top: ..., left: ...}, ...]
