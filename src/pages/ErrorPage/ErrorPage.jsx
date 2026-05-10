import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button className='border-2 border-amber-200 text-white px-2 rounded-3xl bg-blue-400' onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default ErrorPage;