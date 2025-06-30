import { db } from "../firebase";
import { addDoc, collection, getDocs  } from "firebase/firestore";


export async function initKittens() {
    const kittens = [
        { name: 'Garfield', color: 'orange', weight: 5, gender: 1 },
        { name: 'Nermal', color: 'gray', weight: 3, gender: 0 },
        { name: 'Simba', color: 'golden', weight: 4, gender: 1 },
        { name: 'Nala', color: 'tan', weight: 3.5, gender: 0 },
        { name: 'Tiger', color: 'striped', weight: 4.2, gender: 1 },
        { name: 'Kitty', color: 'white', weight: 2.8, gender: 0 },
        { name: 'Milo', color: 'black', weight: 4.0, gender: 1 },
        { name: 'Luna', color: 'gray tabby', weight: 3.1, gender: 0 },
        { name: 'Leo', color: 'ginger', weight: 4.4, gender: 1 },
        { name: 'Bella', color: 'white and gray', weight: 3.3, gender: 0 },
        { name: 'Oliver', color: 'orange tabby', weight: 4.6, gender: 1 },
        { name: 'Chloe', color: 'tortoiseshell', weight: 2.9, gender: 0 },
        { name: 'Charlie', color: 'brown', weight: 4.1, gender: 1 },
        { name: 'Daisy', color: 'cream', weight: 3.2, gender: 0 },
        { name: 'Max', color: 'gray and white', weight: 4.3, gender: 1 },
        { name: 'Lily', color: 'calico', weight: 3.0, gender: 0 },
        { name: 'Oscar', color: 'black and white', weight: 4.5, gender: 1 },
        { name: 'Cleo', color: 'beige', weight: 2.7, gender: 0 },
        { name: 'Jasper', color: 'smoke', weight: 4.8, gender: 1 },
        { name: 'Misty', color: 'silver', weight: 3.4, gender: 0 }
    ];
    try {
        kittens.forEach(async kitten => {
            await addDoc(collection(db, 'kittens'), kitten);
        });
    } catch (error) {
        console.error(error)
        return false
    }
    return true
}

export async function getData({dbname}){
    const querySnapshot = await getDocs(collection(db, dbname));
	return querySnapshot.docs.map((doc) => {
		const data = doc.data();
		return {
			id: doc.id,
			name: data.name,
			color: data.color,
			gender: data.gender,
			weight: data.weight
		};
	});
}
