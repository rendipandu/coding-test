import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName) {
    const response = await getDocs(collection(firestore, collectionName));
    const data = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName, id) {
    const response = await getDoc(doc(firestore, collectionName, id));
    const data = response.data();

    return data;
}