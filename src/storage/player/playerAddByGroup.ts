import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "utils/AppError";

import { PLAYER_COLLECTION } from "storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./PlayersGetByGroup";

export async function PlayerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storagedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storagedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storagedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}