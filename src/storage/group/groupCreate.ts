import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "storage/storageConfig";
import { AppError } from "utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storagedGroups = await groupsGetAll();

    const groupAlreadyExists = storagedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storagedGroups, newGroup]);

    await AsyncStorage.setItem(GROUPS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
