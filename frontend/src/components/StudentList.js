import axios  from "axios"
import React, { useEffect } from "react"

// type Student = {
//     fullName : string,
//     age : string ,
//     email : string,
// }

const getStudents = async () => {
    try {

        const response = await axios.get(`${process.env.BACKEND_URL}/students/allStudents`)
        if (response.status === 200) {
            const data = response.data
            console.log('data is =====> ', data)
        }

    } catch (error) {
        console.log(error)
    }
}

// useEffect(() => {
//     getStudents()
// }, []);

const StudentList = () => {
    

    return (    
        <div>
            
        </div>
    )
}

export default StudentList;