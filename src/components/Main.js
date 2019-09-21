import React from "react"
import Jokes from "./Jokes"
import MyInfo from "./MyInfo"
import productsData from "./vschoolProducts"
import Product from "./Product"
import Medicine from "./Medicine"

// function Main(){
//     const productComponent = productsData.map(item => <Product key={item.id} product={item}/>)

//     return(
//         <main>
//             {/* <Jokes joke={{question: "Joke 1", answer: "Hahaha"}}/>
//             <Jokes joke={{question: "Joke 2", answer: "Hahaha"}}/>
//             <Jokes joke={{question: "Joke 3", answer: "Hahaha"}}/>
//             <Jokes joke={{question: "Joke 4", answer: "Hahaha"}}/>
//             <Jokes joke={{question: "What is MSI"}}/> */}
//             {/* <MyInfo/> */}
//             {/* {productComponent} */}
//         </main>
//     )
// }

class Main extends React.Component{
    constructor(){
        super()
        this.state = productsData
    }

    render(){
        const medData = this.state.map(meds => <Medicine name={meds.name} desc={meds.description} />)
        return (
            <main>
                {medData}
            </main>
        )
    }
}

export default Main