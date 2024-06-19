import React, { useState, useEffect } from 'react';
import '../styles/manager.css';

const initialProperty = {
    name: '',
    adultCapacity: 0,
    childrenCapacity: 0,
    petsAllowed: false,
    address: '',
    price: 0,
    discount: 0,
    star: 0,
    singleBed: 0,
    doubleBed: 0,
    bedRoom: 0,
    quantity: 0,
    region: '',
    propertyType: ''
};

const PropertyManager = () => {
    const [property, setProperty] = useState(initialProperty);
    const [properties, setProperties] = useState([]);
    const [regions, setRegions] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);

    useEffect(() => {
        fetch('your_api_endpoint_for_regions')
            .then(response => response.json())
            .then(data => setRegions(data))
            .catch(error => console.error('Error fetching regions:', error));

        fetch('your_api_endpoint_for_property_types')
            .then(response => response.json())
            .then(data => setPropertyTypes(data))
            .catch(error => console.error('Error fetching property types:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value
        });
    };

    const handleAddProperty = () => {
        setProperties([...properties, { ...property, id: properties.length + 1 }]);
        setProperty(initialProperty);
    };

    const handleDeleteProperty = (id) => {
        setProperties(properties.filter(prop => prop.id !== id));
    };

    return (
        <div>
            <div className='title-section'>
                <h1>Product manager</h1>
            </div>
            <div className="container-manager">
                <div className="form-section">
                    <h2>Property Form</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Id:</td>
                                <td><input type="text" name="id" value={property.id} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" name="name" value={property.name} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Adult Capacity:</td>
                                <td><input type="number" name="adultCapacity" value={property.adultCapacity} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Children Capacity:</td>
                                <td><input type="number" name="childrenCapacity" value={property.childrenCapacity} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Pets Allowed:</td>
                                <td><input type="checkbox" name="petsAllowed" checked={property.petsAllowed} onChange={(e) => setProperty({ ...property, petsAllowed: e.target.checked })} /></td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td><input type="text" name="address" value={property.address} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Price:</td>
                                <td><input type="number" name="price" value={property.price} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Discount:</td>
                                <td><input type="number" name="discount" value={property.discount} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Star:</td>
                                <td><input type="number" name="star" value={property.star} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Single Bed:</td>
                                <td><input type="number" name="singleBed" value={property.singleBed} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Double Bed:</td>
                                <td><input type="number" name="doubleBed" value={property.doubleBed} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Bed Room:</td>
                                <td><input type="number" name="bedRoom" value={property.bedRoom} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Quantity:</td>
                                <td><input type="number" name="quantity" value={property.quantity} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Region:</td>
                                <td>
                                    <select name="region" value={property.region} onChange={handleInputChange}>
                                        <option value="">Select Region</option>
                                        {regions.map(region => (
                                            <option key={region.id} value={region.name}>{region.name}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Property Type:</td>
                                <td>
                                    <select name="propertyType" value={property.propertyType} onChange={handleInputChange}>
                                        <option value="">Select Property Type</option>
                                        {propertyTypes.map(type => (
                                            <option key={type.id} value={type.name}>{type.name}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleAddProperty}>Add</button>
                    <button>Update</button>
                </div>
                <div className="table-section">
                    <h2>Properties List</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Adult Capacity</th>
                                <th>Children Capacity</th>
                                <th>Pets Allowed</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Star</th>
                                <th>Single Bed</th>
                                <th>Double Bed</th>
                                <th>Bed Room</th>
                                <th>Quantity</th>
                                <th>Region</th>
                                <th>Property Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map(prop => (
                                <tr key={prop.id}>
                                    <td>{prop.name}</td>
                                    <td>{prop.adultCapacity}</td>
                                    <td>{prop.childrenCapacity}</td>
                                    <td>{prop.petsAllowed ? 'Yes' : 'No'}</td>
                                    <td>{prop.address}</td>
                                    <td>{prop.price}</td>
                                    <td>{prop.discount}</td>
                                    <td>{prop.star}</td>
                                    <td>{prop.singleBed}</td>
                                    <td>{prop.doubleBed}</td>
                                    <td>{prop.bedRoom}</td>
                                    <td>{prop.quantity}</td>
                                    <td>{prop.region}</td>
                                    <td>{prop.propertyType}</td>
                                    <td>
                                        <button onClick={() => handleDeleteProperty(prop.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PropertyManager;
