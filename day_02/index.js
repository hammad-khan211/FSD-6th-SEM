const getData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json()
        console.log(res);
    } catch (error) {
        console.log("Some error occured");
        
    }
}
getData();