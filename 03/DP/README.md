Design Patterns

-- O que e isso?
    - padrões de projeto
    - soluções generalistas para problemas recorrentes durante o desenvolvimento de um software.
    - não se trata de um framework, mas sim de uma definição de alto nivel de resolver problemas comuns.

-- Pattern Language
    - 1978
    - Christopher Alexander, Sara Ishikawa, Murray Silverstein
    - 253 tipos de problemas/desafios de projetos

-- Formato de uma pattern
    a) Nome
    b) Exemplo
    c) Contexto
    d) Problema
    e) Solução

-- Using Pattern Languages on OOP
    - 1987 Kent Beck e Ward Cunningham
    - 5 padrões de projetos

-- Design Patterns: Elements of Reusable OO Software
    - 1994
    - Gand of Four: Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides
    - DEsign Patterns: criação, estruturais e comportamentais.

-- Padrões de criação
    - aqueles que abstraem e/ou adiam o processo de criação dos projetos
    - ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados
    - tipos
        a) Abstract Factory
        b) Builder
        c) Factory Method
        d) Prototype
        e) Singleton

-- Padrões estruturais
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Business Delegate
    - Flyweight
    - Proxy

-- Padrões comportamentais
    - concentral nos algoritmos e atribuições de responsabilidades entre objetos
    - eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre objetos.
    - tipos: 
        a) Chain of Responsibility
        b) Command
        c) Interpreter
        d) Iterator
        e) Mediator
        f) Observer
        g) State
        h) Strategy
        i) Template Method
        j) Visitor

-- Alguns padrões mais utilizados do Design PAtterns
    - Factory >> todas as funcções que retornam um objeto, sem a necessiade de chamá-las com o new, são consideraras funções Factory(fábrica).
    EX:
        function FakeUser(customProperties)
        {
            return
            {
                name: 'Bruno',
                lastName: 'Sohara',
                ...cunstomProperties
            }
        }

        const user = FakeUser({name: 'custom blanks', age: 23})
        console.log(user)

    - Singleton >> cria uma unica instância de uma função construtora e retorna toda vez em que for necessario utilizá-la.
    EX:
        function MyApp()
        {
            if (!MyApp.instance)
            {
                MyApp.instance = this
            }

            return MyApp.instance
        }

        const p = MyApp.call({name: 'Bruno'})
        const p2 = MyApp.call({name: 'Custom same'})

        console.log(p)
        console.log(p2)

    - Decorator >> a função recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente
    EX:
        let loggedIn = false

        function callIfAuthenticated(fn)
        {
            return !!loggedIn && fn()
        }


        function sum(a, b)
        {
            return a + b
        }

        console.log(callIFAuthenticated(() => sum(3, 3))

        loggedIn = true
        console.log(callIFAuthenticated(() => sum(3, 3))

        loggedIn = false
        console.log(callIFAuthenticated!() => sum(3, 3))

======================================================================================================================================================================
        @Component({
            selector: 'app-react-favorite-color',
            template:  `Favorite Color: <input type="text" [formControl]="favoriteColorControl">`
        })

        export class FavoriteColorComponent
        {
            favoriteColorControl = new FormControl('');
        }

    - Observer >> pattern muito popular em aplicações JS. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado
    EX:
    class Observable
    {
        constructor()
        {
            this.observers = []
        }

        subscribe(f)
        {
            this.observers.push(f)
        }

        unsubscribe(f)
        {
            this.observers = this.observers.filter(subscriber => subscriber !== f)
        }

        notify(data)
        {
            this.observers.forEach(observer => observer(data))
        }
    }

    const o new Observable

    const logData1 = data => console.log(`subscriber: ${data}`)
    const logData2 = data => console.log(`subscriber: ${data}`)

    o.subscribe(logData1)
    o.subscribe(logData2)

    o.notify('notified 1')

    o.unsubscribe(logData1)

    - Module >> possibilita organizarmos melhor o nosso codigo, sem a necessidade de expor variaveis globais
    EX:
        class Person
        {
            constructor(name)
            {
                this.name = name
            }
        }

        export default Person

        //Utilizando Person em outro arquivo .js
        import Person from './models/person'

