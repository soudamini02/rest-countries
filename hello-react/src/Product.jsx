//  export default function Item(props){
    // console.log('...', props)
    // const name = props.name
    // const price = props.price

    // const {name, price} = props
    export default function Item({name, price,...others}){
    return (
        <>
        <h3>Name:- {name}</h3>
        <p>Price:- {price}</p>
        <p>{others.description ? `description:- ${others.description}`:''}</p> 
        <p>{others.brand ? `brand:- ${others.brand}`:''}</p>
        </>
    )
}