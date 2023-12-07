import neighborsData from "../data/neighbors"
import { NeighborCardProps } from "../components/neighborCard"
import villagers from '../data/villagers.json';


export const getNeighbours = ( array: Array<NeighborCardProps>  ) => {
    const neighbors = neighborsData.map((neighbor, index) => {

        const path = `${neighbor.Name.toLocaleLowerCase().split(' ').join('-').replaceAll('.', '')}.png`;
        return {...neighbor, Icon: '/icons/' + path, Image: '/images/' + path,
            Color: villagers[index]["Bubble-color"],
            TextColor: villagers[index]["text-color"],
        };
    });    
    return neighbors;
}



export const realNeighbors = getNeighbours(neighborsData)
// // shuffle(
    // )

export const isBirthday = (birthday: string) => {
    const today = new Date();
    const date = new Date(birthday.substring(0, birthday.length - 2) + " " + today.getFullYear());
    return today.getMonth() === date.getMonth() && today.getDate() === date.getDate();
}
