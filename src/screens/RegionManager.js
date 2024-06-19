import React, { useState, useEffect } from 'react';
import '../styles/manager.css';
import { toast } from 'react-toastify';
import axios from '../api/axiosConfig';

const initialRegion = {
    name: '',
    description: ''
};

const RegionManager = () => {
    const [region, setRegion] = useState(initialRegion);
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await axios.get('/api/regions');
                setRegions(response.data);
            } catch (error) {
                console.error("Error fetching regions!");
            }
        };
        fetchRegions();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegion({
            ...region,
            [name]: value
        });
    };

    const handleAddRegion = async () => {
        try {
            const response = await axios.post('/api/regions/add', {
                name: region.name,
                description: region.description
            });
            window.location.reload()
        } catch (error) {
            console.error("Error adding region!", error);
        }
    };

    const handleUpdateRegion = async () => {
        try {
            await axios.post('/api/regions/update', {
                id: region.id,
                name: region.name,
                description: region.description
            });
            window.location.reload()
        } catch (error) {
            console.error("Error updating region!", error);
        }
    };

    const handleDeleteRegion = async (regionId) => {
        try {
            await axios.delete(`/api/regions/delete/${regionId}`);
            window.location.reload()
        } catch (error) {
            console.error("Error deleting region!", error);
        }
    };

    return (
        <div>
            <div className='title-section'>
                <h1>Region manager</h1>
            </div>
            <div className="container-manager">
                <div className="form-section">
                    <h2>Region Form</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Id:</td>
                                <td><input type="text" name="id" value={region.id} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" name="name" value={region.name} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td><input type="text" name="description" value={region.description} onChange={handleInputChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleAddRegion}>Add</button>
                    <button onClick={handleUpdateRegion}>Update</button>
                </div>
                <div className="table-section">
                    <h2>Region List</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {regions.map(reg => (
                                <tr key={reg.id}>
                                    <td>{reg.id}</td>
                                    <td>{reg.name}</td>
                                    <td>{reg.description}</td>
                                    <td>
                                        <button onClick={() => handleDeleteRegion(reg.id)}>Delete</button>
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

export default RegionManager;