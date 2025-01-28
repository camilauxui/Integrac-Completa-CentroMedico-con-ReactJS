import React from 'react';  
import { Navigate, useLocation } from 'react-router-dom';  
// En un futuro, importarás tu hook de autenticación aquí  
// import { useAuth } from './contexts/AuthContext';  

const ProtectedRoute = ({ children }) => {  
    // Aquí verificarás si el usuario está autenticado con un hook de autenticación  
    // const { isAuthenticated } = useAuth();  
    // Por ahora, simulamos que no hay usuario autenticado  
    const isAuthenticated = false;  
    const location = useLocation();  

    if (!isAuthenticated) {  
        // Si no está autenticado, redirige a una página de inicio de sesión  
        // Pasamos la ubicación actual en state para redirigir después del login  
        return <Navigate to="/login" state={{ from: location }} replace />;  
    }  

    // Si está autenticado, muestra los children (la ruta protegida)  
    return children;  
};  

export default ProtectedRoute;