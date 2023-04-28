import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductChildDetailsComponent from './product-child-details.component';

function ProductDetailsComponent (props) {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('price');
    const [filteredProduct, setFilteredProduct] = useState({});

    console.log(filteredProduct);

    console.log(name);

    // setFilteredProduct({name: 'Karthik'});
    // console.log(params);

    // console.log(filteredProduct);
    const products = [
        {
            id: 1,
            name: 'REDMI 9i Sport (Carbon Black, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7199,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 2,
            name: 'MOTOROLA e40 (Carbon Gray, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 8999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 3,
            name: 'POCO C31 (Royal Blue, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7499,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 4,
            name: 'REDMI Note 11 SE (Cosmic White, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 11349,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/7/s/-original-imaghh2fmnzyzn2g.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 5,
            name: 'MOTOROLA G62 5G (Midnight Gray, 128 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 14999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 6,
            name: 'REDMI 9i Sport (Carbon Black, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7199,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 7,
            name: 'MOTOROLA e40 (Carbon Gray, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 8999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 8,
            name: 'POCO C31 (Royal Blue, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 7499,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 9,
            name: 'REDMI Note 11 SE (Cosmic White, 64 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 11349,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/7/s/-original-imaghh2fmnzyzn2g.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
        {
            id: 10,
            name: 'MOTOROLA G62 5G (Midnight Gray, 128 GB)',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',
                '16.59 cm (6.53 inch) HD+ Display',
                '13MP Rear Camera | 5MP Front Camera',
                '5000 mAh Li-Polymer Battery',
                'MediaTek Helio G25 Processor'
            ],
            price: 14999,
            imgSrc: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70',
            detailedSpecifications: {
                general: {
                    inTheBox: 'Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guide',
                    modelNumber: 'MZB0A0XIN|MZBOBQSIN',
                    color: 'Color Green',
                    browseType: 'SmartPhones',
                    simType: 'Dual Sim',
                    touchScreen: 'Yes'
                }
            },
            ratingReviews: [
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Very nice phone in budget, basic and simple phone for basic need, stylish design rich look in low price. Not fast charging but basic Charging and normal charger. No finger print sensor unlock feature. But phone is good according to it's range, most important it's brand redmi. Most trusted brand in india. Love this"
                }
            ],
            questionAnswers: [
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                },
                {
                    question: 'Can we play free fire in this Redmi 9i phone',
                    answer: 'Outstanding performance, You can play free fire. battery backup also too good.'
                },
                {
                    question: 'Is it connect to tv',
                    answer: "Yes...of course.. don't worry you can go for it ."
                }
            ]
        },
    ];
    useEffect(() => {
        if (params && params.id) {
            const product = products.find(product => product.id == params.id);
            setFilteredProduct(product);

            console.log(filteredProduct);
        }
    }, [params]);
    return (
        <div>
            <div className="container">
                <div className="row my-4 border-bottom py-2">
                    <div className="col-sm-3">
                        <img width="120px" src={filteredProduct.imgSrc} />
                    </div>
                    <div className="col-sm-6">
                        <h3>{filteredProduct.name}</h3>
                        <ul class="list-group">
                            {filteredProduct.specifications && filteredProduct.specifications.map(specify => (
                                <li class="list-group-item">{specify}</li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>{filteredProduct.price}</h3>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link" to="specifications">Specifications</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="rating-reviews">Rating & Reviews</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="question-answers">Question & Answers</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> */}

            {/* <Outlet /> */}

            <ProductChildDetailsComponent productInfo={filteredProduct}/>
        </div>
    )
}

export default ProductDetailsComponent;