import React, {Component} from 'react';
import Content from './content-page';
import Listing from './listing';

// History types
// 1. Memmory History, browser, hash history

export default class Application extends Component {
    constructor() {
        super();
        this.state = {
            list : ['Apple', 'Mamgo', 'Banana']
        }
    }

    handleClick = () => {
        this.setState({list : ['Mango', 'Apple', 'Banana']})
        //console.log('Test')
    }

    render()
    {
        const content = 'Hello I am from content';
        const list = ['Apple', 'Mamgo', 'Banana']; 
        return (
            <div>
                <h3>Hi Friends, I am component with state less component as child.</h3>
                <div><Content data={content}/></div>
                <Listing list={this.state.list} clickHandler={this.handleClick} />
            </div>
        )
    }
}
