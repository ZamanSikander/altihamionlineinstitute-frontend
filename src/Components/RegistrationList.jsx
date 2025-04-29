import React from 'react'

const RegistrationList = () => {
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow-md">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">#</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Course</th>
                            <th className="py-2 px-4 border-b">Submitted At</th>
                        </tr>
                    </thead>
                        
                </table>
            </div>
        </div>
    );
}
export default RegistrationList