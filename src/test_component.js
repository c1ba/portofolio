import React from 'react';

export default class TestComponent extends React.Component{
    constructor(props){
        super(props);
        this.do_click = this.do_click.bind(this);
        this.state={
            counter: 0
        };
        this.AnimRef=React.createRef();
    }

    do_click=()=>{
        const reffo= this.AnimRef.current;
        reffo.classList.toggle("ciao_text_hold")
      }
    render(){
        return (
            <div>
                <h1 ref={this.AnimRef} className="ciao_text" onClick={this.do_click}>CIAO</h1>
            </div>
        )
    }
}