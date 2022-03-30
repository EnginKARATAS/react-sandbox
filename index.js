function Navbar(params) {
    return <h1>Hello anam</h1>
}

const h1 = document.createElement("h1");
h1.textContent = "hello bozok world";
h1.className = "header";
document.getElementById("root").append(h1);

ReactDOM.render(<Navbar />, document.getElementById("root"));