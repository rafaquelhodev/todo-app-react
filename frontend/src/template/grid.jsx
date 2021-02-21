import React, { Component } from "react"

let columnMapBootstrap = ["xs", "sm", "md", "lg"];

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(" ") : [];
        let classes = "";

        for (let index = 0; index < 4; index++) {
            if (cols[index]) {
                classes += `col-${columnMapBootstrap[index]}-${cols[index]} `;
            }
        }

        return classes.trim("");
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12);
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}