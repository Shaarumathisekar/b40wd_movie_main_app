function Welcome({ name }) {
    return (
        <section>
            <h1 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h1>
        </section>
    );

}


const double = (n) => n * 2;

export { Welcome, double };