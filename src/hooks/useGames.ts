import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import { CanceledError } from "axios";

export interface game {
    id: number;
    name: string;
    background_image: string;
  }
  
interface FetchGameResponse {
    count: number;
    results: game[];
  }

const useGames = () => {
    const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    ApiClient.get<FetchGameResponse>("/games", {signal:controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {if(err instanceof CanceledError)return; setError(err.message)});

      return () => controller.abort();
  }, []);

  return {error, games};
}

export default useGames