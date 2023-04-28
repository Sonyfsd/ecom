function ProductChildDetailsComponent(props) {
    return (
        <div>
            {props.productInfo && props.productInfo.detailedSpecifications && (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <h3>Specifications</h3>
                                <div>
                                    <p>In the Box       {props.productInfo.detailedSpecifications.general.inTheBox}</p>
                                    <p>Model Number     {props.productInfo.detailedSpecifications.general.modelNumber}</p>
                                    <p>Color       {props.productInfo.detailedSpecifications.general.color}</p>
                                    <p>Browser Type       {props.productInfo.detailedSpecifications.general.browserType}</p>
                                    <p>Sim Type       {props.productInfo.detailedSpecifications.general.simType}</p>
                                    <p>Touch Screen       {props.productInfo.detailedSpecifications.general.touchScreen}</p>
                                </div>
                            </div>
                            <div>
                                <h3>Ratings & Reviews</h3>
                                {props.productInfo.ratingReviews.map(rating => (
                                    <div>
                                        <p>Rating: {rating.rating}</p>
                                        <p>{rating.title}</p>
                                        <p>{rating.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h3>Questions & Answers</h3>
                                {props.productInfo.questionAnswers.map(rating => (
                                    <div>
                                        <p><b>Q: {rating.question}</b></p>
                                        <p>A: {rating.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>  
                </div>
            )}
        </div>
    )
}

export default ProductChildDetailsComponent;