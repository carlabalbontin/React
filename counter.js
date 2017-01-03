// Introduction to React.js
// By Facebook Developers
// https://www.youtube.com/watch?v=XxVg_s8xAms



var Counter = React.createClass({
	getInitialState: function(){
		return {count: this.props.initialCount};
	},

	addToCount: function(delta){
		this.setState({count: this.state.count + delta})
	},

	render: function(){
		return (
			<div>
				<h3>Count: {this.state.count}</h3>
				<ActionButton text="+1" onAction={this.addToCount.bind(this, 1)} />
				<ActionButton text="-1" onAction={this.addToCount.bind(this, -1)} />
			</div>
		);
	}

});

// Define the ActionButton
var ActionButton = React.createClass({
	render: function(){
		return (
			<button class="ActionButton" onClick={this.props.onAction} >
				<span>{this.props.text}</span>
			</button>
		);
	}
});


<Counter initialCount={4} />


/*
Your render function describes your UI at any point in time, meaning that if your text were to change or your function handler were to change, we would figure out the minimum set of DOM mutations needed to carry out that effect.
If your text changes from "Book Flight" to "Give Talk" we would find the <span> affected by that text and only flip the inner text of that <span>. We wouldn't touch the surrounding <div> or <button>  
*/



