function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5">
                    <img src={imageURL} alt="image" />
                </div>
                <div className="col p-5 mt-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                        <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{marginLeft:"50px"}} ><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;