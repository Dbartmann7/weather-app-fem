import Main from "./(components)/Main/Main";
import PageHeader from "./(components)/Main/Components/PageHeader"
import { getLocationsData, getWeather } from "./actions";

export default async function Page() {
  

  return (
    <div className="w-screen h-screen p-5 flex flex-col text-white">
      <Main/>
    </div>
  );
}
