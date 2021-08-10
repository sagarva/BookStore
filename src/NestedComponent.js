import React from 'react'

function NestedComponent() {
    return (
        <div>
            <h1>This is Parent Component</h1>
            <Child /> {/* Called Chlid component here*/}
        </div>
    )
}

const Child = () =>{    //Child Function
    return(
        <div>
            <h3>T am Kid</h3>
        </div>
    )
}

export default NestedComponent
