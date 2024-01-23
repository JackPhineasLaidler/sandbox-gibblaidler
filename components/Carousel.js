import { useState, useEffect, useRef } from "react";

const Carousel = ({carouselContent}) => {

    const carouselSlider = useRef(null);
    const carouselContainer = useRef(null);

    const [isScrolling, setIsScrolling] = useState(false);
    const [carouselPosition, setCarouselPosition] = useState(0);
    const [carouselContainerSize, setCarouselContainerSize] = useState(0);


    const handleScrolling = () => {
        setIsScrolling(true); 
        setTimeout(() => setIsScrolling(false) , 400);
    }

    const getCardPadding = () => {
        const card = getComputedStyle(carouselSlider.current.children[0]);
        return card.paddingRight;
    }

    const handleMoveRightPressed = () => {
        handleScrolling();

        const moveLeftValue = carouselSlider.current.scrollLeft + carouselContainerSize + parseFloat(getCardPadding());

        carouselSlider.current.scrollTo({
            top: 0,
            left: moveLeftValue,
            bahviour: 'smooth'
        });

        if (carouselSlider.current.scrollWidth - carouselContainerSize - moveLeftValue <= 0) return setCarouselPosition(1);
        setCarouselPosition(null);
    }

    const handleMoveLeftPressed = () => {
        handleScrolling();

        const moveLeftValue = carouselSlider.current.scrollLeft - carouselContainerSize - parseFloat(getCardPadding());
        carouselSlider.current.scrollTo({
            top: 0,
            left: moveLeftValue,
            bahviour: 'smooth'
        });

        if (moveLeftValue <= 0) return setCarouselPosition(0);
        setCarouselPosition(null);
    }

    const handleWindowResize = () => {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(
            setCarouselContainerSize(carouselContainer.current.getBoundingClientRect().width),
            setCarouselPosition(0),
            carouselSlider.current.scrollTo({
                top: 0,
                left: 0,
                bahviour: 'smooth'
            }),
        1000);
    }

    useEffect(() => {
        setCarouselContainerSize(carouselContainer.current.getBoundingClientRect().width);
    }, []);

    useEffect(() => { //RESET CAROUSEL ON WINDOW RESIZE
        window.addEventListener('resize', handleWindowResize);
        return () => {
           window.removeEventListener('resize', handleWindowResize)
          };
    }, [carouselContainer]);


    return (
        <div className="carousel__container">
            <div className="carousel" ref={carouselContainer}>
                <div className="carousel__slider" ref={carouselSlider}>
                    {carouselContent}
                </div>
            </div>
            <button
                title="button-left"
                type="button"
                disabled={isScrolling || carouselPosition === 0}
                className={
                    "carousel__arrow carousel__arrow--left"
                }
                onClick={() => handleMoveLeftPressed()}
            />

            <button
                title="button-right"
                type="button"
                disabled={isScrolling || carouselPosition === 1}
                className={
                    "carousel__arrow"
                } 
                onClick={() => handleMoveRightPressed()}
            />
        </div>
    )
}


export default Carousel;