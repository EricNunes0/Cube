const cubes = document.querySelectorAll(".cube").forEach((cube) => {
    const cubeColor = cube.getAttribute("color");
    const cubeTopColor = cube.getAttribute("top-color") || "#222";
    const cubeWidth = (cube.getAttribute("size") || cube.getAttribute("width")) + "px";
    const cubeHeight = (cube.getAttribute("size") || cube.getAttribute("height")) + "px";
    cube.style.width = cubeWidth;
    cube.style.height = cubeHeight;

    const cubeTop = document.createElement("div");
    cubeTop.style = `
        --cube-width: 30px;
        --cube-height: 30px;
        --cube-color: ${cubeColor};
        --cube-top-color: ${cubeTopColor};
        --cube-shadow: 0px 30px 120px ${cubeColor}10,
        0px 0px 200px ${cubeColor}20,
        0px 0px 300px ${cubeColor}40,
        0px 0px 400px ${cubeColor}60,
        0px 0px 500px ${cubeColor}80;
        width: ${cubeWidth};
        height: ${cubeHeight};
        transform: rotateX(90deg) translateZ(calc(${cubeWidth} / 2));
    `
    cube.appendChild(cubeTop);

    const cubeDiv = document.createElement("div");
    for(let i = 0; i <= 3; i++) {
        const cubeDivSpan = document.createElement("span");
        cubeDivSpan.style = `
            background-image: linear-gradient(${cubeTopColor}, ${cubeColor});
            transform: rotateY(calc(90deg * ${i})) translateZ(calc(${cubeWidth} / 2));
        `;
        cubeDiv.appendChild(cubeDivSpan);
    };
    cube.appendChild(cubeDiv);
});