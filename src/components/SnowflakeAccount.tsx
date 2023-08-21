function SnowflakeAccount() {
  return (
    <div className="flex gap-16 justify-center">
      <Card
        title="Direct Share"
        text="If you are already a Snowflake customer"
      />
      <Card
        title="Reader Account"
        text="If you don't have Snowflake"
        alt={true}
      />
    </div>
  );
}

interface CardProps {
  title: string;
  text: string;
  alt: boolean;
}

function Card({ title, text, alt }: CardProps) {
  return (
    <div
      className={`p-4 h-36 w-96 align-middle not-prose shadow-lg transform transition duration-500 hover:scale-110 hover:cursor-pointer rounded-md ${
        alt ? "bg-green-500" : "bg-sky-500"
      }`}
    >
      <h5 className="text-white text-lg font-semibold">{title}</h5>

      <p className={`text-md ${alt ? "text-green-900" : "text-sky-900"}`}>
        {text}
      </p>
    </div>
  );
}

export default SnowflakeAccount;
