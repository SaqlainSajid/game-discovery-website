import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ApiClient from "../Services/ApiClient";

interface game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Table of Games</TableCaption>
          <Thead>
            <Tr>
              <Th>Game Name</Th>
              <Th isNumeric>Game ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            {games.map((game) => (
              <Tr key={game.id}>
                <Td>{game.name}</Td>
                <Td>{game.id}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th isNumeric></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default GameGrid;
