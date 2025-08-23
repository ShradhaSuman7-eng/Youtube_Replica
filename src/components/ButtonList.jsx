import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Cricket",
  "Valentines",
];

function ButtonList() {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button data={item} key={index} />;
      })}
    </div>
  );
}
export default ButtonList;
