import React from 'react';
import useServices from '../useServices/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const Proceed = window.confirm('Are you sure, bruh ?')
        if (Proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE',

            })
            .then(res=>res.json())
            .then(data=>{
                const remainingService =services.filter(service=>service._id!==id)
                setServices(remainingService)
            })
        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>manage services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}<button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;