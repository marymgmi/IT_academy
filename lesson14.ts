// 1. Create interface for Users

interface UsersInterface {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}


const users: UsersInterface[] = [

    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },

    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }

]


// 2. Create interface for roles Users, Admin and Person



interface AdminRole {

    role: string | null;
}

interface UserRole {

    occupation: string | null;
}

interface Person extends AdminRole, UserRole {
    name: string;
    age: number;
};

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        role: null,
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
        occupation: null,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        role: null,
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
        occupation: null,
    }
];

// 3. Напишите анотации типов к этому классу: export class ObjectManipulator {}

export class ObjectManipulator {

    constructor(protected obj: any) {}

    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): any {
        return this.obj;
    }
}




/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
 export function map(mapper: Function, input: Array<any>): Array<any> | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: Array<any>): Function | Array<any> {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper());
        };
    }
    return input.map(mapper());
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer: Function, input: Array<any>):Array<any> | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: Array<any>): Array<any> | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer());
        };
    }
    return input.filter(filterer());
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): Number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): Number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}
