function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col p-5  mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>      
                    <a href={learnMore}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col p-5">
                    <img src={imageURL} alt="image" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;