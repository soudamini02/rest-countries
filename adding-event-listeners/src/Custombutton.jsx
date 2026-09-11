export default function CustomButton({value,clickMe}) {
    return (
        <button 
        style={{
            backgroundColor: "red",
            color: "greenyellow",
            border: "2px solid black"
        }}
        onClick={clickMe}
        >
            {value}   
        </button>
    )
}