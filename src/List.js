import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ["Bob", "Alice", "Dora"]
        };
    }

    reverseList = () => {
        this.setState({ names: this.state.names.reverse() });
    };

    render() {
        console.log("Render List Component");
        return (
            <div>
                <ActionButton
                    callback={this.reverseList}
                    text="Reverse names"
                />
                {this.state.names.map((name, index) => {
                    return <h5 key={name}>{name}</h5>;
                })}
            </div>
        );
    }
}

export default List;
