function Hello({person}){
    return (
        <div>
            <h1>Hey {person.name}! {person.message} {person.seatNumbers}</h1>
        </div>
    );
}
export default Hello;