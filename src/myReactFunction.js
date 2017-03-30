const numbers = [1, 2, 3, 4, 5];
const ListItems = numbers.map((number) => <li> {number * 2 }</li>);
ReactDOM.render(
	<h1>这是内容</h1>,
	document.getElementById('root')	
);

