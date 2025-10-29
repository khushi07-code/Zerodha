function Education() {
    return ( 
        <div className="container mt-4 ">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"90%"}}/>
                </div>
                <div className="col-6  mt-5">
                    <h3 className="mb-4 mt-4">Free and open market education</h3>
                    <p>Varsity , the largest online market education book in the worls covering everthing from the basis to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i> </a>
                    <p className="mt-4">TradingQ&A ,the most active trading and investment community in India for all your market</p>
                    <a href="#" style={{textDecoration:"none"}}>TrandingQ&A<i class="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;