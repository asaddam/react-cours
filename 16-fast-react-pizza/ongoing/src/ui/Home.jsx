import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="my-10 text-center font-semibold sm:my-16">
      <h1 className="mb-8 text-center text-xl">
        The best pizza
        <br />
        <span className="text-yellow-400">
          Straight out of the oven, Straight to you
        </span>
      </h1>

      <CreateUser />  
    </div>
  );
}
