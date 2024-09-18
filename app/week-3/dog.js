export default function Dog({ name, breed, age, colour }) {
  return (
    <div className="my-2 ml-4">
      <h2 className="text=lg font-bold text-sky-700">{name}</h2>
      <p className="text-lg">
        {breed}, {age} years old, {colour}
      </p>
    </div>
  );
}
