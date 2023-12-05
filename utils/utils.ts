import neighborsData from "../data/neighbors"
import { NeighborCardProps } from "../components/neighborCard"


interface Animal {
    'Anteater': string;
    'Bear': string;
    'Bird': string;
    'Bull': string;
    'Cat': string;
    'Cub': string;
    'Chicken': string;
    'Cow': string;
    'Deer': string;
    'Dog': string;
    'Duck': string;
    'Elephant': string;
    'Frog': string;
    'Goat': string;
    'Gorilla': string;
    'Hamster': string;
    'Hippo': string;
    'Horse': string;
    'Koala': string;
    'Kangaroo': string;
    'Lion': string;
    'Monkey': string;
    'Mouse': string;
    'Octopus': string;
    'Ostrich': string;
    'Penguin': string;
    'Pig': string;
    'Rabbit': string;
    'Rhino': string;
    'Sheep': string;
    'Squirrel': string;
    'Tiger': string;
    'Wolf': string;
    'Eagle': string;
}

export const getNeighbours = ( array: Array<NeighborCardProps>  ) => {
    const animals : Record<string, string>  = {
        'Anteater': 'ant',
        'Bear': 'bea',
        'Bird': 'brd',
        'Bull': 'bul',
        'Cat': 'cat',
        'Cub': 'cbr',
        'Chicken': 'chn',
        'Cow': 'cow',
        'Deer': 'der',
        'Dog': 'dog',
        'Duck': 'duk',
        'Elephant': 'elp',
        'Frog': 'flg',
        'Goat': 'goa',
        'Gorilla': 'gor',
        'Hamster': 'ham',
        'Hippo': 'hip',
        'Horse': 'hrs',
        'Koala': 'kal',
        'Kangaroo': 'kgr',
        'Lion': 'lon',
        'Monkey': 'mnk',
        'Mouse': 'mus',
        'Octopus': 'ocp',
        'Ostrich': 'ost',
        'Penguin': 'pgn',
        'Pig': 'pig',
        'Rabbit': 'rbt',
        'Rhino': 'rhn',
        'Sheep': 'shp',
        'Squirrel': 'squ',
        'Tiger': 'tig',
        'Wolf': 'wol',
        'Eagle': 'prb',
    }
    var lastPosAnimal : Record<string, number> = {
        'Anteater': 0,
        'Bear': 0,
        'Bird': 0,
        'Bull': 0,
        'Cat': 0,
        'Cub': 0,
        'Chicken': 0,
        'Cow': 0,
        'Deer': 0,
        'Dog': 0,
        'Duck': 0,
        'Elephant': 0,
        'Frog': 0,
        'Goat': 0,
        'Gorilla': 0,
        'Hamster': 0,
        'Hippo': 0,
        'Horse': 0,
        'Koala': 0,
        'Kangaroo': 0,
        'Lion': 0,
        'Monkey': 0,
        'Mouse': 0,
        'Octopus': 0,
        'Ostrich': 0,
        'Penguin': 0,
        'Pig': 0,
        'Rabbit': 0,
        'Rhino': 0,
        'Sheep': 0,
        'Squirrel': 0,
        'Tiger': 0,
        'Wolf': 0,
        'Eagle': 0,
    }

    // console.log(files.length, neighborsData.length);
    
    const neighbors = neighborsData.map(neighbor => {
        var numberr = '';
        if(!!animals[neighbor.Species]){
            numberr = String(lastPosAnimal[neighbor.Species]).length === 1 ? `0${lastPosAnimal[neighbor.Species]}` : String(lastPosAnimal[neighbor.Species]);
            lastPosAnimal[neighbor.Species] = lastPosAnimal[neighbor.Species] + 1;
        } else return null;
        
        const iconPath = `${animals[neighbor.Species]}${numberr}.png`;
        
        // if(!files.includes(iconPath)){
        //     lastPosAnimal[neighbor.Species] = lastPosAnimal[neighbor.Species] - 1;
        //     return null;
        // }
       


        return {...neighbor, Icon: `/icons/${neighbor.Name.toLocaleLowerCase().split(' ').join('-').replaceAll('.', '')}.png`};
    });

    return neighbors.filter(neighbor => !!neighbor);
}

export const realNeighbors = getNeighbours(neighborsData);
