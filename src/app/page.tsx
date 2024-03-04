
import Header from "../app/components/Header";
export default function Home() {
  return (<>
      <Header page={"home"} />
      <main className="flex fixed w-full min-h-screen items-center justify-center">
        <div className="w-11/12 h-72 bg-blue-800">
        </div>
      </main>
      </>);
}
