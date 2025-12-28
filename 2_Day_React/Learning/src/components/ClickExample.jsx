function ClickExample () {
    const handleClick = () =>{
        alert("Button Click 😘");
    }
    return (
    <div>
        <p>Learning Event handling in React</p>
        <button onClick={handleClick}>Click Button!</button>
    </div>
    )
}

export default ClickExample;