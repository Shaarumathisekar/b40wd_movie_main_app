import { Counter } from "./Counter";

//Welcome components
// function Welcome({ name }) {
//   return (
//     <section>
//       <h1 className="user-name">
//         Hello, <span className="user-first-name">{name}</span>
//       </h1>
//     </section>
//   );
// }
//User Componentes (Declaration)
//object Destructing we can use while declaring(ES6)
export function User({ pic, name }) {
    //console.log(props, typeof props); //Object
    //const { pic, name } = props; //object destructuring (ES6)
    return (
        <section>
            <img className="user-profile-pic"
                src={pic}
                alt={name} />
            <h1 className="user-name">
                Hello, <span className="user-first-name">{name} ✌✌</span>
            </h1>;
            <Counter />
        </section>
    );
}
