/* eslint-disable no-unused-vars */
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import app from './config.js'

const db = getFirestore(app)

async function getProjects() {
    try {
        
        const docRef = doc(db, 'PortFolio', 'My Projects')
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            return Object.entries(docSnap.data())
        }
        return null

    } catch (error) {
        console.log(error.message)
    }
}

async function getMiniProjects() {
    try {
        
        const docRef = doc(db, 'PortFolio', 'Mini Projects')
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            return Object.entries(docSnap.data())
        }
        return null

    } catch (error) {
        console.log(error.message)
    }
}


export {
    getProjects,
    getMiniProjects
}