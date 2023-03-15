/**
 * Solves: Creation of items famiilies  without specifying concrete item.  Lowering high coupling.
 * How: Abstract factory define all items producing by factory. 
 * Condition: Instances has to match the same interface
 */

type Material = 'wood' | 'metal';

interface Hammer {
    material: Material;
    slam(): void;
}

interface Axe {
    material: Material;
    cut(): void;
}

interface InstrumentFactory {
    createHammer(): Hammer;
    createAxe(): Axe;
}


const createMetalFactory = (): InstrumentFactory => {
    return {
        createAxe() {
            return {
                material: 'metal',
                cut: () =>  console.log('cutting with sharp edge!')
            }
        },
        createHammer: () => {
            return {
                material: 'metal',
                slam: () => console.log('slamming with metal sound!')
            }
        }
    }
}

const createWoodFactory = (): InstrumentFactory => {
    return {
        createAxe() {
            return {
                material: 'wood',
                cut: () =>  console.log('cutting with blunt edge!')
            }
        },
        createHammer: () => {
            return {
                material: 'wood',
                slam: () => console.log('slamming with clunk sound!')
            }
        }
    }
}

const factoryCreator = (type: Material): InstrumentFactory => {
    const instrumentFactories = {
        metal: createMetalFactory,
        wood: createWoodFactory
    }
    return instrumentFactories[type]()
}

// Factories by Type
const woodFactory = factoryCreator('wood');
const metalFactory = factoryCreator('metal');

// Client Code that uses abstract Factory as param
const createAxe = (factory: InstrumentFactory): Axe => factory.createAxe()
const createHammer = (factory: InstrumentFactory): Hammer => factory.createHammer()

// Combinations of items provided by different factories
const metalAxe = createAxe(metalFactory);
const metalHammer = createHammer(metalFactory);
const woodAxe = createAxe(woodFactory);
const woodHammer = createHammer(woodFactory);
