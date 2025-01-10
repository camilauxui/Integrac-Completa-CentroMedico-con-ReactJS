import React, { useContext, useEffect, Profiler, useState } from 'react';  
import DoctorCard from './DoctorCard';  
import { DoctorContext } from './contexts/DoctorContext';   
import './DoctorList.css';  

const DoctorList = () => {  
    const { doctors, setDoctors } = useContext(DoctorContext);  
    const [loading, setLoading] = useState(true); // Estado para carga  
    const [error, setError] = useState(null); // Estado para errores  

    useEffect(() => {  
        const loadDoctors = async () => {  
            try {  
                const response = await fetch('https://mocki.io/v1/3e709d3c-d526-49a0-b882-525a5af0b5bb');   
                if (!response.ok) {  
                    throw new Error('Error en la respuesta de la red.'); // Mensaje de error  
                }  
                const doctorsData = await response.json();   
                setDoctors(doctorsData);  
            } catch (error) {  
                console.error('Error al cargar información de los doctores:', error);  
                setError('No se pudieron cargar los doctores. Por favor, inténtalo más tarde.'); // Mensaje de error para el usuario  
            } finally {  
                setLoading(false); // Cambiar el estado de carga a false al final  
            }  
        };  

        loadDoctors(); // Cargar los doctores   
    }, [setDoctors]);  

    // Función para registrar las medidas del Profiler  
    const onRender = (id, phase, actualDuration, baseDuration) => {  
        console.log(`Rendered ${id} during ${phase} phase. Actual duration: ${actualDuration}ms, Base duration: ${baseDuration}ms`);  
    };  

    return (  
        <Profiler id="DoctorList" onRender={onRender}>  
            <div className="doctor-cards-container">  
                {loading ? (  
                    <p>Cargando doctores...</p> // Mensaje de carga  
                ) : error ? (  
                    <p>{error}</p> // Mostrar el mensaje de error si ocurre  
                ) : doctors.length > 0 ? (  
                    doctors.map((doctor) => (  
                        <DoctorCard   
                            key={doctor.id}  
                            name={doctor.name}  
                            specialty={doctor.specialty}  
                            experience={doctor.experience}  
                            availability={doctor.availability}  
                            contact={doctor.contact}  
                            schedule={doctor.schedule}  
                            image={doctor.image}  
                        />  
                    ))  
                ) : (  
                    <p>No hay doctores disponibles.</p>  
                )}  
            </div>  
        </Profiler>  
    );  
};  

export default DoctorList;