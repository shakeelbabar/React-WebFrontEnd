import React, {Component} from 'react';
import { Media } from 'reactstrap';
import 'f:/Coursera/Web Development/Front-End with React/confusion/src/App.css';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of A unique combination of A unique combination of A unique combination of '
                }, 
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated'
                },
                {
                    id: 3,
                    name: 'Elaicheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated Deep fried Zucchini coated'
                }
            ]
        }
    }

    render(){

        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li" className="">
                        <Media left middle className="">
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading className="">{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu};
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;