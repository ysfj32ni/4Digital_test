import axios  from "axios"
import React, { useEffect } from "react"




const StudentList = () => {
    
    useEffect(() => {
        const getStudents = async () => {
            try {
                
                const response = await axios.get('http://localhost:3001/students/allStudents',
                    {
                        withCredentials: true
                    }
                )
                console.log('inside getStudents')
                console.log('response is =====> ', response.status)
                // console.log('response is =====> ', response.data)
                if (response.status === 200) {
                    const data = response.data
                    console.log('data is =====> ', data)
                }
        
            } catch (error) {
                console.log(error)
            }
        }
        getStudents()
    }, []);
    
    return (    
        <div>
            
        </div>
    )
}

export default StudentList;