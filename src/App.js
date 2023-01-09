import "./App.css";
import { Inputs } from "./components/Inputs";
import WaktuDanLokasi from "./components/WaktuDanLokasi";
import TombolAtas from "./components/TombolAtas";
import TemperaturDanDetail from "./components/TemperaturDanDetail";
import Ramalan from "./components/Ramalan";
import getFormattedWeatherData from "./services/cuacaService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "jakarta" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const pesan = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + pesan);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Succesfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const gantiBackground = () => {
    if (!weather)
      return "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold)
      return "bg-gradient-to-r from-indigo-700 via-zinc-700 to-grey-700";

    return "bg-gradient-to-r from-indigo-600 via-zinc-700 to-purple-500";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      h-fit shadow-xl shadow-gray-600 ${gantiBackground()}`}
    >
      <TombolAtas setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <WaktuDanLokasi weather={weather} />
          <TemperaturDanDetail weather={weather} />

          <Ramalan title="hourly forecast" />
          <Ramalan title="daily forecast" />
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
