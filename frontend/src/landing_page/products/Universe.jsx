function Universe() {
    return (
        <div className="container mt-4 p-2">
            <h1 className="text-center mt-5">The Zerodha Universe</h1>
            <p className="text-center mt-3">Extend your trading and investment experience even further with our partner plateforms</p>
            <div className="row">
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/smallcaseLogo.png" style={{ width: "160px", height: "60px" }} alt="Smallcase" />
                    <p className="text-muted small m-1">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/streakLogo.png" style={{ width: "150px", height: "55px" }} alt="Streak" />
                    <p className="text-muted small m-1">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "180px", height: "60px" }} alt="Sensibull" />
                    <p className="text-muted small m-1">Options trading platform</p>
                </div>
            </div>

            <div className="row">
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "200px", height: "60px" }} alt="Zerodha Fundhouse" />
                    <p className="text-muted small m-1">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/goldenpiLogo.png" style={{ width: "180px", height: "60px" }} alt="GoldenPi" />
                    <p className="text-muted small m-1">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5 text-center">
                    <img src="media/images/dittoLogo.png" style={{ width: "120px", height: "55px" }} alt="Ditto" />
                    <p className="text-muted small m-1">Insurance</p>
                </div>
            </div>
        </div>
    );
}

export default Universe;