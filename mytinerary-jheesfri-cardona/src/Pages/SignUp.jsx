import React, { useState } from 'react';
import axios from 'axios';  // Usamos Axios para hacer la solicitud HTTP
import { useNavigate } from 'react-router-dom';
import { CallToActionSignIn } from '../Components/CallToActionSignIn.jsx';
import SignInGoogle from '../Components/SignInGoogle.jsx'

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    photo: '',
    country: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user);
      const response = await axios.post('http://localhost:8080/mytinerary/users/create', user);
      console.log(response.data);

      setSuccess('User registered successfully');
      setError('');  // Limpiar error si la respuesta es exitosa

      navigate('/')
    } catch (err) {
      // Maneja el error de forma más robusta
      if (err.response && err.response.data) {
        console.log(err.response);
        console.log(err.response.data);

        setError(err.response.data.messages || 'Error in registration ok');
      } else {
        setError('An unexpected error occurred.');
      }
      setSuccess('');  // Limpiar mensaje de éxito si hay un error
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro de Usuario</h2>
      {/* Mostrar mensaje de error si existe */}
      {error && <p className="text-red-500">{error}</p>}
      {/* Mostrar mensaje de éxito si existe */}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">LastName</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>


        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL:</label>
          <input
            type="text"
            name="photo"
            value={user.photo}
            onChange={handleChange}
            placeholder="Enter photo URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
            value={user.country}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          >
            <option value="" disabled>
              Select your country
            </option>
            <option value="Colombia">Colombia</option>
            <option value="USA">USA</option>
            <option value="Mexico">Mexico</option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="Spain">Spain</option>
          </select>

        </div>

        <div className="text-center">
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Registrar
          </button>
          <div className='flex'>
            <CallToActionSignIn></CallToActionSignIn>
            <SignInGoogle></SignInGoogle>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Signup;
