import Testimonial from '../components/Testimonial';
import Carousel from '../components/Carousel';


const TestimonialWrapper = () => {

    const testimonials = [
        {
            title: 'Resulted in a significant reduction in the cost of insurance',
            content: 'We recently completed an insurance tender and used the services of Gibbs Laidler. The tender resulted in a significant reduction in the cost of insurance, delivering a balanced approach to cost and quality and their assistance throughout the process has helped to raise the profile of insurance and the management of insurable risk across the organisation.',
            reviewer: 'Paul Richmond',
            companyName: 'Watford Community housing',
            iconPath: '/icons/watford-community-housing-icon.jpg',
            iconAltText: 'Watford Community logo',
            reviewerPosition: 'Group Director of Finance Resources'
        },
        
        {
            title: 'We have worked with them for the last ten years on a retained basis',
            content: 'SNG initially used Gibbs Laidler to assist with an insurance tender. We have worked with them for the last ten years on a retained basis assisting the group with insurance and risk issues as we grow and develop. Their help with development risks has been particularly beneficial.',
            reviewer: 'Paul Francis',
            companyName: 'SNG',
            iconPath: '/icons/network-housing-assocation-icon.jpg',
            iconAltText: 'Network Homes logo',
            reviewerPosition: 'Group Insurance Risk Manager'
        },
        
        {
            title: 'We retain Gibbs Laidler in this capacity as the insurance market continues to change',
            content: 'With over 90,000 units, we require the services of an organisation which can work with London & Quadrant to consider the different insurance solutions available. We retain Gibbs Laidler in this capacity as the insurance market continues to change and our approach to insurance needs to adapt to these changes.',
            reviewer: 'Keith Petty',
            companyName: 'London & Quadrant Group',
            iconPath: '/icons/london-and-quadrant-housing-icon.jpg',
            iconAltText: 'London & Quadrant logo',
            reviewerPosition: 'Insurance Manager'
        },
    ]
    
    return (
        <Carousel carouselContent={
            <>
                {
                    testimonials.map((testimonial, i) => {
                        return (
                            <Testimonial
                                key={i}
                                title={testimonial.title}
                                content={testimonial.content}
                                iconPath={testimonial.iconPath}
                                iconAltText={testimonial.iconAltText}
                                companyName={testimonial.companyName}
                                reviewer={testimonial.reviewer}
                                reviewerPosition={testimonial.reviewerPosition}
                            />
                        )
                    })
                }
            </>
        }>
        </Carousel>
    )

}

export default TestimonialWrapper;