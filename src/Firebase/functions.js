/* eslint-disable no-unused-vars */
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
import app from './config.js'

const db = getFirestore(app)

async function getProjects() {
    try {

        const docRef = collection(db, 'Projects')
        const docSnap = await getDocs(docRef);

        if (!docSnap) { return null }

        return docSnap.docs.map(doc => {
            return (doc.data())
        })

    } catch (error) {
        console.log(error.message)
    }
}

getProjects()

async function getMiniProjects() {
    try {
        const docRef = collection(db, 'Mini Projects')
        const docSnap = await getDocs(docRef);

        if (!docSnap) { return null }

        return docSnap.docs.map(doc => {
            return (doc.data())
        })

    } catch (error) {
        console.log(error.message)
    }
}


export {
    getProjects,
    getMiniProjects
}