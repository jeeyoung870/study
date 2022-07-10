const vertexes = [
    "D1",
    // "D2",
    // "D3",
    "M1",
    "M10",
    "M11",
    "M2",
    "M4",
    "M5",
    "M7",
    "M8",
    "W1",
    "W2",
    "Y12",
    // "Y1M1",
    // "Y1M10",
    // "Y1M11",
    // "Y1M2",
    // "Y1M4",
    // "Y1M5",
    // "Y1M7",
    // "Y1M8",
    "Y1Q",
    "Y1T",
    "Y25",
    // "Y2M1",
    // "Y2M10",
    // "Y2M11",
    // "Y2M2",
    // "Y2M4",
    // "Y2M5",
    // "Y2M7",
    // "Y2M8",
    "Y2Q",
    "Y2T",
    "Y30",
    "Y3H",
    "Y3Q",
    "Y3T",
    "Y4H",
    "Y4Q",
    "Y4T",
    "Y5H",
    "Y5Q",
    "Y5T",
    "Y6",
    "Y6H",
    "Y6Q",
    "Y6T",
    "Y7H",
    "Y7Q",
    "Y7T",
    "Y8",
    "Y8H",
    "Y8Q",
    "Y8T",
    "Y9",
    "Y9H",
    "Y9Q",
    "Y9T"
];
// IRC_GRP_ID 는 1~75
const groupNum = 75;
const scenId = 123;

const queryDiv = document.getElementById("query");

for(let i=1; i<=groupNum; i++) {
    vertexes.forEach(vertex => {
        const queryList = document.createElement("div");
        queryList.innerText = 
            ` INSERT INTO SCEN_IRC2_MRTY VALUES(${scenId},${i},'${vertex}',0); `;
        queryDiv.appendChild(queryList);
    });
}