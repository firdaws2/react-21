const Title = ({ size, children,search,handleSearch }) => {
    return ( 
        <>
        <h1 style={{ fontSize: size, textAlign: 'center'}}>{children}</h1>
        <input value={search} onChange={handleSearch}/> 
        
        </>
    );
}
 
export default Title;