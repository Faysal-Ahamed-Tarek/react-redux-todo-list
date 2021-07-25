import React, { useRef } from 'react';

const Test= () => {
    const RefValue = useRef();
    const Array = [1,2,3,4,5,6];
    return (
        <>
         {Array.map((Item, index) =>{
                 return (<>
                     <li ref={RefValue} key={index}>{Item}</li>
                     <button onClick={() => console.log(RefValue.current)}>Edit</button>
                     </>)
             })}   
        </>
    );
};

export default Test;