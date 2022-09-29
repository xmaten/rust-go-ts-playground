const getInput2 = () => {
    return `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`
}

type Point = {
    x: number,
    y: number
}

type Line = {
    p1: Point
    p2: Point
}

const isStraight = (line: Line) => {
    return line.p1.x === line.p2.x || line.p1.y === line.p2.y
}

const parsePoint = (p: string) => {
    const [x, y] = p.split(',')

    return {
        x: +x,
        y: +y
    }
}

const parseLine2 = (line: string) => {
    const [p1, p2] = line.split(' -> ')

    return {
        p1: parsePoint(p1),
        p2: parsePoint(p2)
    }
}

const lines = getInput2().split('\n').map(parseLine2).filter(isStraight)
console.log(lines)