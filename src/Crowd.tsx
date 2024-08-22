import './Crowd.css';

const Crowd = ({ numOfPeople }: { numOfPeople: number }) => {
  const people = Array.from({ length: numOfPeople });
  return (
    <div className="crowd">
      {people.map((_, i) => (
        <p key={i}>你</p>
      ))}
    </div>
  );
};

export default Crowd;
