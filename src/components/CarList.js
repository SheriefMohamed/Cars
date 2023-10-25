import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from '../store'

function CarList(){
    const dispach = useDispatch()

    const {cars, name} = useSelector(({form ,cars: {data, searchTerm}}) => {
        const filteredCars = data.filter(car => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filteredCars,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
        dispach(deleteCar(car.id));
    }

    const renderedCars = cars.map(car => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })

    return <div className="car-list">
        {renderedCars.length !== 0 ? renderedCars: <div className="no-results">No results</div>}
        <hr />
    </div>
}

export default CarList;