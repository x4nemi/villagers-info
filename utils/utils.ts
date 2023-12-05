import neighborsData from "../data/neighbors"
import { NeighborCardProps } from "../components/neighborCard"

export const getNeighbours = ( array: Array<NeighborCardProps>  ) => {
    const neighbors = neighborsData.map(neighbor => {
        return {...neighbor, Icon: `/icons/${neighbor.Name.toLocaleLowerCase().split(' ').join('-').replaceAll('.', '')}.png`};
    });
    return neighbors;
}

export const realNeighbors = getNeighbours(neighborsData);

export const isBirthday = (birthday: string) => {
    const today = new Date();
    const date = new Date(birthday.substring(0, birthday.length - 2) + " " + today.getFullYear());
    return today.getMonth() === date.getMonth() && today.getDate() === date.getDate();
}
