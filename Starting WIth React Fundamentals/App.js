const heading = React.createElement("div",{id : "parent"}, [
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"I am h1 tag")
    ]),
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"I am h1 tag")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);