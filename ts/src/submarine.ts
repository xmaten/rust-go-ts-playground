const getInput = () => {
    return `forward 5
down 5
forward 8
up 3
down 8
forward 2`
}

const parseLine = (line: string): [number, number] => {
    const [dir, a] = line.split(" ")
    const amount = +a

    if (dir === "forward") {
        return [amount, 0]
    } else if (dir === "up") {
        return [0, -amount]
    }

    return [0, amount]
}

const out = getInput().split(" ").map(x => parseLine(x)).reduce((acc, amount) => {
    acc[0] += amount[0]
    acc[1] += amount[1]

    return acc
}, [0, 0])
